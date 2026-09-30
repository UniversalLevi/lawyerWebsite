import Image from "next/image";
import Link from "next/link";
import { lawyerProfile } from "@/content/lawyer";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HomeAbout() {
  return (
    <section className="section section-ivory" id="about">
      <div className="wrap split">
        <div>
          <SectionLabel number="01">The Practice</SectionLabel>
          <h2>About {lawyerProfile.displayName}</h2>
          <hr className="gold-rule" />
          <p>{lawyerProfile.homeAbout}</p>
          <p>
            <Link className="text-link" href="/about">
              View Full Profile →
            </Link>
          </p>
        </div>
        <div className="photo-frame">
          <Image
            src="/images/chamber-still-life.jpg"
            alt="Law books and papers in a professional chambers setting"
            fill
            sizes="(max-width: 980px) 100vw, 50vw"
          />
          <p className="photo-caption">S&amp;M Law Firm · Howrah</p>
        </div>
      </div>
    </section>
  );
}
