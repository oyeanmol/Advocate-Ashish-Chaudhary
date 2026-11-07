import {
  Scale,
  Gavel,
  Home,
  Users,
  Briefcase,
  ShieldCheck,
  FileText,
  Landmark,
  HeartCrack,
  Building2,
  Laptop,
  Lightbulb,
  Building,
  Coins,
  Shield,
  Leaf,
  Plane,
  Umbrella,
  Rocket,
  Handshake,
  Globe,
  type LucideIcon,
} from "lucide-react";

/**
 * Verified details for Urmika Juris & Associates.
 * Founder & Principal Advocate: Advocate Aashish Choudhary
 * Senior Associates & Advocates: Satish Chand, Durga Das, Krishan Kumar
 */
export const FIRM = {
  name: "Urmika Juris & Associates",
  shortName: "Urmika Juris",
  tagline: "Satyamev Jayate",
  subtagline: "Truth Alone Triumphs — Dedicated Legal Counsel",
  founder: {
    name: "Aashish Choudhary",
    title: "Advocate Aashish Choudhary",
    designation: "Founder & Principal Advocate",
    barCouncil: "Bar Council of Delhi",
    chambers: "Chamber 298A, Western Wing, Tis Hazari Courts, Delhi",
  },
  advocates: [
    {
      name: "Aashish Choudhary",
      designation: "Advocate",
      role: "Founder & Principal Advocate",
      forum: "Tis Hazari Courts, Delhi High Court & Supreme Court",
    },
    {
      name: "Satish Chand",
      designation: "Advocate",
      role: "Senior Counsel",
      forum: "Tis Hazari Courts & Delhi High Court",
    },
    {
      name: "Durga Das",
      designation: "Advocate",
      role: "Counsel",
      forum: "Tis Hazari Courts & District Courts",
    },
    {
      name: "Krishan Kumar",
      designation: "Advocate",
      role: "Counsel",
      forum: "Tis Hazari Courts & Appellate Tribunals",
    },
  ],
  phone: "+91 88024 87291",
  phoneDisplay: "+91 88024 87291",
  phoneHref: "tel:+918802487291",
  whatsapp: "https://wa.me/918802487291",
  whatsappHref:
    "https://wa.me/918802487291?text=Hello%20Urmika%20Juris%20%26%20Associates%2C%20I%20would%20like%20to%20enquire%20about%20a%20legal%20consultation.",
  email: "urmikajuris@gmail.com",
  emailHref: "mailto:urmikajuris@gmail.com",
  chamber: "Ch. 298A, Western Wing, Tis Hazari Courts, Delhi – 110054",
  address: "Ch. 298A, Western Wing, Tis Hazari Courts, Delhi – 110054",
  courtJurisdiction: "Tis Hazari Courts, Delhi High Court & Supreme Court of India",
  hours: "Mon – Sat, 10:00 AM – 7:00 PM (By Appointment)",
  consultationDuration: "30 Minutes",
  consultationTermsWording:
    "Your initial consultation is scheduled for up to 30 minutes. Any applicable charges beyond the initial consultation period, or any subsequent professional fees, will be communicated to you according to the applicable agreed terms and professional norms. Where agreed, applicable consultation charges may be adjusted as part of the overall case fees.",
  bciDisclaimer:
    "As per the rules of the Bar Council of India (Rule 36), advocates are not permitted to advertise or solicit work in any form or manner. This website is solely intended for informational purposes and should not be construed as an advertisement, solicitation, personal communication, invitation, or legal advice. Any user seeking information does so of their own volition.",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/legal-services", label: "Legal Services" },
  { to: "/how-we-work", label: "How We Work" },
  { to: "/reviews", label: "Professional Conduct" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export type LegalService = {
  slug: string;
  emoji: string;
  category: string;
  icon: LucideIcon;
  title: string;
  short: string;
  desc: string;
  blurb: string;
  points: string[];
  core: string[];
  forums: string[];
  statutoryBasis: string;
};

/**
 * Complete 19 Legal Services matching VakeelSaab.com with exact titles, emojis, and descriptions.
 */
export const LEGAL_SERVICES: LegalService[] = [
  {
    slug: "property-lawyer",
    emoji: "🏠",
    category: "Property & Real Estate",
    icon: Home,
    title: "Property Lawyer",
    short: "Real Estate, Title Search & Land Disputes",
    desc: "Real estate transactions, property disputes, land records, documentation, and title verification.",
    blurb:
      "Comprehensive legal counsel for buyer-builder disputes, title search verification, ancestral partition suits, illegal possession, and registry vetting across Delhi courts.",
    points: [
      "Property Documentation & Title Search",
      "Title Verification & Chain Examination",
      "Real Estate Transactions & Registry",
      "Land Disputes & Possession Suits",
      "RERA Injunctions & Delay Compensation",
    ],
    core: [
      "Title Search & Chain Verification",
      "Partition & Possession Civil Suits",
      "RERA Authority & Appellate Tribunal Complaints",
      "Commercial Lease & Tenancy Disputes",
      "Specific Performance of Sale Agreements",
      "Land Acquisition & Fair Compensation Claims",
      "Builder Delay & Possession Litigation",
      "Mutation, Revenue & Demarcation Appeals",
    ],
    forums: [
      "Tis Hazari District Courts (Civil Division)",
      "Delhi Real Estate Regulatory Authority (RERA)",
      "Delhi High Court (Original & Appellate)",
    ],
    statutoryBasis: "Transfer of Property Act 1882, Specific Relief Act 1963 & RERA Act 2016",
  },
  {
    slug: "criminal-lawyer",
    emoji: "⚖️",
    category: "Criminal Defense",
    icon: Gavel,
    title: "Criminal Lawyer",
    short: "Bail, FIR Quashing & Trial Defence",
    desc: "Criminal defense, bail applications, FIR guidance, and representation in criminal proceedings.",
    blurb:
      "Strategic courtroom defense from police interrogation and remand hearings to regular bail, anticipatory bail, trial cross-examination, and High Court quashing petitions.",
    points: [
      "Regular Bail & Anticipatory Bail",
      "FIR Quashing & Cancellation Guidance",
      "Sessions Trial Defence & Cross-Examination",
      "Criminal Appeals & Revisions",
      "NDPS & Economic Offences Representation",
    ],
    core: [
      "Anticipatory Bail (BNSS Sec 482 / CrPC Sec 438)",
      "Regular Bail Applications before Sessions Courts",
      "FIR Quashing Petitions before Delhi High Court",
      "Trial Defence before Special Sessions Courts",
      "Remand & Police Custody Hearings",
      "Criminal Appeals & Revisional Petitions",
      "Special Leave Petitions before Supreme Court",
    ],
    forums: [
      "Tis Hazari District & Sessions Court",
      "Patiala House & Saket Courts",
      "Delhi High Court (Criminal Jurisdiction)",
      "Supreme Court of India",
    ],
    statutoryBasis:
      "Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS) & CrPC",
  },
  {
    slug: "civil-lawyer",
    emoji: "📜",
    category: "Civil Litigation",
    icon: Scale,
    title: "Civil Lawyer",
    short: "Injunctions, Recovery & Contract Disputes",
    desc: "Civil disputes, contract matters, tort claims, and general civil litigation support.",
    blurb:
      "Calculated pleading and representation in civil courts for temporary injunctions, stay orders, declaratory suits, summary recovery proceedings, and execution of decrees.",
    points: [
      "Stay Orders & Temporary Injunctions",
      "Money Recovery Suits (Order 37 CPC)",
      "Declaratory Suits & Specific Relief",
      "Execution of Court Decrees & Attachment",
      "Civil Appeals & Revisions",
    ],
    core: [
      "Temporary Injunctions (Order 39 Rules 1 & 2 CPC)",
      "Declaratory Suits for Legal Status & Rights",
      "Specific Performance of Commercial Contracts",
      "Summary Suits for Fast Money Recovery",
      "Execution of Decrees & Warrants of Attachment",
      "First & Second Civil Appeals before High Court",
    ],
    forums: [
      "Tis Hazari Senior Civil Judge & ADJ Courts",
      "Delhi High Court (Civil Appellate Division)",
    ],
    statutoryBasis: "Code of Civil Procedure 1908 (CPC) & Specific Relief Act 1963",
  },
  {
    slug: "family-lawyer",
    emoji: "👨‍👩‍👧‍👦",
    category: "Family & Matrimonial",
    icon: Users,
    title: "Family Lawyer",
    short: "Custody, Maintenance & Domestic Violence",
    desc: "Divorce proceedings, child custody, domestic violence, alimony, and family disputes.",
    blurb:
      "Empathetic and discreet counsel in family conflicts, prioritizing amicable pre-litigation settlement and mediation, while fiercely defending parental rights and financial safeguards.",
    points: [
      "Child Custody & Parental Visitation Rights",
      "Interim & Permanent Alimony / Maintenance",
      "Protection from Domestic Violence (PWDVA)",
      "Family Settlement & Mediation Drafting",
      "Guardianship & Adoption Proceedings",
    ],
    core: [
      "Child Custody Applications & Visitation Schedules",
      "Maintenance under Sec 125 CrPC / Sec 144 BNSS",
      "Protection Orders under PWDVA 2005",
      "Family Property Partition & Settlements",
      "Restitution of Conjugal Rights",
    ],
    forums: [
      "Principal Family Court, Tis Hazari",
      "Family Courts at Rohini, Saket & Dwarka",
      "Delhi High Court (Matrimonial Appeals)",
    ],
    statutoryBasis: "Hindu Marriage Act 1955, PWDVA 2005 & Guardians and Wards Act",
  },
  {
    slug: "divorce-lawyer",
    emoji: "💔",
    category: "Family & Matrimonial",
    icon: HeartCrack,
    title: "Divorce Lawyer",
    short: "Mutual Consent & Contested Divorce",
    desc: "Specialized divorce legal services including mutual divorce, contested divorce, alimony, and custody matters.",
    blurb:
      "Navigating divorce proceedings with dignity and legal precision. Handling mutual consent filings with statutory waiver applications, and contested divorce on statutory grounds.",
    points: [
      "Mutual Consent Divorce (HMA Sec 13B)",
      "Contested Divorce Litigation",
      "Waiver of 6-Month Cooling-off Period",
      "Permanent Alimony & Financial Settlements",
      "Annulment of Void & Voidable Marriages",
    ],
    core: [
      "Mutual Consent Divorce Joint Petitions",
      "Contested Divorce Petitions on Cruelty & Desertion",
      "Permanent Alimony Negotiation & Execution",
      "Cooling-off Period Exemption Applications",
      "Foreign Divorce Decree Recognition in India",
    ],
    forums: ["Family Court Complex, Tis Hazari", "Delhi Family Courts", "Delhi High Court"],
    statutoryBasis: "Hindu Marriage Act 1955 & Special Marriage Act 1954",
  },
  {
    slug: "corporate-lawyer",
    emoji: "🏢",
    category: "Corporate & Business",
    icon: Building2,
    title: "Corporate Lawyer",
    short: "Governance, ROC & M&A Compliance",
    desc: "Business registration, compliance, mergers & acquisitions, and corporate governance.",
    blurb:
      "Strategic advisory for companies, LLPs, and enterprises covering corporate compliance, commercial contract negotiation, shareholder pacts, and regulatory filings.",
    points: [
      "Corporate Registration & ROC Compliance",
      "Commercial Contracts & Master Service Agreements",
      "Mergers, Acquisitions & Due Diligence",
      "Shareholder Agreements & ESOP Schemes",
      "Corporate Governance & Board Resolutions",
    ],
    core: [
      "Company Incorporation & ROC Filings",
      "Commercial Contract Drafting & Vetting",
      "Shareholder Agreements (SHA) & Investment Pacts",
      "Mergers & Amalgamation Schemes",
      "Corporate Dispute Advisory",
    ],
    forums: [
      "National Company Law Tribunal (NCLT Delhi Bench)",
      "Registrar of Companies (ROC Delhi)",
      "Delhi High Court (Company Jurisdiction)",
    ],
    statutoryBasis: "Companies Act 2013 & LLP Act 2008",
  },
  {
    slug: "cyber-crime-lawyer",
    emoji: "💻",
    category: "Technology & Crime",
    icon: Laptop,
    title: "Cyber Crime Lawyer",
    short: "Online Fraud, Data Breaches & IT Act",
    desc: "Online fraud protection, cybercrime investigation, data breach response, and IT Act compliance.",
    blurb:
      "Immediate legal intervention in financial cyber frauds, unauthorized bank transfers, data theft, identity theft, defamation on social media, and Section 66 IT Act offenses.",
    points: [
      "Financial Cyber Fraud & Account Freezing",
      "Identity Theft & Social Media Impersonation",
      "Data Breach Defense & Response",
      "IT Act Offenses & Bail Applications",
      "Liaison with Delhi Police Cyber Cell",
    ],
    core: [
      "Representation before Special Cyber Cell Courts",
      "Applications for Unfreezing Legitimate Bank Accounts",
      "Section 66 & 67 IT Act Defense and Prosecution",
      "Cyber Defamation Injunction Petitions",
      "Cryptocurrency & Online Investment Fraud Claims",
    ],
    forums: [
      "Cyber Crime Police Stations (Delhi NCR)",
      "Chief Metropolitan Magistrate, Tis Hazari",
      "Delhi High Court",
    ],
    statutoryBasis: "Information Technology Act 2000 & Bharatiya Nyaya Sanhita",
  },
  {
    slug: "intellectual-property-lawyer",
    emoji: "💡",
    category: "Corporate & Business",
    icon: Lightbulb,
    title: "Intellectual Property Lawyer",
    short: "Trademarks, Patents & Copyright Disputes",
    desc: "Patent filing, trademark registration, copyright protection, and IP litigation.",
    blurb:
      "Securing your brand, innovation, and creative assets. Handling trademark registration, opposition hearings, copyright infringement injunctions, and commercial IP litigation.",
    points: [
      "Trademark Search, Filing & Prosecution",
      "Trademark Opposition & Hearing Representation",
      "Copyright Protection & Injunction Suits",
      "Patent Documentation & Infringement Defense",
      "Trade Secrets & Licensing Agreements",
    ],
    core: [
      "Trademark Registration & Objection Responses",
      "Trademark Opposition before Registrar",
      "Passing Off & Infringement Civil Suits",
      "Copyright Assignment & Licensing Vetting",
      "Design Registration & Protection",
    ],
    forums: [
      "Intellectual Property Appellate Division, Delhi High Court",
      "Trade Marks Registry, Dwarka, New Delhi",
      "Commercial Courts, Tis Hazari",
    ],
    statutoryBasis: "Trade Marks Act 1999, Copyright Act 1957 & Patents Act 1970",
  },
  {
    slug: "labour-and-employment-lawyer",
    emoji: "💼",
    category: "Employment & Labour",
    icon: Briefcase,
    title: "Labour and Employment Lawyer",
    short: "Workplace Disputes, POSH & Contracts",
    desc: "Employment contracts, workplace disputes, labor compliance, and employee rights.",
    blurb:
      "Advising both employers and employees on employment contracts, wrongful termination claims, gratuity disputes, non-compete enforcement, and POSH workplace compliance.",
    points: [
      "Employment Contract Drafting & Non-Competes",
      "Wrongful Termination & Severance Disputes",
      "POSH Compliance & Internal Committee Counsel",
      "Gratuity, PF & Wage Recovery Claims",
      "Industrial Disputes & Labour Court Representation",
    ],
    core: [
      "Labour Court & Industrial Tribunal Filings",
      "POSH Inquiry Handling & Advisory",
      "Non-Solicitation & Confidentiality Enforcement",
      "Employment Dispute Settlements",
      "Workplace Harassment Legal Defence",
    ],
    forums: [
      "Labour Courts & Industrial Tribunals, Rouse Avenue / Tis Hazari",
      "Controlling Authority under Payment of Gratuity Act",
      "Delhi High Court",
    ],
    statutoryBasis: "Industrial Disputes Act 1947 & POSH Act 2013",
  },
  {
    slug: "administrative-lawyer",
    emoji: "🏛️",
    category: "Public & Constitutional",
    icon: Building,
    title: "Administrative Lawyer",
    short: "CAT Applications, Public Service & Regulations",
    desc: "Government regulations, administrative appeals, licensing, and regulatory compliance.",
    blurb:
      "Challenging arbitrary administrative orders, executive inaction, and public service disputes before the Central Administrative Tribunal (CAT) and High Courts.",
    points: [
      "Central Administrative Tribunal (CAT) Applications",
      "Government Service, Promotion & Pension Disputes",
      "Administrative Regulatory Appeals",
      "Statutory Licensing & Permit Disputes",
      "Judicial Review of Executive Decisions",
    ],
    core: [
      "Original Applications (OA) before CAT Principal Bench",
      "Seniority & Promotion Challenge Petitions",
      "Pension & Retirement Benefit Disputes",
      "Departmental Inquiry Defense",
      "Writ Petitions against Tribunal Orders",
    ],
    forums: [
      "Central Administrative Tribunal (CAT Principal Bench, New Delhi)",
      "High Court of Delhi (Writ Jurisdiction)",
    ],
    statutoryBasis: "Administrative Tribunals Act 1985 & Constitution of India",
  },
  {
    slug: "tax-lawyer",
    emoji: "💰",
    category: "Taxation & Finance",
    icon: Coins,
    title: "Tax Lawyer",
    short: "GST Disputes, Income Tax & Scrutiny Appeals",
    desc: "Tax planning, GST compliance, income tax matters, and tax dispute resolution.",
    blurb:
      "Representation before tax appellate authorities and High Courts for income tax scrutiny notices, search and seizure proceedings, GST dispute appeals, and penalty relief.",
    points: [
      "Income Tax Scrutiny Notice Responses",
      "CIT (Appeals) & ITAT Representation",
      "GST Notice Defense & Appellate Authority Filings",
      "Tax Search, Seizure & Attachment Defense",
      "Tax Writs before Delhi High Court",
    ],
    core: [
      "Representation before Income Tax Appellate Tribunal (ITAT)",
      "GST Show Cause Notice Drafting & Defenses",
      "Appeals before Commissioner of Income Tax (Appeals)",
      "Penalty Waiver & Compounding Applications",
      "High Court Tax Appeals under Section 260A",
    ],
    forums: [
      "Income Tax Appellate Tribunal (ITAT Delhi)",
      "GST Appellate Authorities, New Delhi",
      "Delhi High Court (Tax Bench)",
    ],
    statutoryBasis: "Income Tax Act 1961 & Central Goods and Services Tax Act 2017",
  },
  {
    slug: "consumer-protection-lawyer",
    emoji: "🛡️",
    category: "Consumer Law",
    icon: Shield,
    title: "Consumer Protection Lawyer",
    short: "Commission Claims, Product & Service Deficiency",
    desc: "Consumer rights, product liability, service deficiency, and consumer court proceedings.",
    blurb:
      "Filing and arguing claims before District, State, and National Consumer Commissions against defective goods, insurance claim repudiations, and deficiency in services.",
    points: [
      "Complaints Against Real Estate Builders",
      "Insurance Claim Repudiation Disputes",
      "Product Liability & Defective Goods Claims",
      "Deficiency in Banking & Medical Services",
      "Appeals before State Commission & NCDRC",
    ],
    core: [
      "District Consumer Disputes Redressal Commission (Tis Hazari)",
      "Delhi State Consumer Commission (SCDRC) Appeals",
      "National Commission (NCDRC) Representations",
      "Execution of Consumer Forum Compensation Orders",
      "Settlement & Conciliation of Consumer Claims",
    ],
    forums: [
      "District Consumer Commission, Tis Hazari",
      "Delhi State Commission (SCDRC)",
      "National Commission (NCDRC)",
    ],
    statutoryBasis: "Consumer Protection Act 2019",
  },
  {
    slug: "environmental-lawyer",
    emoji: "🌿",
    category: "Public & Environmental",
    icon: Leaf,
    title: "Environmental Lawyer",
    short: "NGT Litigation, Clearances & Pollution Compliance",
    desc: "Environmental compliance, pollution control, environmental clearances, and green regulations.",
    blurb:
      "Representation before the National Green Tribunal (NGT) and High Courts regarding environmental clearances, industrial pollution notices, and regulatory compliances.",
    points: [
      "National Green Tribunal (NGT) Applications",
      "Pollution Control Board Notice Defense",
      "Environmental Impact Assessment (EIA) Disputes",
      "Industrial Discharge & Closure Orders Relief",
      "Environmental Writs before High Court",
    ],
    core: [
      "Applications before NGT Principal Bench, New Delhi",
      "State Pollution Control Committee Appeal Hearings",
      "Stay of Closure Directions for Commercial Units",
      "Forest & Wildlife Protection Advisory",
      "Environmental Clearance Statutory Appeals",
    ],
    forums: [
      "National Green Tribunal (Principal Bench, New Delhi)",
      "Delhi High Court",
      "Supreme Court of India",
    ],
    statutoryBasis: "National Green Tribunal Act 2010 & Environment (Protection) Act 1986",
  },
  {
    slug: "immigration-lawyer",
    emoji: "✈️",
    category: "Immigration & Global",
    icon: Plane,
    title: "Immigration Lawyer",
    short: "Visa Refusal, OCI & Citizenship Appeals",
    desc: "Visa applications, work permits, citizenship matters, and immigration compliance.",
    blurb:
      "Legal counsel for visa refusals, deportation challenges, Overseas Citizen of India (OCI) registration disputes, foreign citizen compliance, and FRRO legal issues.",
    points: [
      "Visa Refusal Appeal Petitions",
      "OCI Card Cancellation & Restoration",
      "FRRO Compliance & Deportation Defense",
      "Extradition Proceedings & Red Corner Notices",
      "Citizenship & Renunciation Applications",
    ],
    core: [
      "Writ Petitions against FRRO Orders in Delhi High Court",
      "OCI Registration Appeals before MHA",
      "Cross-Border Family & Custody Clearances",
      "Foreign National Detention & Bail Matters",
      "Immigration Clearance Protocols",
    ],
    forums: [
      "Foreigners Regional Registration Office (FRRO Delhi)",
      "Ministry of Home Affairs (MHA)",
      "Delhi High Court",
    ],
    statutoryBasis: "Citizenship Act 1955, Foreigners Act 1946 & Passports Act 1967",
  },
  {
    slug: "insurance-lawyer",
    emoji: "☂️",
    category: "Insurance & Claims",
    icon: Umbrella,
    title: "Insurance Lawyer",
    short: "Claim Repudiation, Policy Disputes & Ombudsman",
    desc: "Insurance claims, policy disputes, insurance fraud, and insurance regulatory matters.",
    blurb:
      "Advocating for policyholders against unfair claim rejections across life, health, fire, marine, and motor accident policies before the Insurance Ombudsman and Courts.",
    points: [
      "Health & Life Insurance Repudiation Disputes",
      "Insurance Ombudsman Representation",
      "Commercial Fire & Cargo Insurance Claims",
      "Motor Accident Claims Tribunal (MACT) Proceedings",
      "Consumer Court Filing for Deficient Settlement",
    ],
    core: [
      "Representation before Insurance Ombudsman (Delhi)",
      "MACT Compensation Claims before District Courts",
      "Repudiation Challenge before Consumer Commissions",
      "Third-Party Liability & Subrogation Litigation",
      "Policy Clause Interpretation Petitions",
    ],
    forums: [
      "Insurance Ombudsman (Delhi Jurisdiction)",
      "MACT Courts, Tis Hazari",
      "Delhi Consumer Commissions",
    ],
    statutoryBasis: "Insurance Act 1938 & Consumer Protection Act 2019",
  },
  {
    slug: "startup-lawyer",
    emoji: "🚀",
    category: "Corporate & Business",
    icon: Rocket,
    title: "Startup Lawyer",
    short: "Founders Agreements, ESOPs & Seed Term Sheets",
    desc: "Startup registration, funding agreements, equity structuring, and startup compliance.",
    blurb:
      "From incorporation and co-founders' agreements to angel/seed term sheets, cap table structuring, ESOP pools, and regulatory compliance for emerging ventures.",
    points: [
      "Co-Founders Agreement & Equity Vesting",
      "Term Sheet & Shareholders Agreement Vetting",
      "ESOP Policy Structuring & Documentation",
      "IP Assignment & Data Privacy Policies",
      "DPIIT Startup India Recognition Counsel",
    ],
    core: [
      "Early-Stage Investment Term Sheets",
      "SAFE / Convertible Note Documentation",
      "Vendor & SaaS Master Service Agreements",
      "Startup Regulatory Sandbox Compliance",
      "Commercial Lease & Co-Working Agreements",
    ],
    forums: ["Registrar of Companies (ROC)", "Commercial Courts, Delhi", "Arbitration Centers"],
    statutoryBasis: "Companies Act 2013 & Indian Contract Act 1872",
  },
  {
    slug: "business-lawyer",
    emoji: "🤝",
    category: "Corporate & Business",
    icon: Handshake,
    title: "Business Lawyer",
    short: "Commercial Agreements, Partnership & Recovery",
    desc: "Business contracts, partnership agreements, commercial disputes, and business compliance.",
    blurb:
      "Protecting business interests through bulletproof drafting of vendor agreements, non-disclosures, partnership deeds, distributor contracts, and fast-track debt recovery.",
    points: [
      "Commercial Partnership & JV Agreements",
      "Vendor, Supplier & Distributor Contracts",
      "Business Debt Recovery & Legal Notices",
      "Breach of Contract Commercial Litigation",
      "Commercial Mediation & Pre-Litigation Talks",
    ],
    core: [
      "Partnership Deed Drafting & Dissolution Suits",
      "Commercial Recovery Suits under Commercial Courts Act",
      "Section 9 Interim Measures in Business Disputes",
      "Franchise & Distributorship Agreements",
      "Settlement & Compromise Deeds",
    ],
    forums: ["Commercial Courts, Tis Hazari", "Delhi High Court (Commercial Division)"],
    statutoryBasis:
      "Indian Contract Act 1872, Indian Partnership Act 1932 & Commercial Courts Act 2015",
  },
  {
    slug: "nri-lawyer",
    emoji: "🌐",
    category: "NRI & Cross-Border",
    icon: Globe,
    title: "NRI Lawyer",
    short: "Property, Inheritance & Matrimonial from Abroad",
    desc: "Specialized NRI legal services for property, family, business, and inheritance matters from abroad.",
    blurb:
      "Dedicated counsel for Non-Resident Indians managing legal concerns in India: ancestral property safeguarding, partition suits, illegal encroachment removal, and mutual divorce without travel.",
    points: [
      "Ancestral Property Safeguarding & Title Verification",
      "Power of Attorney (POA) Drafting & Adjudication",
      "NRI Mutual Consent Divorce without Physical Presence",
      "Illegal Possession & Tenant Eviction in Delhi NCR",
      "Probate & Succession Certificate Petitions",
    ],
    core: [
      "Adjudication of Foreign POAs with SDM / Collector",
      "Civil Suits for Partition & Injunction for NRIs",
      "Virtual Family Court Appearance Assistance",
      "Inheritance, Will & Succession Litigation",
      "FIR Representation & Police Clearance Advisory",
    ],
    forums: [
      "Tis Hazari District Courts",
      "Delhi High Court",
      "Sub-Divisional Magistrate (SDM) Offices",
    ],
    statutoryBasis:
      "Powers of Attorney Act 1882, Indian Succession Act 1925 & Transfer of Property Act",
  },
  {
    slug: "nclt-lawyer",
    emoji: "⚖️",
    category: "Insolvency & Corporate",
    icon: Landmark,
    title: "NCLT Lawyer",
    short: "IBC Insolvency, Oppression & Company Litigation",
    desc: "Corporate insolvency, shareholder disputes, company law matters, and NCLT litigation.",
    blurb:
      "Vigorous representation before the National Company Law Tribunal (NCLT) and NCLAT for Section 7 & 9 IBC insolvency petitions, shareholder oppression, and restoration of struck-off companies.",
    points: [
      "Section 7 & 9 IBC Corporate Insolvency Petitions",
      "Section 241/242 Oppression & Mismanagement Suits",
      "Restoration of Struck-Off Companies (Section 252)",
      "NCLAT Appeals & Interlocutory Applications",
      "Corporate Debt Restructuring & Resolution Plans",
    ],
    core: [
      "Operational Creditor Insolvent Filings (Sec 9 IBC)",
      "Financial Creditor Insolvency Applications (Sec 7 IBC)",
      "Shareholder Disputes & Deadlock Resolution",
      "Merger Schemes & Capital Reduction Petitions",
      "Appeals before National Company Law Appellate Tribunal",
    ],
    forums: [
      "National Company Law Tribunal (NCLT Principal Bench & New Delhi Benches)",
      "National Company Law Appellate Tribunal (NCLAT)",
      "Supreme Court of India",
    ],
    statutoryBasis: "Insolvency and Bankruptcy Code 2016 (IBC) & Companies Act 2013",
  },
];

/**
 * Backwards compatibility aliases for previous slugs.
 */
export const PRACTICE = LEGAL_SERVICES;
export type PracticeArea = LegalService;

/**
 * Helper to find a legal service by slug, matching both new and legacy slugs.
 */
export function findLegalService(slug: string): LegalService | undefined {
  const direct = LEGAL_SERVICES.find((s) => s.slug === slug);
  if (direct) return direct;

  // Legacy mappings
  const legacyMap: Record<string, string> = {
    "criminal-law": "criminal-lawyer",
    "family-divorce": "family-lawyer",
    "property-real-estate": "property-lawyer",
    "corporate-commercial": "corporate-lawyer",
    "civil-litigation": "civil-lawyer",
    "consumer-protection": "consumer-protection-lawyer",
    "cheque-bounce": "criminal-lawyer",
    "writs-constitutional": "administrative-lawyer",
  };

  const targetSlug = legacyMap[slug];
  if (targetSlug) {
    return LEGAL_SERVICES.find((s) => s.slug === targetSlug);
  }
  return undefined;
}

export const HOW_WE_WORK_STEPS = [
  {
    step: "01",
    title: "Initial Case Intake & Preliminary Study",
    subtitle: "Confidential Document Examination",
    desc: "We review the factual matrix, court notices, statutory timelines, and available evidentiary documents under strict advocate-client privilege.",
    highlights: [
      "Privileged review of notices, agreements, or FIR copies",
      "Evaluation of statutory limitation and procedural urgency",
      "Preliminary assessment of merits and legal risks",
    ],
  },
  {
    step: "02",
    title: "Chamber Consultation & Legal Strategy",
    subtitle: "30-Minute Structured Advisory",
    desc: "A dedicated 30-minute consultation (at our Tis Hazari chamber or via tele-conference) to delineate actionable options, applicable fee norms, and forum strategy.",
    highlights: [
      "Clear explanation of courtroom options vs. settlement routes",
      "Transparent communication of professional terms and next steps",
      "Drafting roadmap tailored to Tis Hazari, High Court, or Tribunals",
    ],
  },
  {
    step: "03",
    title: "Court Representation & Enforcement",
    subtitle: "Diligent Advocacy Across Judicial Forums",
    desc: "Meticulous drafting, prompt filing, interim relief applications, and vigorous trial and appellate representation before Delhi and appellate courts.",
    highlights: [
      "Physical and virtual appearances at every scheduled hearing",
      "Regular hearing outcome updates and procedural milestones",
      "Execution and enforcement of final court orders and decrees",
    ],
  },
];

export const FAQS = [
  {
    q: "How does the initial 30-minute consultation work?",
    a: "Your initial consultation is scheduled for up to 30 minutes. During this session, an advocate from Urmika Juris & Associates reviews your facts and documents to outline legal options. Any applicable charges beyond the initial half-hour, or subsequent case fees, are communicated according to professional norms and agreed terms before further work begins.",
  },
  {
    q: "Where is your chamber located?",
    a: "Our chamber is located at Chamber No. 298A, Western Wing, Tis Hazari Courts, Delhi – 110054. In-person consultations are available by prior appointment during chamber hours (Monday to Saturday, 10:00 AM to 7:00 PM).",
  },
  {
    q: "Do you offer consultations for clients residing outside Delhi?",
    a: "Yes. For clients located across India or overseas (NRIs) who have matters pending in Delhi High Court, Tis Hazari, or other Delhi judicial complexes, we provide preliminary telephonic and video consultations.",
  },
  {
    q: "Which courts and judicial forums do your advocates practice in?",
    a: "Our advocates regularly appear before Tis Hazari District & Sessions Courts, Patiala House Courts, Saket, Rohini, Dwarka, the High Court of Delhi, and the Supreme Court of India, as well as specialized bodies including Consumer Commissions, RERA, DRT, and NCLT.",
  },
  {
    q: "What documents should I prepare before contacting the firm?",
    a: "Please keep all relevant papers accessible: copies of any court summons, notices received, FIR/complaint copies, agreements, contracts, property deeds, or communication history. This allows us to make the most constructive use of your 30-minute consultation.",
  },
  {
    q: "How is advocate-client confidentiality safeguarded?",
    a: "All consultations and communications are protected under the strict ethical provisions of the Advocates Act and Section 126 of the Indian Evidence Act (Advocate-Client Privilege). Your information is never shared with third parties.",
  },
  {
    q: "What are your professional fee terms?",
    a: "Fees are determined based on the nature, forum, and complexity of each matter. In accordance with client instructions and ethical norms, professional terms are discussed transparently and agreed upon before engagement. Where agreed, initial consultation charges may be adjusted against comprehensive case fees.",
  },
];

export const TRUST_POINTS = [
  {
    title: "Tis Hazari Chamber Presence",
    desc: "Permanent chamber at Ch. 298A, Western Wing, Tis Hazari Courts complex in central Delhi.",
  },
  {
    title: "Multi-Court Practice",
    desc: "Dedicated representation across District Courts, Delhi High Court, and appellate forums.",
  },
  {
    title: "30-Min Structured Consult",
    desc: "Focused initial consultation with transparent terms and procedural clarity.",
  },
  {
    title: "Bar Council Ethical Compliance",
    desc: "Strict adherence to Rule 36 of the Bar Council of India standards of professional conduct.",
  },
];
