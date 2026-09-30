import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export function LegalDocument({
  kicker,
  title,
  intro,
  sections,
}: {
  kicker: string;
  title: string;
  intro?: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
}) {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: title },
            ]}
          />
          <p className="small-caps">{kicker}</p>
          <h1>{title}</h1>
          {intro ? <p className="lede">{intro}</p> : null}
        </div>
      </header>
      <article className="section section-ivory">
        <div className="wrap-narrow prose">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
