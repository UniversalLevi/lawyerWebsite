import { contactInfo } from "@/content/contact";

export type EnquiryRecord = {
  receivedAt: string;
  name: string;
  phone: string;
  email: string;
  matter: string;
  description: string;
  preferredMethod: string;
};

function enquiryText(record: EnquiryRecord): string {
  return [
    `Received: ${record.receivedAt}`,
    `Name: ${record.name}`,
    `Phone: ${record.phone}`,
    `Email: ${record.email}`,
    `Matter: ${record.matter}`,
    `Preferred contact: ${record.preferredMethod}`,
    "",
    record.description,
    "",
    "Sent from the S&M Law Firm website contact form.",
  ].join("\n");
}

export async function deliverEnquiry(record: EnquiryRecord): Promise<boolean> {
  const to = process.env.CONTACT_TO_EMAIL || contactInfo.email.display;
  const subject = `Website enquiry — ${record.matter}`;
  const text = enquiryText(record);
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    process.env.SMTP_USER ||
    "noreply@smlegalservice.com";

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, subject, record }),
    });
    if (!response.ok) {
      throw new Error(`Webhook responded ${response.status}`);
    }
    return true;
  }

  if (process.env.RESEND_API_KEY) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: record.email,
        subject,
        text,
      }),
    });
    if (!response.ok) {
      throw new Error(`Resend responded ${response.status}`);
    }
    return true;
  }

  if (process.env.SMTP_HOST) {
    const nodemailer = await import("nodemailer");
    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth:
        process.env.SMTP_USER && process.env.SMTP_PASSWORD
          ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASSWORD,
            }
          : undefined,
    });
    await transporter.sendMail({
      from,
      to,
      replyTo: record.email,
      subject,
      text,
    });
    return true;
  }

  return false;
}

export function sameOrigin(request: Request): boolean {
  const host = request.headers.get("host");
  if (!host) return false;

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      return new URL(origin).host === host;
    } catch {
      return false;
    }
  }

  const referer = request.headers.get("referer");
  if (!referer) return true;
  try {
    return new URL(referer).host === host;
  } catch {
    return false;
  }
}
