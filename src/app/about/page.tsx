import Link from "next/link";
import { contactInfo, formatAddressLines } from "@/content/contact";
import { courts } from "@/content/courts";
import { lawyerProfile } from "@/content/lawyer";
import { practiceAreas } from "@/content/practiceAreas";
import { galleryPhotos, photoNote, photos } from "@/content/photos";
import { reviews } from "@/content/reviews";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { Figure, PhotoGallery } from "@/components/ui/Figure";
import {
  breadcrumbSchema,
  graph,
  personSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

const title = "About Advocate Manoj Kumar Singh | S&M Law Firm";
const description =
  "Profile of Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, West Bengal: practice areas, associated courts, office at Dobson Road, and how the chambers work.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph([
          personSchema(),
          webPageSchema({ path: "/about", name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ])}
      />
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: "About" },
            ]}
          />
          <p className="small-caps">The Practice</p>
          <h1>About Advocate Manoj Kumar Singh</h1>
          <p className="lede">{lawyerProfile.disambiguation}</p>
        </div>
      </header>

      <article className="section section-ivory">
        <div className="wrap-narrow prose">
          <h2>Profile</h2>
          <dl className="profile-dl">
            <dt>Full name</dt>
            <dd>{lawyerProfile.displayName}</dd>
            <dt>Designation</dt>
            <dd>{lawyerProfile.designation}</dd>
            <dt>Firm</dt>
            <dd>{lawyerProfile.firm.name}</dd>
            <dt>Location</dt>
            <dd>{lawyerProfile.locationLine}, India</dd>
          </dl>

          <p>
            {lawyerProfile.entityLine}. The office is at T.S.S. Tower, 1st Floor,
            21/1 Dobson Road, near Howrah A.C. Market, Babudanga, Howrah, West
            Bengal 711101.
          </p>

          <Figure photo={photos.portrait} className="figure-in-prose" />

          <h2>Professional overview</h2>
          {lawyerProfile.overview.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}

          <h2>Practice areas</h2>
          <p>
            Publicly reported work of the Howrah chambers includes the following.
            Individual instructions are accepted only after the facts have been
            considered.
          </p>
          <ul>
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/practice-areas/${area.slug}`}>{area.title}</Link>
              </li>
            ))}
          </ul>

          <h2>Courts</h2>
          <p>
            {lawyerProfile.displayName} is publicly associated with practice
            before:
          </p>
          <ul>
            {courts.map((court) => (
              <li key={court.slug}>
                <Link href={`/courts/${court.slug}`}>{court.name}</Link>
              </li>
            ))}
          </ul>
          <p className="note">
            Relevant legal matters may vary according to jurisdiction and case.
          </p>

          <h2>Qualifications</h2>
          {lawyerProfile.qualifications.verified.length === 0 ? (
            <div className="empty-panel">
              <p>{lawyerProfile.qualifications.note}</p>
            </div>
          ) : (
            <ul>
              {lawyerProfile.qualifications.verified.map((item) => (
                <li key={item.title}>
                  {item.title}
                  {item.institution ? `, ${item.institution}` : ""}
                  {item.year ? ` (${item.year})` : ""}
                </li>
              ))}
            </ul>
          )}

          <h2>Professional experience</h2>
          {lawyerProfile.experience.verified.length === 0 ? (
            <div className="empty-panel">
              <p>{lawyerProfile.experience.note}</p>
            </div>
          ) : (
            <ol className="timeline">
              {lawyerProfile.experience.verified.map((item) => (
                <li key={item.period}>
                  <p className="small-caps">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          )}

          {reviews.publish && reviews.verified.length > 0 ? (
            <>
              <h2>Client remarks</h2>
              <ul>
                {reviews.verified.map((item) => (
                  <li key={`${item.author}-${item.date ?? ""}`}>
                    <p>{item.text}</p>
                    <p className="note">
                      {item.author}
                      {item.date ? ` · ${item.date}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <h2>Professional approach</h2>
          {lawyerProfile.approach.map((item) => (
            <p key={item.title}>
              <strong>{item.title}.</strong> {item.text}
            </p>
          ))}

          <h2>Photographs</h2>
          <PhotoGallery photos={galleryPhotos} note={photoNote} />

          <h2>Office information</h2>
          <address className="address-block">
            {lawyerProfile.displayName}
            <br />
            {lawyerProfile.firm.name}
            <br />
            {formatAddressLines().map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>

          <h2>Contact</h2>
          <p>
            Phone: <a href={`tel:${contactInfo.phone.tel}`}>{contactInfo.phone.display}</a>
            <br />
            Landline:{" "}
            <a href={`tel:${contactInfo.landline.tel}`}>{contactInfo.landline.display}</a>
            <br />
            Email: <a href={contactInfo.email.href}>{contactInfo.email.display}</a>
          </p>
          <p>
            <Link className="text-link" href="/contact">
              Schedule a Consultation →
            </Link>
          </p>

          <h2>Social profiles</h2>
          <p>
            Verified public profiles for this Howrah practice:
          </p>
          <ul>
            <li>
              <a href={contactInfo.social.facebook} rel="noopener noreferrer" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href={contactInfo.social.linkedin} rel="noopener noreferrer" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </article>
      <ConsultationCta />
    </>
  );
}
