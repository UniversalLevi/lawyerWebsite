/**
 * Central identity for Advocate Manoj Kumar Singh of S&M Law Firm, Howrah.
 * Do not mix this profile with other advocates of a similar name.
 *
 * Unverified fields are left empty so they can be filled after confirmation.
 * Do not invent Bar Council numbers, universities, years of practice, awards
 * or case results.
 */

export type Qualification = {
  title: string;
  institution?: string;
  year?: string;
};

export type ExperienceEntry = {
  period: string;
  title: string;
  description: string;
};

export const lawyerProfile = {
  honorific: "Advocate",
  givenName: "Manoj Kumar",
  familyName: "Singh",
  fullName: "Manoj Kumar Singh",
  displayName: "Advocate Manoj Kumar Singh",
  /** Use sparingly in running text; the primary identity is displayName. */
  shortDisplayName: "Adv. Manoj Singh",
  jobTitle: "Advocate",
  profession: "Advocate / Lawyer",
  designation: "Advocate",
  headline: "Legal Counsel & Litigation Practice",
  locationLine: "Howrah, West Bengal",
  entityLine:
    "Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, West Bengal",
  disambiguation:
    "This website represents Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, West Bengal. It should not be confused with other advocates of a similar name practising in other cities or states.",
  firm: {
    name: "S&M Law Firm",
    legalName: "S&M Law Firm",
  },
  overview: [
    "Advocate Manoj Kumar Singh practises from S&M Law Firm in Howrah, West Bengal. The chambers provide legal representation and counsel for individuals, families and businesses in civil, criminal, matrimonial, property and commercial matters.",
    "The office is at T.S.S. Tower, 1st Floor, 21/1 Dobson Road, near Howrah A.C. Market, Babudanga, Howrah. The practice is publicly associated with appearances before the Howrah District Court, the Metropolitan Magistrates Court, Calcutta, and the Calcutta High Court. The appropriate forum in any matter depends on jurisdiction, the nature of the dispute and the applicable law.",
    "Work of the chambers includes criminal defence and bail, civil litigation, family and matrimonial disputes, property matters, cyber crime, commercial and business disputes, legal transactions and arbitration. Advice and representation are given according to the facts of each matter; no outcome can be promised.",
  ],
  homeAbout:
    "Advocate Manoj Kumar Singh practises from S&M Law Firm in Howrah, West Bengal. The chambers advise and represent clients in criminal defence, bail, civil litigation, family and matrimonial disputes, property matters, cyber crime, commercial disputes, legal transactions and arbitration. The practice is associated with the Howrah District Court, the Metropolitan Magistrates Court, Calcutta, and the Calcutta High Court.",
  portrait: {
    /**
     * Place an authentic photograph at /public/images/advocate-manoj-kumar-singh.webp
     * and set src to that path. Do not use a generated or stock portrait.
     */
    src: null as string | null,
    alt: "Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, West Bengal",
    width: 720,
    height: 900,
    placeholderCaption:
      "Professional photograph of Advocate Manoj Kumar Singh will be published here once provided by the chambers.",
  },
  qualifications: {
    verified: [] as Qualification[],
    note: "Degrees, Bar Council enrolment particulars and other professional qualifications will be published on this page after verification by the chambers. They are not listed here in the absence of confirmed records.",
  },
  experience: {
    verified: [] as ExperienceEntry[],
    note: "A dated professional timeline will be added once periods of practice and appointments have been confirmed. Unverified years of practice are not shown.",
  },
  approach: [
    {
      title: "Facts before strategy",
      text: "The first task is to understand the documents, the procedural stage and the applicable law. Advice follows from that record, not from a pre-set formula.",
    },
    {
      title: "Clear communication",
      text: "Clients are entitled to a plain account of the options available, the risks involved and the next procedural steps. The chambers do not guarantee results.",
    },
    {
      title: "Representation according to law",
      text: "Where the matter proceeds to court, the advocate appears and files on the instructions of the client, within the limits of professional duty and the law of the forum.",
    },
    {
      title: "Confidentiality",
      text: "Enquiries and papers are handled as professional communications. Visitors should not send privileged or highly sensitive material through an unsecured web form.",
    },
  ],
} as const;
