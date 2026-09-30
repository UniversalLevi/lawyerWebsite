import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/content/articles";
import { getPracticeArea } from "@/content/practiceAreas";
import { legalCopy } from "@/content/legal";
import { lawyerProfile } from "@/content/lawyer";
import { formatDisplayDate } from "@/lib/format";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import {
  breadcrumbSchema,
  graph,
  organizationId,
  organizationSchema,
  personId,
  personSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: `${article.title} | ${lawyerProfile.displayName}`,
    description: article.description,
    path: `/legal-insights/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedPractice = article.relatedPracticeSlugs
    .map((item) => getPracticeArea(item))
    .filter((item) => Boolean(item));

  const articleSchema = {
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: { "@id": personId() },
    publisher: { "@id": organizationId() },
    mainEntityOfPage: `${siteConfig.origin}/legal-insights/${article.slug}`,
    inLanguage: siteConfig.language,
  };

  return (
    <>
      <JsonLd
        data={graph([
          personSchema(),
          organizationSchema(),
          articleSchema,
          webPageSchema({
            path: `/legal-insights/${article.slug}`,
            name: article.title,
            description: article.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Legal Insights", path: "/legal-insights" },
            {
              name: article.title,
              path: `/legal-insights/${article.slug}`,
            },
          ]),
        ])}
      />
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/legal-insights", label: "Legal Insights" },
              { label: article.title },
            ]}
          />
          <p className="small-caps">Legal insight</p>
          <h1>{article.title}</h1>
        </div>
      </header>
      <article className="section section-ivory">
        <div className="wrap-narrow prose">
          <p className="meta-row">
            <span>Author: {article.author}</span>
            <span>Published: {formatDisplayDate(article.publishedAt)}</span>
            <span>Last updated: {formatDisplayDate(article.updatedAt)}</span>
          </p>
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </section>
          ))}

          {relatedPractice.length ? (
            <section className="related">
              <h2>Related practice pages</h2>
              <ul>
                {relatedPractice.map((item) =>
                  item ? (
                    <li key={item.slug}>
                      <Link href={`/practice-areas/${item.slug}`}>{item.title}</Link>
                    </li>
                  ) : null,
                )}
              </ul>
            </section>
          ) : null}

          <section className="sources">
            <h2>Sources</h2>
            <ul>
              {article.sources.map((source) => (
                <li key={source.url}>
                  {source.url.startsWith("/") ? (
                    <Link href={source.url}>{source.label}</Link>
                  ) : (
                    <a href={source.url} rel="noopener noreferrer" target="_blank">
                      {source.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <div className="disclaimer-box">
            <p>{legalCopy.articleDisclaimer}</p>
          </div>
        </div>
      </article>
      <ConsultationCta />
    </>
  );
}
