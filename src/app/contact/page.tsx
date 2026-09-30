import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Figure } from "@/components/ui/Figure";
import { contactInfo, formatAddressLines } from "@/content/contact";
import { lawyerProfile } from "@/content/lawyer";
import { legalCopy } from "@/content/legal";
import { photos } from "@/content/photos";
import {
  breadcrumbSchema,
  graph,
  organizationSchema,
  personSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

const title = "Contact Advocate Manoj Kumar Singh | S&M Law Firm";
const description = `Contact ${lawyerProfile.displayName} of ${lawyerProfile.firm.name}, Howrah: T.S.S. Tower, 21/1 Dobson Road, near Howrah A.C. Market. Telephone ${contactInfo.phone.display}.`;

export const metadata = buildMetadata({
  title,
  description,
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const params = await searchParams;
  return (
    <>
      <JsonLd
        data={graph([
          personSchema(),
          organizationSchema(),
          webPageSchema({ path: "/contact", name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ])}
      />
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: "Contact" },
            ]}
          />
          <p className="small-caps">07 — Contact</p>
          <h1>Contact the chambers</h1>
          <p className="lede">
            {lawyerProfile.displayName}
            <br />
            {lawyerProfile.firm.name}, Howrah, West Bengal
          </p>
        </div>
      </header>

      <section className="section section-ivory">
        <div className="wrap office-grid">
          <div>
            <h2>Office</h2>
            <address className="address-block">
              {formatAddressLines().map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <p>
              Phone:{" "}
              <a href={`tel:${contactInfo.phone.tel}`}>{contactInfo.phone.display}</a>
              <br />
              Landline:{" "}
              <a href={`tel:${contactInfo.landline.tel}`}>
                {contactInfo.landline.display}
              </a>
              <br />
              Email: <a href={contactInfo.email.href}>{contactInfo.email.display}</a>
            </p>
            <p className="note">{contactInfo.hours.summary}</p>
            <div className="action-row">
              <a className="btn btn-solid" href={contactInfo.maps.directionsUrl}>
                Directions
              </a>
              <a className="btn btn-light" href={contactInfo.maps.searchUrl}>
                Google Maps
              </a>
              <a className="btn btn-light" href={`tel:${contactInfo.phone.tel}`}>
                Call
              </a>
              {contactInfo.whatsApp.enabled ? (
                <a
                  className="btn btn-light"
                  href={contactInfo.whatsApp.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WhatsApp
                </a>
              ) : null}
              <a className="btn btn-light" href={contactInfo.email.href}>
                Email
              </a>
            </div>
            <p style={{ marginTop: "1.4rem" }}>
              <a href={contactInfo.social.facebook} rel="noopener noreferrer" target="_blank">
                Facebook
              </a>
              {" · "}
              <a href={contactInfo.social.linkedin} rel="noopener noreferrer" target="_blank">
                LinkedIn
              </a>
            </p>
            <Figure photo={photos.chambers} />
          </div>
          <div>
            <h2>Send an enquiry</h2>
            <p className="hp-warn">{legalCopy.formWarning}</p>
            {params.error === "1" ? (
              <p className="form-error" role="alert">
                The enquiry could not be sent. Please telephone the office.
              </p>
            ) : null}
            <ContactForm initialSuccess={params.sent === "1"} />
          </div>
        </div>
      </section>
    </>
  );
}
