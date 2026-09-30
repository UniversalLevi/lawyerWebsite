export type PracticeSection = {
  heading: string;
  paragraphs: string[];
};

export type PracticeArea = {
  slug: string;
  number: string;
  title: string;
  cardTitle: string;
  shortDescription: string;
  heroKicker: string;
  pageTitle: string;
  metaDescription: string;
  intro: string[];
  quote?: string;
  sections: PracticeSection[];
  relatedSlugs: string[];
  relatedArticleSlugs: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "criminal-law",
    number: "01",
    title: "Criminal Law",
    cardTitle: "Criminal Law",
    shortDescription:
      "Defence and representation in criminal proceedings, from investigation to trial, according to the facts and the applicable procedure.",
    heroKicker: "Practice area",
    pageTitle: "Criminal Lawyer in Howrah | Advocate Manoj Kumar Singh",
    metaDescription:
      "Criminal defence and representation in Howrah with Advocate Manoj Kumar Singh of S&M Law Firm. Consultation on criminal proceedings, bail and related procedure.",
    intro: [
      "Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, advises and represents clients in criminal matters. Criminal work may involve police investigation, appearance before a magistrate, sessions trial, or connected applications, depending on the stage of the case.",
      "When you need legal assistance in a criminal matter, the appropriate legal strategy depends on the facts, procedural stage and applicable law.",
    ],
    quote:
      "When you need legal assistance in a criminal matter, the appropriate legal strategy depends on the facts, procedural stage and applicable law.",
    sections: [
      {
        heading: "Criminal defence and representation",
        paragraphs: [
          "Criminal defence includes taking instructions, examining the complaint or FIR, considering the documents available, and appearing before the court that has jurisdiction. The advocate’s role is to represent the client’s case within the law, not to promise a particular result.",
          "India’s criminal procedure is now governed principally by the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS), which came into force on 1 July 2024, together with the Bharatiya Nyaya Sanhita, 2023. Older matters may still involve the Code of Criminal Procedure, 1973, and the Indian Penal Code, 1860, where those statutes continue to apply. The correct statute depends on the date and nature of the case.",
        ],
      },
      {
        heading: "Criminal proceedings",
        paragraphs: [
          "A criminal matter may pass through several stages: information to the police or a complaint to a magistrate, investigation, charge, evidence, arguments and judgment. Each stage has its own filings, appearances and time limits.",
          "The Howrah District Court, the Metropolitan Magistrates Court, Calcutta, and the Calcutta High Court hear different classes of criminal work. Which court is appropriate is a question of jurisdiction and the offence alleged, not a matter of preference.",
        ],
      },
      {
        heading: "Bail-related matters",
        paragraphs: [
          "Applications for regular or anticipatory bail are often urgent. They require an accurate account of the accusation, the client’s circumstances and the statutory tests that the court applies. Bail is dealt with more fully on the dedicated bail page of this website.",
        ],
      },
      {
        heading: "Related criminal procedure",
        paragraphs: [
          "A criminal brief is framed by the accusation and the statute that creates the offence. That may include the general criminal code or special criminal laws, as the facts require. The chambers do not advertise a guaranteed specialisation in every named offence, and they do not promise a particular result.",
        ],
      },
      {
        heading: "Consultation and procedural guidance",
        paragraphs: [
          "A first consultation is an opportunity to set out the facts, share copies of papers already received, and understand the next procedural step. It does not by itself create an advocate-client relationship for ongoing representation.",
          "Clients should not send confidential case strategy through an unsecured form. Original documents are better discussed at the office at T.S.S. Tower, 21/1 Dobson Road, Howrah.",
        ],
      },
    ],
    relatedSlugs: ["bail", "cyber-crime", "civil-litigation"],
    relatedArticleSlugs: [
      "understanding-bail-proceedings-in-west-bengal",
      "difference-between-civil-and-criminal-proceedings",
      "what-to-do-after-a-cyber-crime-or-online-fraud",
    ],
  },
  {
    slug: "bail",
    number: "02",
    title: "Bail Matters",
    cardTitle: "Bail Matters",
    shortDescription:
      "Advice and representation on regular and anticipatory bail, bonds and related court applications.",
    heroKicker: "Practice area",
    pageTitle: "Bail Lawyer in Howrah | Advocate Manoj Kumar Singh",
    metaDescription:
      "Bail advice and court representation in Howrah with Advocate Manoj Kumar Singh of S&M Law Firm. Regular and anticipatory bail explained without guaranteed outcomes.",
    intro: [
      "Bail is the conditional release of a person from custody while a criminal case continues. Whether bail is available, and on what terms, depends on the offence, the statute, the stage of the case and the court’s assessment of the record.",
      "Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, advises on bail applications and appears in such matters before the courts associated with the practice, where the forum has jurisdiction.",
    ],
    sections: [
      {
        heading: "What bail is",
        paragraphs: [
          "In Indian criminal procedure, bail is not a finding of innocence. It is a mechanism that allows a person to remain at liberty, subject to conditions, while investigation or trial proceeds. The court may require a bond, sureties, restrictions on travel, or other conditions authorised by law.",
          "The principal provisions now appear in Chapter XXXV of the Bharatiya Nagarik Suraksha Sanhita, 2023. Section 478 deals with bail in bailable offences. Section 480 deals with bail in non-bailable offences. Section 482 provides for a direction for bail in anticipation of arrest. Section 483 confers special powers on the High Court and the Court of Session.",
        ],
      },
      {
        heading: "Types of bail, in outline",
        paragraphs: [
          "In ordinary usage, regular bail is sought after arrest or while the person is in custody. Anticipatory bail (BNSS section 482, formerly section 438 of the CrPC) may be sought from the High Court or the Court of Session when a person has reason to believe that arrest for a non-bailable offence is likely.",
          "Whether an offence is bailable or non-bailable is a question of the statute creating the offence. The court also considers factors such as the nature of the accusation, the risk of absconding, the possibility of tampering with evidence, and the person’s circumstances. None of those factors is a promise of a particular order.",
        ],
      },
      {
        heading: "Timely legal advice",
        paragraphs: [
          "Delay can affect the record before the court: medical papers, custody certificates, previous orders and the investigation status all change with time. Early advice helps in assembling the documents the court is likely to ask for. It does not guarantee that bail will be granted.",
        ],
      },
      {
        heading: "Court proceedings and documentation",
        paragraphs: [
          "A typical bail application is supported by copies of the FIR or complaint, remand papers if any, identity documents, and other material the advocate considers relevant. The Public Prosecutor is often heard. The court may grant bail, refuse it, or impose conditions.",
          "S&M Law Firm does not advertise guaranteed bail, a success rate, or a fixed outcome. Each application is decided by the court on its own facts.",
        ],
      },
    ],
    relatedSlugs: ["criminal-law", "cyber-crime"],
    relatedArticleSlugs: [
      "understanding-bail-proceedings-in-west-bengal",
      "how-to-prepare-for-a-legal-consultation",
    ],
  },
  {
    slug: "civil-litigation",
    number: "03",
    title: "Civil Litigation",
    cardTitle: "Civil Litigation",
    shortDescription:
      "Suits, applications and civil proceedings concerning private rights, property, contracts and related disputes.",
    heroKicker: "Practice area",
    pageTitle: "Civil Lawyer in Howrah | Advocate Manoj Kumar Singh",
    metaDescription:
      "Civil litigation in Howrah with Advocate Manoj Kumar Singh of S&M Law Firm: suits, notices, injunctions and representation before the competent civil court.",
    intro: [
      "Civil litigation concerns private rights and obligations — for example property, contracts, injunctions, recovery of money, and other claims that are not criminal prosecutions. Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, represents clients in civil proceedings where the matter falls within the practice.",
    ],
    sections: [
      {
        heading: "How a civil matter typically proceeds",
        paragraphs: [
          "A civil dispute may begin with correspondence or a legal notice, followed by a suit or application in the court that has territorial and pecuniary jurisdiction. The Code of Civil Procedure, 1908, governs the procedure of civil courts, together with the Specific Relief Act, 1963, and other statutes that create particular rights.",
          "The court may be asked for interim relief, such as a temporary injunction, while the suit is pending. Interim orders are discretionary and depend on a prima facie case, balance of convenience and irreparable injury — tests applied by the court, not by the parties.",
        ],
      },
      {
        heading: "Representation",
        paragraphs: [
          "Representation includes drafting pleadings, filing the case, appearing on listed dates, and advising on settlement where the client wishes to explore it. Settlement is always the client’s decision.",
          "Howrah District Court and the Calcutta High Court hear civil work of different kinds and values. The correct court is a question of law.",
        ],
      },
    ],
    relatedSlugs: ["property-law", "commercial-law", "arbitration"],
    relatedArticleSlugs: [
      "what-to-do-after-receiving-a-legal-notice",
      "how-property-disputes-are-handled-in-civil-courts",
      "difference-between-civil-and-criminal-proceedings",
    ],
  },
  {
    slug: "family-matrimonial-law",
    number: "04",
    title: "Family & Matrimonial Law",
    cardTitle: "Family & Matrimonial Law",
    shortDescription:
      "Advice and representation in matrimonial disputes, family conflicts and related court proceedings, handled with discretion.",
    heroKicker: "Practice area",
    pageTitle:
      "Family & Matrimonial Lawyer in Howrah | Advocate Manoj Kumar Singh",
    metaDescription:
      "Family and matrimonial matters in Howrah with Advocate Manoj Kumar Singh of S&M Law Firm: disputes, divorce-related proceedings and maintenance, treated with care.",
    intro: [
      "Family and matrimonial work touches the household as well as the court file. Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, advises on matrimonial disputes, family disagreements and related proceedings. The tone of this work is expected to be careful and discreet.",
    ],
    sections: [
      {
        heading: "Matrimonial and family disputes",
        paragraphs: [
          "Matrimonial disputes may involve living arrangements, allegations between spouses, questions of custody of children, and claims to maintenance or property. The personal law that applies — for example the Hindu Marriage Act, 1955, or other applicable statutes — depends on the parties’ legal status.",
          "Not every family disagreement requires a court case. Some matters are resolved by negotiation or by orders that the parties can live with. Others proceed to trial. The chambers can explain the procedural options; they cannot decide the family’s future for the client.",
        ],
      },
      {
        heading: "Consultation and representation",
        paragraphs: [
          "A consultation is an opportunity to set out the history, share existing papers (marriage documents, notices, previous orders) and understand what a petition or reply would involve. Original identity documents and a clear chronology help.",
          "Divorce and maintenance are described more fully on their own pages. Those proceedings remain connected to this area of work.",
        ],
      },
    ],
    relatedSlugs: ["divorce", "civil-litigation"],
    relatedArticleSlugs: [
      "understanding-the-divorce-process-in-india",
      "understanding-maintenance-proceedings",
    ],
  },
  {
    slug: "divorce",
    number: "05",
    title: "Divorce & Maintenance",
    cardTitle: "Divorce & Maintenance",
    shortDescription:
      "Petitions and advice concerning dissolution of marriage and maintenance, according to the applicable personal law.",
    heroKicker: "Practice area",
    pageTitle: "Divorce Lawyer in Howrah | Advocate Manoj Kumar Singh",
    metaDescription:
      "Divorce and maintenance proceedings in Howrah with Advocate Manoj Kumar Singh of S&M Law Firm. Clear procedural guidance without promises of a particular result.",
    intro: [
      "Divorce and maintenance are distinct but often connected proceedings. Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, advises on petitions for dissolution of marriage and on claims for maintenance, where the applicable personal law and the Code of Criminal Procedure or the Bharatiya Nagarik Suraksha Sanhita so provide.",
    ],
    sections: [
      {
        heading: "Divorce",
        paragraphs: [
          "Under the Hindu Marriage Act, 1955, a marriage may be dissolved on grounds set out in the Act, or by mutual consent under section 13B, subject to the statutory conditions and the court’s satisfaction. Other personal laws have their own grounds and procedures. Which statute applies is a legal question, not a matter of convenience.",
          "A divorce petition is a civil proceeding. It requires a proper presentation of facts, service on the other party, and compliance with the court’s directions. Time spent in court varies widely. No duration or outcome is promised.",
        ],
      },
      {
        heading: "Maintenance",
        paragraphs: [
          "Maintenance may be claimed in matrimonial proceedings and, separately, under provisions such as section 144 of the BNSS (corresponding to the former section 125 of the CrPC), which allows a magistrate to order monthly allowance in the circumstances the section describes.",
          "The amount, if any, is determined by the court on evidence of need and means. Figures advertised in advance would be misleading.",
        ],
      },
    ],
    relatedSlugs: ["family-matrimonial-law", "civil-litigation"],
    relatedArticleSlugs: [
      "understanding-the-divorce-process-in-india",
      "understanding-maintenance-proceedings",
    ],
  },
  {
    slug: "property-law",
    number: "06",
    title: "Property Law",
    cardTitle: "Property Law",
    shortDescription:
      "Disputes and documentation concerning land, buildings, possession, tenancy and related civil proceedings.",
    heroKicker: "Practice area",
    pageTitle: "Property Lawyer in Howrah | Advocate Manoj Kumar Singh",
    metaDescription:
      "Property and land disputes in Howrah with Advocate Manoj Kumar Singh of S&M Law Firm: possession, tenancy, eviction and civil proceedings over immovable property.",
    intro: [
      "Property work at S&M Law Firm, Howrah, concerns disputes and documentation relating to land and buildings — title, possession, tenancy, eviction and related civil proceedings. Advocate Manoj Kumar Singh advises on the papers and represents clients before the competent civil court where the dispute is justiciable.",
    ],
    sections: [
      {
        heading: "Property and land-related disputes",
        paragraphs: [
          "Disputes may involve competing claims to title, boundary and possession, alleged trespass, partition among co-sharers, or questions arising from sale, gift or inheritance. The Transfer of Property Act, 1882, the Registration Act, 1908, the Specific Relief Act, 1963, and the Code of Civil Procedure, 1908, are among the statutes that commonly apply.",
          "Revenue records, registered deeds and physical possession often tell different stories. The court decides on evidence. The advocate’s task is to present the client’s case clearly, not to rewrite the record.",
        ],
      },
      {
        heading: "Landlord, tenant and eviction matters",
        paragraphs: [
          "Tenancy and eviction in West Bengal are affected by the West Bengal Premises Tenancy Act, 1997, and by the terms of the tenancy, as well as by ordinary civil procedure. Which route is available depends on the nature of the occupation and the statute that governs it.",
        ],
      },
      {
        heading: "Documentation",
        paragraphs: [
          "Clients are often asked to bring deeds, tax receipts, municipal records, previous correspondence and any pending case papers. Incomplete papers delay advice. The office does not certify title in the manner of a licensed surveyor; it advises on the legal implications of the documents produced.",
        ],
      },
    ],
    relatedSlugs: ["civil-litigation", "commercial-law"],
    relatedArticleSlugs: [
      "how-property-disputes-are-handled-in-civil-courts",
      "understanding-property-and-land-disputes",
    ],
  },
  {
    slug: "cyber-crime",
    number: "07",
    title: "Cyber Crime",
    cardTitle: "Cyber Crime",
    shortDescription:
      "Legal assistance in complaints of online fraud, digital offences and related criminal or civil proceedings.",
    heroKicker: "Practice area",
    pageTitle: "Cyber Crime Lawyer in Howrah | Advocate Manoj Kumar Singh",
    metaDescription:
      "Cyber crime and online fraud matters in Howrah with Advocate Manoj Kumar Singh of S&M Law Firm: complaints, representation and procedural guidance under applicable law.",
    intro: [
      "Cyber crime work at S&M Law Firm, Howrah, concerns legal assistance where the alleged wrong involves computers, online accounts, digital communications or internet-enabled fraud. Advocate Manoj Kumar Singh advises on complaints, representation and the procedure that follows.",
    ],
    sections: [
      {
        heading: "Complaints and online fraud",
        paragraphs: [
          "A person who believes they have been the victim of online fraud, identity misuse, or another digital offence may need to notify the police, preserve electronic records, and in some cases approach a court. The National Cyber Crime Reporting Portal is one official channel for reporting; local police stations and designated cyber police units also receive complaints.",
          "The Information Technology Act, 2000, and relevant provisions of the Bharatiya Nyaya Sanhita, 2023, are among the statutes that may apply. Which section is attracted depends on the facts.",
        ],
      },
      {
        heading: "What this practice does — and does not — claim",
        paragraphs: [
          "The chambers provide legal representation and procedural guidance: drafting, appearance, and advice on the documents a court or investigating agency may expect. S&M Law Firm does not claim an in-house digital forensics laboratory, nor any technical capability that has not been confirmed.",
          "Electronic evidence is often specialised. Where a forensic opinion is required, that work is done by persons qualified to do it. The advocate’s role remains legal.",
        ],
      },
      {
        heading: "Documentation",
        paragraphs: [
          "Screenshots, bank alerts, emails, URLs and device records should be preserved carefully. Do not alter original files. A consultation can help identify what to keep and what to take to the police or the court. It is not a substitute for filing a complaint where one is required.",
        ],
      },
    ],
    relatedSlugs: ["criminal-law", "bail", "commercial-law"],
    relatedArticleSlugs: [
      "what-to-do-after-a-cyber-crime-or-online-fraud",
      "understanding-bail-proceedings-in-west-bengal",
    ],
  },
  {
    slug: "commercial-law",
    number: "08",
    title: "Commercial & Business Litigation",
    cardTitle: "Commercial & Business Litigation",
    shortDescription:
      "Business disputes, commercial litigation, document review and advice on legal transactions.",
    heroKicker: "Practice area",
    pageTitle: "Commercial Lawyer in Howrah | S&M Law Firm",
    metaDescription:
      "Commercial and business disputes in Howrah with Advocate Manoj Kumar Singh of S&M Law Firm: litigation, document review and advice on legal transactions.",
    intro: [
      "Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, advises businesses and individuals on commercial disputes, document review and legal transactions. The practice handles commercial litigation where the dispute is within the work of the chambers. It does not claim a specialist corporate department beyond what has been confirmed.",
    ],
    sections: [
      {
        heading: "Business disputes and commercial litigation",
        paragraphs: [
          "Commercial disputes may arise from unpaid invoices, supply of goods, partnership differences, alleged breach of contract, or other business disagreements. Some are resolved by correspondence. Others become suits or applications in the civil courts, or references to arbitration where the contract so provides.",
        ],
      },
      {
        heading: "Document review and legal transactions",
        paragraphs: [
          "The chambers review contracts, notices and related papers and advise on their legal implications. Drafting support for transactions is offered where it falls within the practice. Complex listed-company or cross-border work is not advertised here in the absence of a confirmed specialisation.",
        ],
      },
    ],
    relatedSlugs: ["civil-litigation", "arbitration", "property-law"],
    relatedArticleSlugs: [
      "what-to-do-after-receiving-a-legal-notice",
      "how-to-prepare-for-a-legal-consultation",
    ],
  },
  {
    slug: "arbitration",
    number: "09",
    title: "Arbitration & ADR",
    cardTitle: "Arbitration & ADR",
    shortDescription:
      "Advice and representation in arbitration and other alternative dispute resolution where the dispute and the agreement allow it.",
    heroKicker: "Practice area",
    pageTitle: "Arbitration & ADR in Howrah | Advocate Manoj Kumar Singh",
    metaDescription:
      "Arbitration and alternative dispute resolution in Howrah with Advocate Manoj Kumar Singh of S&M Law Firm, including advice on arbitral agreements and related court support.",
    intro: [
      "Arbitration and other forms of alternative dispute resolution are available where the parties have agreed to them, or where a statute requires them. Advocate Manoj Kumar Singh of S&M Law Firm, Howrah, advises on such clauses and on related proceedings.",
    ],
    sections: [
      {
        heading: "Arbitration",
        paragraphs: [
          "The Arbitration and Conciliation Act, 1996, governs domestic arbitration and related court applications in India. An arbitration clause in a contract may require disputes to be referred to an arbitrator rather than filed as an ordinary suit. Whether a particular dispute is arbitrable is a legal question.",
          "Court support for arbitration — for example appointment of an arbitrator or challenges to an award — is heard by the court specified in the Act. The Calcutta High Court and other competent courts hear such applications according to jurisdiction.",
        ],
      },
      {
        heading: "Other ADR",
        paragraphs: [
          "Mediation and conciliation are sometimes used in family, civil and commercial disputes. They depend on the willingness of the parties and, in some cases, on directions of the court. They are not a substitute for legal advice on the underlying rights.",
        ],
      },
    ],
    relatedSlugs: ["commercial-law", "civil-litigation", "family-matrimonial-law"],
    relatedArticleSlugs: ["what-to-do-after-receiving-a-legal-notice"],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((item) => item.slug === slug);
}

export function getRelatedPractice(area: PracticeArea): PracticeArea[] {
  return area.relatedSlugs
    .map((slug) => getPracticeArea(slug))
    .filter((item): item is PracticeArea => Boolean(item));
}
