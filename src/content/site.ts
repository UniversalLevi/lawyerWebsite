/**
 * Site-wide constants. Change NEXT_PUBLIC_SITE_URL in production.
 * Default origin follows the firm's existing email domain.
 */
export const siteConfig = {
  name: "S&M Law Firm",
  shortName: "S&M Law Firm",
  defaultTitle: "Advocate Manoj Kumar Singh | S&M Law Firm | Howrah",
  locale: "en_IN",
  language: "en-IN",
  get origin() {
    return (
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      "https://www.smlegalservice.com"
    );
  },
} as const;
