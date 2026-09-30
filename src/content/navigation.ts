export type NavItem = {
  href: string;
  label: string;
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/courts", label: "Courts" },
  { href: "/legal-insights", label: "Legal Insights" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const legalNav: NavItem[] = [
  { href: "/disclaimer", label: "Legal Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];
