import Image from "next/image";
import Link from "next/link";
import { lawyerProfile } from "@/content/lawyer";

export function Hero() {
  const hasPhoto = Boolean(lawyerProfile.portrait.src);

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="small-caps hero-kicker">Advocate | S&amp;M Law Firm</p>
        <h1>{lawyerProfile.displayName}</h1>
        <p className="hero-meta">
          {lawyerProfile.headline}
          <br />
          {lawyerProfile.locationLine}
        </p>
        <p className="lede">
          Professional legal representation and counsel for individuals, families
          and businesses across a range of civil, criminal, matrimonial, property
          and commercial matters.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-gold" href="/contact">
            Schedule a Consultation
          </Link>
          <Link className="btn" href="/practice-areas">
            Explore Practice Areas
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <Image
          src="/images/portrait-architecture.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 980px) 100vw, 42vw"
        />
        <div className={`portrait-panel${hasPhoto ? " has-photo" : ""}`}>
          {hasPhoto && lawyerProfile.portrait.src ? (
            <Image
              src={lawyerProfile.portrait.src}
              alt={lawyerProfile.portrait.alt}
              fill
              sizes="(max-width: 980px) 90vw, 360px"
            />
          ) : (
            <>
              <div className="portrait-mark">
                <strong>MKS</strong>
                <p className="small-caps" style={{ color: "inherit", marginTop: "0.8rem" }}>
                  {lawyerProfile.displayName}
                </p>
              </div>
              <p className="placeholder-caption">{lawyerProfile.portrait.placeholderCaption}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
