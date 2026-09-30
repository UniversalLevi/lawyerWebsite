export type ArticleSource = {
  label: string;
  url: string;
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  relatedPracticeSlugs: string[];
  sources: ArticleSource[];
  sections: ArticleSection[];
};

const AUTHOR = "Advocate Manoj Kumar Singh";
const PUBLISHED = "2026-09-30";

export const articles: Article[] = [
  {
    slug: "understanding-bail-proceedings-in-west-bengal",
    title: "Understanding Bail Proceedings in West Bengal",
    description:
      "An outline of regular and anticipatory bail under the Bharatiya Nagarik Suraksha Sanhita, 2023, for readers in Howrah and West Bengal. General information, not advice on a particular case.",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    author: AUTHOR,
    relatedPracticeSlugs: ["bail", "criminal-law"],
    sources: [
      {
        label: "Bharatiya Nagarik Suraksha Sanhita, 2023 (India Code)",
        url: "https://www.indiacode.nic.in/handle/123456789/20099?locale=en",
      },
      {
        label: "Calcutta High Court",
        url: "https://www.calcuttahighcourt.gov.in/",
      },
    ],
    sections: [
      {
        heading: "Why this note is general",
        paragraphs: [
          "Bail is decided by a court on the facts of each matter. This article explains, in outline, the statutory framework that now applies in India, including in West Bengal. It is not a prediction of what will happen in any Howrah or Calcutta case, and it is not legal advice.",
        ],
      },
      {
        heading: "The current statute",
        paragraphs: [
          "From 1 July 2024 the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) is the principal code of criminal procedure. Chapter XXXV contains the bail provisions. Older prosecutions may still be governed by the Code of Criminal Procedure, 1973, depending on how the case was instituted. Which code applies is a question to take to an advocate with the papers in hand.",
        ],
      },
      {
        heading: "Bailable and non-bailable offences",
        paragraphs: [
          "If the offence is bailable, section 478 of the BNSS provides, in substance, that a person who is prepared to give bail shall be released on bail, with a proviso for indigent persons who cannot furnish surety. The section does not apply where the accusation is of a non-bailable offence.",
          "If the offence is non-bailable, section 480 governs when a court or officer may grant bail, the conditions that may be imposed, and related powers. Certain serious accusations attract additional statutory conditions. The court records reasons when it grants bail under that section.",
        ],
      },
      {
        heading: "Anticipatory bail",
        paragraphs: [
          "Section 482 of the BNSS allows a person who has reason to believe that arrest is likely for a non-bailable offence to apply to the High Court or the Court of Session for a direction that, in the event of arrest, the person shall be released on bail. The court may impose conditions, including those listed in the section.",
          "In West Bengal, such an application may be made to the Court of Session or to the Calcutta High Court, according to the facts and the forum advised. There is no entitlement to the order merely because the application is filed.",
        ],
      },
      {
        heading: "High Court and Sessions Court",
        paragraphs: [
          "Section 483 confers special powers on the High Court and the Court of Session regarding bail, including the power to release a person in custody on bail and to modify conditions imposed by a magistrate. Notice to the Public Prosecutor is required in the situations the section describes.",
        ],
      },
      {
        heading: "Practical points for a first consultation",
        paragraphs: [
          "Bring the FIR or complaint, remand papers if any, identity documents, and a note of previous bail orders. If the person is in custody, the family should know the police station and the court where the person was produced. Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, advises on bail as part of the criminal practice. The office does not guarantee that bail will be granted.",
        ],
      },
    ],
  },
  {
    slug: "what-to-do-after-receiving-a-legal-notice",
    title: "What to Do After Receiving a Legal Notice",
    description:
      "A practical outline of how to read, preserve and respond to a legal notice in India, written for readers in Howrah. General information from S&M Law Firm, not a reply to any particular notice.",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    author: AUTHOR,
    relatedPracticeSlugs: ["civil-litigation", "commercial-law"],
    sources: [
      {
        label: "Code of Civil Procedure, 1908 (India Code)",
        url: "https://www.indiacode.nic.in/handle/123456789/2191?locale=en",
      },
    ],
    sections: [
      {
        heading: "What a legal notice is",
        paragraphs: [
          "A legal notice is a written communication, often sent by an advocate, setting out a claim and asking the recipient to do or stop doing something within a stated time. It is not a court order. Ignoring it can still have consequences: the sender may file a case, and the notice may later be shown to the court as evidence that the claim was made.",
        ],
      },
      {
        heading: "First steps",
        paragraphs: [
          "Keep the envelope, the notice, annexures and proof of delivery. Do not mark the original in a way that obscures the text. Note the date you received it. A photocopy or scan should be made before the paper is carried around.",
          "Read who has sent it, on whose instructions, what is demanded, and by when. Check whether names, amounts and dates match your own records. Errors in a notice do not always make it worthless; they are points to discuss with an advocate.",
        ],
      },
      {
        heading: "Do not send an angry reply on your own",
        paragraphs: [
          "A hasty admission, a threat, or a long narrative sent by email or WhatsApp can become an exhibit. If a reply is appropriate, it is usually drafted after the facts and documents have been examined. Silence is sometimes a choice; it should be a considered choice, not an accident.",
        ],
      },
      {
        heading: "Notices that precede particular proceedings",
        paragraphs: [
          "Some statutes require a notice before a suit or a complaint can be filed. Others do not. Cheque matters, tenancy, consumer disputes and government litigation each have their own notice rules. The correct response depends on the statute the sender is relying on — which is why a general article cannot tell you what to write.",
        ],
      },
      {
        heading: "Howrah chambers",
        paragraphs: [
          "Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, reviews legal notices as part of civil and commercial work. Bring the notice and the related contracts or correspondence to a consultation. Sending the full text of a confidential notice through the website form is not advisable.",
        ],
      },
    ],
  },
  {
    slug: "how-property-disputes-are-handled-in-civil-courts",
    title: "How Property Disputes Are Handled in Civil Courts",
    description:
      "How civil courts in India typically receive suits about title, possession and injunctions, with reference to procedure relevant to Howrah. General information, not advice on a plot or deed.",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    author: AUTHOR,
    relatedPracticeSlugs: ["property-law", "civil-litigation"],
    sources: [
      {
        label: "Code of Civil Procedure, 1908 (India Code)",
        url: "https://www.indiacode.nic.in/handle/123456789/2191?locale=en",
      },
      {
        label: "Specific Relief Act, 1963 (India Code)",
        url: "https://www.indiacode.nic.in/handle/123456789/1583?locale=en",
      },
    ],
    sections: [
      {
        heading: "Civil courts, not the police, for most title disputes",
        paragraphs: [
          "A disagreement about who owns a plot, who is in possession, or whether a deed is valid is ordinarily a civil dispute. The police may record a complaint if a cognizable offence is also alleged, but a finding on title is given by a civil court on evidence.",
        ],
      },
      {
        heading: "Jurisdiction",
        paragraphs: [
          "Suits for immovable property are generally filed where the property is situated, subject to the Code of Civil Procedure, 1908. Pecuniary limits decide whether the suit is filed before a particular civil judge. Howrah property disputes are often heard in the Howrah District Court complex; some matters go further, including to the Calcutta High Court, where the law so provides.",
        ],
      },
      {
        heading: "What the court is asked to do",
        paragraphs: [
          "A plaintiff may seek a declaration of title, recovery of possession, a permanent injunction, partition, or other relief under the Specific Relief Act, 1963, and related law. Interim injunctions may be sought while the suit is pending. The court applies tests of a prima facie case, balance of convenience and irreparable injury. Those tests are not a preview of the final decree.",
        ],
      },
      {
        heading: "Evidence",
        paragraphs: [
          "Registered sale deeds, gift deeds, wills (where proved), record-of-rights, municipal tax receipts, and evidence of possession are typical. None of them is automatically conclusive. Forgery, benami questions and competing registered documents are for the court.",
        ],
      },
      {
        heading: "This practice",
        paragraphs: [
          "Property disputes are part of the civil work of Advocate Manoj Kumar Singh, S&M Law Firm, Howrah. A consultation is more useful if deeds and a simple sketch of the land are brought along. This article cannot tell you who owns a particular property.",
        ],
      },
    ],
  },
  {
    slug: "understanding-maintenance-proceedings",
    title: "Understanding Maintenance Proceedings",
    description:
      "An outline of maintenance claims in matrimonial proceedings and under section 144 of the BNSS, for families in Howrah and West Bengal. General information only.",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    author: AUTHOR,
    relatedPracticeSlugs: ["divorce", "family-matrimonial-law"],
    sources: [
      {
        label: "Bharatiya Nagarik Suraksha Sanhita, 2023 (India Code)",
        url: "https://www.indiacode.nic.in/handle/123456789/20099?locale=en",
      },
      {
        label: "Hindu Marriage Act, 1955 (India Code)",
        url: "https://www.indiacode.nic.in/handle/123456789/1560?locale=en",
      },
    ],
    sections: [
      {
        heading: "Two common routes",
        paragraphs: [
          "Maintenance may be claimed in a pending matrimonial case — for example under the Hindu Marriage Act, 1955, where that Act applies — and it may also be claimed in a magistrate’s court under provisions that require a person with sufficient means to maintain certain dependants. Those routes have different procedures and different consequences. Which is suitable is a question of law and of the client’s circumstances.",
        ],
      },
      {
        heading: "Magistrate’s court: section 144 BNSS",
        paragraphs: [
          "Chapter X of the BNSS deals with orders for maintenance of wives, children and parents. Section 144 corresponds, in broad function, to the former section 125 of the Code of Criminal Procedure, 1973. The magistrate may order a monthly allowance if the conditions in the section are met. The proceeding is summary compared with a full civil trial, but it is still a court case: notice, evidence and a reasoned order.",
        ],
      },
      {
        heading: "Amount",
        paragraphs: [
          "The statute does not fix a percentage of income for every family. The court looks at the needs of the claimant and the means of the person from whom maintenance is sought, among other factors the law and the evidence allow. Figures published on websites as “standard maintenance” are not the law.",
        ],
      },
      {
        heading: "Tone of the work",
        paragraphs: [
          "Maintenance proceedings are often connected with marital breakdown. They should be prepared with accurate income documents and without using the children as instruments of the dispute. Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, handles maintenance as part of family and matrimonial work. No particular monthly sum is promised.",
        ],
      },
    ],
  },
  {
    slug: "what-to-do-after-a-cyber-crime-or-online-fraud",
    title: "What to Do After a Cyber Crime or Online Fraud",
    description:
      "First steps after online fraud or a digital offence: preserving records, reporting, and when to take legal advice in Howrah. General information from S&M Law Firm.",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    author: AUTHOR,
    relatedPracticeSlugs: ["cyber-crime", "criminal-law"],
    sources: [
      {
        label: "Information Technology Act, 2000 (India Code)",
        url: "https://www.indiacode.nic.in/handle/123456789/1999?locale=en",
      },
      {
        label: "National Cyber Crime Reporting Portal",
        url: "https://www.cybercrime.gov.in/",
      },
    ],
    sections: [
      {
        heading: "Act quickly on the money trail",
        paragraphs: [
          "If money has left a bank or wallet, contact the bank or payment provider immediately through their published fraud numbers and follow their written instructions. Delay reduces the chance of freezing a transaction. This is a practical step, not a legal conclusion that an offence is made out.",
        ],
      },
      {
        heading: "Preserve the electronic record",
        paragraphs: [
          "Keep original emails, SMS, WhatsApp threads, URLs, screenshots and device notifications. Do not edit screenshots. Note dates and times. If a device may itself be evidence, avoid factory resets. Where a forensic copy is later required, that work is done by qualified examiners — S&M Law Firm does not claim an in-house laboratory.",
        ],
      },
      {
        heading: "Report",
        paragraphs: [
          "The National Cyber Crime Reporting Portal (cybercrime.gov.in) is an official Government of India facility for reporting cyber crime. A complaint may also be made to the local police, including a cyber police station where one exists. Keep the acknowledgement number.",
          "The Information Technology Act, 2000, and provisions of the Bharatiya Nyaya Sanhita, 2023, may apply depending on the facts — for example unauthorised access, identity theft, or cheating by personation using a computer resource. The investigating agency decides how a complaint is registered.",
        ],
      },
      {
        heading: "Legal assistance",
        paragraphs: [
          "An advocate can help with the complaint, further representation, and related civil steps such as notices to intermediaries where that is appropriate. Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, advises on cyber crime as part of the reported practice. Recovery of money is never guaranteed.",
        ],
      },
    ],
  },
  {
    slug: "understanding-the-divorce-process-in-india",
    title: "Understanding the Divorce Process in India",
    description:
      "A respectful outline of how divorce petitions proceed under Indian personal law, written for families considering advice in Howrah. Not a forecast of any marriage.",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    author: AUTHOR,
    relatedPracticeSlugs: ["divorce", "family-matrimonial-law"],
    sources: [
      {
        label: "Hindu Marriage Act, 1955 (India Code)",
        url: "https://www.indiacode.nic.in/handle/123456789/1560?locale=en",
      },
    ],
    sections: [
      {
        heading: "Personal law comes first",
        paragraphs: [
          "India does not have a single divorce statute for every marriage. Hindus, Buddhists, Jains and Sikhs are, in the main, governed by the Hindu Marriage Act, 1955. Other communities are governed by their own personal laws or by the Special Marriage Act, 1954, where that Act applies. The first question in any consultation is which statute governs the marriage.",
        ],
      },
      {
        heading: "Mutual consent and contested petitions",
        paragraphs: [
          "Under the Hindu Marriage Act, section 13B provides for divorce by mutual consent, subject to the conditions in the section, including a waiting period that the court may deal with as the statute and the case law allow. Section 13 provides grounds for a contested petition. Other Acts have their own lists of grounds. Filing a petition is not the same as obtaining a decree.",
        ],
      },
      {
        heading: "What the court process involves",
        paragraphs: [
          "A petition is filed in the family court or other court that has jurisdiction — often linked to where the marriage was solemnised, where the couple last resided together, or where the respondent resides, as the statute provides. The other party is served. The court may refer the parties to counselling. Evidence is led if the matter is contested. Children, maintenance and property may be connected issues, sometimes in the same proceeding, sometimes separately.",
        ],
      },
      {
        heading: "Time and tone",
        paragraphs: [
          "There is no honest fixed duration. Uncontested matters can still take months; contested matters may take longer. The process is personal. Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, handles divorce as part of family work. The chambers do not advertise a “quick divorce” service.",
        ],
      },
    ],
  },
  {
    slug: "difference-between-civil-and-criminal-proceedings",
    title: "Difference Between Civil and Criminal Proceedings",
    description:
      "How civil suits and criminal prosecutions differ in purpose, parties, proof and outcome — a plain guide from S&M Law Firm, Howrah.",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    author: AUTHOR,
    relatedPracticeSlugs: ["civil-litigation", "criminal-law"],
    sources: [
      {
        label: "Code of Civil Procedure, 1908 (India Code)",
        url: "https://www.indiacode.nic.in/handle/123456789/2191?locale=en",
      },
      {
        label: "Bharatiya Nagarik Suraksha Sanhita, 2023 (India Code)",
        url: "https://www.indiacode.nic.in/handle/123456789/20099?locale=en",
      },
    ],
    sections: [
      {
        heading: "Different purposes",
        paragraphs: [
          "A civil proceeding is brought to enforce a private right: money, property, an injunction, status. The usual parties are plaintiff and defendant (or petitioner and respondent). The standard of proof is, in general, the preponderance of probabilities.",
          "A criminal proceeding is concerned with an offence against the law. The State prosecutes. The accused is presumed innocent until proved guilty. The standard of proof is beyond reasonable doubt. Punishment may include imprisonment, fine or both, as the statute provides.",
        ],
      },
      {
        heading: "Different procedure",
        paragraphs: [
          "Civil procedure is found primarily in the Code of Civil Procedure, 1908. Criminal procedure is found primarily in the BNSS from 1 July 2024, and in the CrPC for matters still governed by that Code. The documents, the way evidence is recorded, and the rights of the parties are not interchangeable.",
        ],
      },
      {
        heading: "The same facts can produce both",
        paragraphs: [
          "A dishonest transaction may lead to a criminal complaint and a civil suit for recovery. A family dispute may involve a maintenance application and a divorce petition. Each case has its own file, its own court and its own result. Winning one does not automatically win the other.",
        ],
      },
      {
        heading: "Choosing the forum",
        paragraphs: [
          "Which path to take is a decision made after the facts are understood. Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, practises in both civil and criminal courts associated with the chambers. This article cannot tell you whether a particular incident is a civil wrong, a crime, both, or neither.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-for-a-legal-consultation",
    title: "How to Prepare for a Legal Consultation",
    description:
      "What to bring and how to describe a dispute when meeting Advocate Manoj Kumar Singh at S&M Law Firm, Howrah. Practical guidance, not a questionnaire for a particular case.",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    author: AUTHOR,
    relatedPracticeSlugs: ["civil-litigation", "criminal-law", "family-matrimonial-law"],
    sources: [
      {
        label: "S&M Law Firm, Contact",
        url: "/contact",
      },
    ],
    sections: [
      {
        heading: "A consultation is a working meeting",
        paragraphs: [
          "The purpose is to give the advocate a usable account of the facts and the papers, and to receive an outline of possible next steps. It is not a judgment, and it does not bind the advocate to appear unless representation is later agreed.",
        ],
      },
      {
        heading: "Write a short chronology",
        paragraphs: [
          "One or two pages with dates — when the agreement was signed, when the quarrel began, when the FIR was registered, when the notice arrived — saves time. Names of the other parties, police stations and previous case numbers should be accurate.",
        ],
      },
      {
        heading: "Bring the papers you already have",
        paragraphs: [
          "Identity documents, contracts, title deeds, notices, FIRs, charge-sheets, court orders, medical records (where relevant), and bank statements that actually relate to the dispute. You need not organise a perfect brief. You should not withhold an order that went against you; the court file will contain it in any event.",
        ],
      },
      {
        heading: "What not to do",
        paragraphs: [
          "Do not coach witnesses before you have taken advice. Do not post the dispute on social media. Do not send privileged strategy through the website form. Telephone +91 90622 21111 or write to manoj@smlegalservice.com to fix a time at T.S.S. Tower, 21/1 Dobson Road, Howrah.",
        ],
      },
    ],
  },
  {
    slug: "understanding-property-and-land-disputes",
    title: "Understanding Property and Land Disputes",
    description:
      "Title, possession, tenancy and partition — how these land disputes differ, for property-holders in Howrah. General information from Advocate Manoj Kumar Singh, S&M Law Firm.",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    author: AUTHOR,
    relatedPracticeSlugs: ["property-law", "civil-litigation"],
    sources: [
      {
        label: "Transfer of Property Act, 1882 (India Code)",
        url: "https://www.indiacode.nic.in/handle/123456789/2378?locale=en",
      },
      {
        label: "Registration Act, 1908 (India Code)",
        url: "https://www.indiacode.nic.in/handle/123456789/2275?locale=en",
      },
    ],
    sections: [
      {
        heading: "Title and possession are not the same",
        paragraphs: [
          "A person may hold a registered deed and still be out of possession. Another may be in possession without a deed that the court ultimately upholds. Civil courts try both questions, and they try them on evidence. A conversation at the site, however heated, does not settle title.",
        ],
      },
      {
        heading: "Common patterns",
        paragraphs: [
          "Sale disputes, family partition, alleged trespass, boundary conflicts, and arguments over whether a writing required registration under the Registration Act, 1908, was in fact registered, appear often. The Transfer of Property Act, 1882, governs many transfers between living persons. Local revenue and municipal records matter, but they are not always treated as conclusive of ownership.",
        ],
      },
      {
        heading: "Tenancy",
        paragraphs: [
          "A tenant’s rights and a landlord’s right to recover possession depend on the statute that governs the premises and on the terms of the tenancy. In West Bengal, the West Bengal Premises Tenancy Act, 1997, is often relevant to premises tenancies. Eviction is a legal process; it is not a matter of changing the locks without an order where the law requires a court.",
        ],
      },
      {
        heading: "Howrah practice",
        paragraphs: [
          "Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, advises on property and land disputes as part of the civil practice. Bring deeds, tax receipts and any previous case papers. This article is not an opinion on a named plot in Babudanga, Howrah or elsewhere.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByPractice(slug: string): Article[] {
  return articles.filter((article) =>
    article.relatedPracticeSlugs.includes(slug),
  );
}
