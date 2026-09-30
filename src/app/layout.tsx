import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { lawyerProfile } from "@/content/lawyer";
import { siteConfig } from "@/content/site";
import { defaultDescription } from "@/lib/metadata";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  title: {
    default: siteConfig.defaultTitle,
    template: "%s",
  },
  description: defaultDescription,
  applicationName: lawyerProfile.firm.name,
  authors: [{ name: lawyerProfile.displayName }],
  creator: lawyerProfile.displayName,
  publisher: lawyerProfile.firm.name,
  keywords: [
    "Advocate Manoj Kumar Singh",
    "S&M Law Firm",
    "Howrah",
    "West Bengal",
    "Dobson Road",
    "Howrah A.C. Market",
    "Howrah Court",
    "Calcutta High Court",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: `${lawyerProfile.firm.name} — ${lawyerProfile.displayName}`,
    title: siteConfig.defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: defaultDescription,
  },
  robots: { index: true, follow: true },
  category: "legal",
};

export const viewport: Viewport = {
  themeColor: "#0b1626",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
