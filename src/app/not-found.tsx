import Link from "next/link";
import type { Metadata } from "next";
import { lawyerProfile } from "@/content/lawyer";

export const metadata: Metadata = {
  title: "Page not found | S&M Law Firm, Howrah",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section section-ivory">
      <div className="wrap-narrow">
        <p className="small-caps">404</p>
        <h1>Page not found</h1>
        <p>
          The address you requested is not a page on the website of{" "}
          {lawyerProfile.displayName}, {lawyerProfile.firm.name}, Howrah.
        </p>
        <p>
          <Link className="text-link" href="/">
            Return to the homepage →
          </Link>
        </p>
        <p>
          <Link className="text-link" href="/contact">
            Contact the chambers →
          </Link>
        </p>
      </div>
    </section>
  );
}
