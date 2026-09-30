import Link from "next/link";
import { contactInfo, formatAddressLines } from "@/content/contact";
import { lawyerProfile } from "@/content/lawyer";
import { legalCopy } from "@/content/legal";
import { legalNav, primaryNav } from "@/content/navigation";
import { practiceAreas } from "@/content/practiceAreas";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="small-caps">{lawyerProfile.firm.name}</p>
          <h2 className="serif" style={{ fontSize: "1.8rem", margin: "0.4rem 0 0.7rem" }}>
            {lawyerProfile.displayName}
          </h2>
          <p>{lawyerProfile.locationLine}</p>
          <address className="address-block">
            {formatAddressLines().map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
          <p>
            <a href={`tel:${contactInfo.phone.tel}`}>{contactInfo.phone.display}</a>
            <br />
            <a href={contactInfo.email.href}>{contactInfo.email.display}</a>
          </p>
        </div>

        <div>
          <h3>Navigation</h3>
          <ul className="footer-links">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Practice Areas</h3>
          <ul className="footer-links">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/practice-areas/${area.slug}`}>{area.cardTitle}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Chambers</h3>
          <ul className="footer-links">
            <li>
              <Link href="/courts">Courts</Link>
            </li>
            <li>
              <Link href="/legal-insights">Legal Insights</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
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
      </div>

      <div className="wrap footer-bottom">
        <p className="footer-disclaimer">{legalCopy.shortDisclaimer}</p>
        <p>
          {legalNav.map((item, index) => (
            <span key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              {index < legalNav.length - 1 ? " · " : ""}
            </span>
          ))}
          <br />
          {`© ${year} ${lawyerProfile.firm.name}. ${lawyerProfile.displayName}, Howrah.`}
        </p>
      </div>
    </footer>
  );
}
