import Link from "next/link";
import { notFound } from "next/navigation";
import { courts, getCourt } from "@/content/courts";
import { lawyerProfile } from "@/content/lawyer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return courts.map((court) => ({ slug: court.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const court = getCourt(slug);
  if (!court) return {};
  return buildMetadata({
    title: court.pageTitle,
    description: court.metaDescription,
    path: `/courts/${court.slug}`,
  });
}

export default async function CourtPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const court = getCourt(slug);
  if (!court) notFound();

  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: `/courts/${court.slug}`,
            name: court.pageTitle,
            description: court.metaDescription,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Courts", path: "/courts" },
            { name: court.shortName, path: `/courts/${court.slug}` },
          ]),
        ])}
      />
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/courts", label: "Courts" },
              { label: court.shortName },
            ]}
          />
          <p className="small-caps">{court.number} — Court</p>
          <h1>{court.name}</h1>
          <p className="lede">
            {court.location}. Associated with the practice of{" "}
            {lawyerProfile.displayName}, {lawyerProfile.firm.name}, Howrah.
          </p>
        </div>
      </header>
      <article className="section section-ivory">
        <div className="wrap-narrow prose">
          {court.description.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <p className="note">{court.jurisdictionNote}</p>
          {court.officialUrl ? (
            <p>
              Official resource:{" "}
              <a href={court.officialUrl} rel="noopener noreferrer" target="_blank">
                {court.officialUrl.replace("https://", "")}
              </a>
            </p>
          ) : null}
          <p>
            <Link className="text-link" href="/courts">
              All associated courts →
            </Link>
          </p>
        </div>
      </article>
      <ConsultationCta />
    </>
  );
}
