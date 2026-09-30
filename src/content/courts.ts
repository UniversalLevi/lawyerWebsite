export type CourtRecord = {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  location: string;
  officialUrl?: string;
  description: string[];
  jurisdictionNote: string;
  pageTitle: string;
  metaDescription: string;
};

export const courts: CourtRecord[] = [
  {
    slug: "howrah-district-court",
    number: "01",
    name: "Howrah Court / Howrah District Court",
    shortName: "Howrah District Court",
    location: "Howrah, West Bengal",
    officialUrl: "https://howrah.dcourts.gov.in/",
    description: [
      "The Howrah District Court is the principal district court complex for the district of Howrah, on the west bank of the Hooghly opposite Kolkata. Public listings place the court at 4/1, M.G. Road, Howrah, West Bengal 711101. The official e-Courts website of the district is howrah.dcourts.gov.in.",
      "Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, is publicly associated with practice before this court. The chambers are nearby, at T.S.S. Tower, 21/1 Dobson Road, Babudanga.",
      "District courts hear a range of civil and criminal work assigned to them by statute, including matters before the District and Sessions Judge and the magistrates posted to the district. The precise court-room and the nature of the case determine the procedure.",
    ],
    jurisdictionNote:
      "Relevant legal matters may vary according to jurisdiction and case.",
    pageTitle: "Howrah District Court | Advocate Manoj Kumar Singh",
    metaDescription:
      "Howrah District Court and the practice of Advocate Manoj Kumar Singh of S&M Law Firm, Howrah. Location, official resources and the limits of jurisdiction.",
  },
  {
    slug: "metropolitan-magistrates-court-calcutta",
    number: "02",
    name: "Metropolitan Magistrates Court, Calcutta",
    shortName: "Metropolitan Magistrates Court, Calcutta",
    location: "Bankshall Street, Kolkata, West Bengal",
    officialUrl: "https://citysessions.dcourts.gov.in/about-department/history/",
    description: [
      "The Courts of the Chief Metropolitan Magistrate and Metropolitan Magistrates, Calcutta, function in the Bankshall Court complex at 2 & 3, Bankshall Street, Kolkata. The complex is also associated with the City Sessions Court. Judicial work in the present buildings dates from 1915.",
      "Metropolitan magistrates hear criminal work assigned to them within the metropolitan area of Calcutta, as provided by criminal procedure. Not every criminal matter from Howrah is heard here; the police station, the offence and the statute determine the forum.",
      "Advocate Manoj Kumar Singh of S&M Law Firm is publicly associated with practice before this court. Appearance in any particular case depends on instructions, vakalatnama and the court’s roster.",
    ],
    jurisdictionNote:
      "Relevant legal matters may vary according to jurisdiction and case.",
    pageTitle:
      "Metropolitan Magistrates Court, Calcutta | Advocate Manoj Kumar Singh",
    metaDescription:
      "Metropolitan Magistrates Court, Calcutta (Bankshall Court) and the Howrah practice of Advocate Manoj Kumar Singh, S&M Law Firm. Forum and jurisdiction explained.",
  },
  {
    slug: "calcutta-high-court",
    number: "03",
    name: "Calcutta High Court",
    shortName: "Calcutta High Court",
    location: "Kolkata, West Bengal",
    officialUrl: "https://www.calcuttahighcourt.gov.in/",
    description: [
      "The Calcutta High Court is the oldest High Court in India. It was established on 1 July 1862 under the High Courts Act, 1861. Its official website states that it has jurisdiction over the State of West Bengal and the Union Territory of the Andaman and Nicobar Islands. The principal seat is at Kolkata. There are circuit benches at Port Blair and Jalpaiguri.",
      "As a High Court it hears, among other work, writ petitions, civil and criminal appellate and revisional matters, and original side work within the limits prescribed by law. Howrah lies within West Bengal; matters from Howrah may reach the High Court where the statute or the Constitution so provides. That is not the same as every Howrah dispute being heard in the High Court as a court of first instance.",
      "Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, is publicly associated with practice before the Calcutta High Court. This website does not publish a list of cases. Individual matters will be listed on the Cases page only if the advocate approves publication and confidentiality permits.",
    ],
    jurisdictionNote:
      "Relevant legal matters may vary according to jurisdiction and case.",
    pageTitle: "Calcutta High Court | Advocate Manoj Kumar Singh, Howrah",
    metaDescription:
      "Calcutta High Court and Advocate Manoj Kumar Singh of S&M Law Firm, Howrah. Official court information and the professional association of the practice.",
  },
];

export function getCourt(slug: string): CourtRecord | undefined {
  return courts.find((court) => court.slug === slug);
}

export const calcuttaHighCourtNote = {
  heading: "The Calcutta High Court",
  officialName: "High Court at Calcutta",
  officialUrl: "https://www.calcuttahighcourt.gov.in/",
  aboutUrl: "https://calcuttahighcourt.gov.in/page/About-High-Court",
  paragraphs: [
    "The Calcutta High Court is the constitutional High Court for West Bengal. Howrah is part of that territorial jurisdiction. Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, is publicly associated with practice before this Court, in addition to the Howrah District Court and the Metropolitan Magistrates Court, Calcutta.",
    "The Court’s own description of its history and benches is published at calcuttahighcourt.gov.in. This website does not reproduce cause lists or invent case studies. Listed matters, if any, appear only with the advocate’s approval.",
  ],
};

export const publishedCases: Array<{
  caseNumber: string;
  court: string;
  year: string;
  matter: string;
  role: string;
  status: string;
}> = [];
