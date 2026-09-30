import { mkdir, appendFile } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { legalCopy } from "@/content/legal";
import { deliverEnquiry, sameOrigin, type EnquiryRecord } from "@/lib/mail";
import { rateLimit } from "@/lib/rateLimit";
import { contactSchema, sanitizePlain } from "@/lib/validation";

export const runtime = "nodejs";

function clientKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function isFormPost(request: NextRequest): boolean {
  const type = request.headers.get("content-type") || "";
  return (
    type.includes("application/x-www-form-urlencoded") ||
    type.includes("multipart/form-data")
  );
}

async function readBody(request: NextRequest): Promise<unknown> {
  if (isFormPost(request)) {
    const form = await request.formData();
    return Object.fromEntries(form.entries());
  }
  return request.json();
}

function successRedirect(request: NextRequest) {
  return NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
}

function errorRedirect(request: NextRequest) {
  return NextResponse.redirect(new URL("/contact?error=1", request.url), 303);
}

export async function POST(request: NextRequest) {
  const form = isFormPost(request);

  if (!sameOrigin(request)) {
    if (form) return errorRedirect(request);
    return NextResponse.json(
      { message: "The enquiry could not be sent. Please telephone the office." },
      { status: 403 },
    );
  }

  const limited = rateLimit(clientKey(request));
  if (!limited.ok) {
    if (form) return errorRedirect(request);
    return NextResponse.json(
      {
        message:
          "Too many enquiries have been sent from this address. Please telephone the office.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfter) },
      },
    );
  }

  let body: unknown;
  try {
    body = await readBody(request);
  } catch {
    if (form) return errorRedirect(request);
    return NextResponse.json(
      { message: "The form could not be read. Please telephone the office." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    if (form) return errorRedirect(request);
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Please check the form fields." },
      { status: 400 },
    );
  }

  if (parsed.data.company && parsed.data.company.trim() !== "") {
    if (form) return successRedirect(request);
    return NextResponse.json({ message: legalCopy.formSuccess });
  }

  const record: EnquiryRecord = {
    receivedAt: new Date().toISOString(),
    name: sanitizePlain(parsed.data.name),
    phone: sanitizePlain(parsed.data.phone),
    email: sanitizePlain(parsed.data.email),
    matter: parsed.data.matter,
    description: sanitizePlain(parsed.data.description),
    preferredMethod: parsed.data.preferredMethod,
  };

  let emailed = false;
  try {
    emailed = await deliverEnquiry(record);
  } catch {
    console.info("Enquiry email/webhook was not delivered:", record.email, record.matter);
  }

  let persisted = false;
  try {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "inquiries.jsonl"),
      `${JSON.stringify(record)}\n`,
      "utf8",
    );
    persisted = true;
  } catch {
    console.info("Contact enquiry (not persisted to disk):", record.email, record.matter);
  }

  if (!emailed && !persisted) {
    if (form) return errorRedirect(request);
    return NextResponse.json(
      { message: "The enquiry could not be sent. Please telephone the office." },
      { status: 503 },
    );
  }

  if (form) return successRedirect(request);
  return NextResponse.json({ message: legalCopy.formSuccess });
}
