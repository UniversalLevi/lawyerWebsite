import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPracticeArea,
  getRelatedPractice,
  practiceAreas,
} from "@/content/practiceAreas";
import { getArticle, getArticlesByPractice, type Article } from "@/content/articles";
import { lawyerProfile } from "@/content/lawyer";
import { legalCopy } from "@/content/legal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { breadcrumbSchema, graph, personSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return buildMetadata({
    title: area.pageTitle,
    description: area.metaDescription,
    path: `/practice-areas/${area.slug}`,
  });
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const related = getRelatedPractice(area);
  const relatedArticles = [
    ...area.relatedArticleSlugs
      .map((item) => getArticle(item))
      .filter((item): item is Article => Boolean(item)),
    ...getArticlesByPractice(area.slug).filter(
      (item) => !area.relatedArticleSlugs.includes(item.slug),
    ),
  ];

  return (
    <>
      <JsonLd
        data={graph([
          personSchema(),
          webPageSchema({
            path: `/practice-areas/${area.slug}`,
            name: area.pageTitle,
            description: area.metaDescription,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Practice Areas", path: "/practice-areas" },
            { name: area.title, path: `/practice-areas/${area.slug}` },
          ]),
        ])}
      />
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/practice-areas", label: "Practice Areas" },
              { label: area.title },
            ]}
          />
          <p className="small-caps">
            {area.number} — {area.heroKicker}
          </p>
          <h1>{area.title}</h1>
          <p className="lede">
            {lawyerProfile.displayName} · {lawyerProfile.firm.name} · Howrah, West
            Bengal
          </p>
        </div>
      </header>

      <article className="section section-ivory">
        <div className="wrap-narrow prose">
          {area.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 36)}>{paragraph}</p>
          ))}
          {area.quote ? <blockquote className="quote">{area.quote}</blockquote> : null}
          {area.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 36)}>{paragraph}</p>
              ))}
            </section>
          ))}

          {related.length ? (
            <section className="related">
              <h2>Related practice areas</h2>
              <ul>
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/practice-areas/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {relatedArticles.length ? (
            <section className="related">
              <h2>Related legal insights</h2>
              <ul>
                {relatedArticles.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/legal-insights/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="disclaimer-box">
            <p>{legalCopy.shortDisclaimer}</p>
          </div>
        </div>
      </article>
      <ConsultationCta />
    </>
  );
}
