import Image from "next/image";
import { contactInfo, formatAddressLines } from "@/content/contact";
import { lawyerProfile } from "@/content/lawyer";
import { photos } from "@/content/photos";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function OfficeLocation() {
  return (
    <section className="section section-ivory" id="office">
      <div className="wrap office-grid">
        <div>
          <SectionLabel number="07">Contact</SectionLabel>
          <h2>Office in Howrah</h2>
          <p>
            {lawyerProfile.displayName}
            <br />
            {lawyerProfile.firm.name}
          </p>
          <address className="address-block">
            {formatAddressLines().map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
          <p>
            Phone: <a href={`tel:${contactInfo.phone.tel}`}>{contactInfo.phone.display}</a>
            <br />
            Landline:{" "}
            <a href={`tel:${contactInfo.landline.tel}`}>{contactInfo.landline.display}</a>
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
        </div>
        <div className="photo-frame photo-square">
          <Image
            src={photos.chambers.src}
            alt={photos.chambers.alt}
            fill
            sizes="(max-width: 980px) 100vw, 46vw"
          />
          <p className="photo-caption">{photos.chambers.caption}</p>
        </div>
      </div>
    </section>
  );
}
