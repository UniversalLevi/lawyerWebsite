import { faqs } from "@/content/faqs";
import { lawyerProfile } from "@/content/lawyer";
import { photos } from "@/content/photos";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { Figure } from "@/components/ui/Figure";
import { breadcrumbSchema, graph, personSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

const title = "FAQs | Advocate Manoj Kumar Singh, S&M Law Firm, Howrah";
const description = `Answers to common questions about ${lawyerProfile.displayName} of ${lawyerProfile.firm.name}, Howrah: office location, courts, practice areas and how to schedule a consultation.`;

export const metadata = buildMetadata({
  title,
  description,
  path: "/faqs",
});

export default function FaqsPage() {
  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.join(" "),
      },
    })),
  };

  return (
    <>
      <JsonLd
        data={graph([
          personSchema(),
          faqSchema,
          webPageSchema({ path: "/faqs", name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" },
          ]),
        ])}
      />
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: "FAQs" },
            ]}
          />
          <p className="small-caps">Questions</p>
          <h1>Frequently asked questions</h1>
          <p className="lede">
            These answers describe the Howrah practice of{" "}
            {lawyerProfile.displayName}. They are not legal advice on a
            particular dispute.
          </p>
        </div>
      </header>
      <section className="section section-ivory">
        <div className="wrap-narrow faq-list">
          <Figure photo={photos.chambers} className="figure-in-prose" />
          {faqs.map((item) => (
            <details className="faq-item" key={item.question} open>
              <summary>{item.question}</summary>
              {item.answer.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </details>
          ))}
        </div>
      </section>
      <ConsultationCta />
    </>
  );
}
