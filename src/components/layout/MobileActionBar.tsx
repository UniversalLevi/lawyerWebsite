import { contactInfo } from "@/content/contact";

export function MobileActionBar() {
  return (
    <nav className="mobile-bar" aria-label="Quick contact">
      <a href={`tel:${contactInfo.phone.tel}`}>Call</a>
      {contactInfo.whatsApp.enabled ? (
        <a href={contactInfo.whatsApp.href} rel="noopener noreferrer" target="_blank">
          WhatsApp
        </a>
      ) : null}
      <a href="/contact">Consult</a>
    </nav>
  );
}
