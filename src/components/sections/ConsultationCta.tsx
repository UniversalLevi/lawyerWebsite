import Link from "next/link";
import { contactInfo } from "@/content/contact";
import { lawyerProfile } from "@/content/lawyer";
import { photos } from "@/content/photos";
import { Figure } from "@/components/ui/Figure";

export function ConsultationCta() {
  return (
    <section className="section section-navy">
      <div className="wrap cta-band">
        <div>
          <p className="small-caps">Consultation</p>
          <h2>Schedule a consultation</h2>
          <p className="lede">
            {`Enquiries for ${lawyerProfile.displayName} of ${lawyerProfile.firm.name}, Howrah, may be made by telephone or through the office form. A message does not, by itself, create an advocate-client relationship.`}
          </p>
          <div className="hero-actions">
            <Link className="btn btn-gold" href="/contact">
              Schedule a Consultation
            </Link>
            <a className="btn" href={`tel:${contactInfo.phone.tel}`}>
              Call the Office
            </a>
          </div>
        </div>
        <Figure photo={photos.chambers} className="figure-on-navy" />
      </div>
    </section>
  );
}
