import { lawyerProfile } from "@/content/lawyer";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProfessionalApproach() {
  return (
    <section className="section section-navy">
      <div className="wrap">
        <SectionLabel number="04">Professional Approach</SectionLabel>
        <h2>How the chambers work</h2>
        <p className="lede">
          The practice of {lawyerProfile.displayName} is conducted from S&amp;M
          Law Firm in Howrah. The notes below describe the manner of work. They
          are not a claim of results.
        </p>
        <div className="grid-2" style={{ marginTop: "2rem" }}>
          {lawyerProfile.approach.map((item, index) => (
            <article className="approach-card" key={item.title}>
              <p className="card-num">0{index + 1}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
