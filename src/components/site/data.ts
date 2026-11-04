import { Scale, Gavel, Home, Users, Briefcase, ShieldCheck, FileText, Landmark, type LucideIcon } from "lucide-react";

export const FIRM = {
  name: "Urmika Juris & Associates",
  tagline: "Satyamev Jayate",
  advocate: "Aashish Choudhary",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "https://wa.me/919876543210",
  email: "contact@urmikajuris.com",
  address: "Chamber No. 101, District Court Complex, New Delhi, India",
  hours: "Mon – Sat, 10:00 AM – 7:00 PM",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/contact", label: "Contact" },
] as const;

export type PracticeArea = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  desc: string;
  points: string[];
  blurb: string;
  core: string[];
};

export const PRACTICE: PracticeArea[] = [
  {
    slug: "criminal-law",
    icon: Gavel,
    title: "Criminal Law",
    short: "Bail, Trial Defence & Appeals",
    desc: "Bail, trial defence, FIR quashing, appeals and white-collar matters.",
    blurb:
      "From arrest to acquittal, our criminal practice handles bail, FIR quashing, trial defence and appeals — with round-the-clock availability for urgent matters.",
    points: [
      "Bail & Anticipatory Bail",
      "FIR Quashing & Cancellation",
      "Trial Defence in Sessions Matters",
      "Appeals, Revisions & Review",
      "White-Collar & Economic Offences",
    ],
    core: [
      "Bail & Anticipatory Bail",
      "FIR Quashing & Cancellation",
      "Trial Defence Before Sessions Courts",
      "Appeals, Revisions & Review",
      "NDPS & Narcotics Matters",
      "Economic & Financial Offences",
      "Custodial & Remand Matters",
      "Police Liaison & Protection Orders",
      "Victim & Witness Support",
    ],
  },
  {
    slug: "family-divorce",
    icon: Users,
    title: "Family & Divorce",
    short: "Divorce, Custody & Maintenance",
    desc: "Divorce, child custody, maintenance, domestic violence and mediation.",
    blurb:
      "Family matters need discretion as much as legal skill. We handle divorce, custody, maintenance and domestic violence cases with a settlement-first approach.",
    points: [
      "Mutual & Contested Divorce",
      "Child Custody & Visitation",
      "Maintenance & Alimony",
      "Domestic Violence Matters",
      "Mediation & Settlement",
    ],
    core: [
      "Mutual Consent Divorce",
      "Contested Divorce",
      "Child Custody & Visitation",
      "Maintenance & Alimony",
      "Domestic Violence (PWDVA)",
      "Guardianship & Adoption",
      "Succession & Inheritance",
      "Settlement & Mediation Agreements",
      "Restitution of Conjugal Rights",
    ],
  },
  {
    slug: "property-real-estate",
    icon: Home,
    title: "Property & Real Estate",
    short: "Title, RERA & Possession Disputes",
    desc: "Title disputes, partition, RERA, tenancy and documentation.",
    blurb:
      "Property titles, builder delays and possession disputes are handled end to end — from title verification to execution of the final order.",
    points: [
      "Title Verification & Due Diligence",
      "Partition & Possession Suits",
      "RERA Complaints & Builder Disputes",
      "Tenancy & Lease Matters",
      "Sale Deed & Documentation",
    ],
    core: [
      "Title Search & Verification",
      "Partition & Possession Suits",
      "RERA Complaints",
      "Tenancy, Lease & Eviction",
      "Property Transfer & Registration",
      "Land Acquisition & Compensation",
      "Builder & Allottee Disputes",
      "Mutation, Boundary & Demarcation",
      "Property Documentation & Vetting",
    ],
  },
  {
    slug: "corporate-commercial",
    icon: Briefcase,
    title: "Corporate & Commercial",
    short: "Contracts, Arbitration & Recovery",
    desc: "Contracts, company matters, arbitration and recovery suits.",
    blurb:
      "We advise businesses and startups on contracts, compliance and disputes — keeping paperwork tight and litigation off the table wherever possible.",
    points: [
      "Contract Drafting & Vetting",
      "Company, LLP & Startup Advisory",
      "Arbitration & Mediation",
      "Recovery & DRT Matters",
      "Commercial Litigation",
    ],
    core: [
      "Company & LLP Registration",
      "Contract Drafting & Vetting",
      "Arbitration & Conciliation Proceedings",
      "Recovery & DRT Matters",
      "Startup & Compliance Advisory",
      "Mergers, Acquisitions & Due Diligence",
      "Commercial & Shareholder Disputes",
      "IBC & Insolvency Proceedings",
      "Partnership & Family Business Disputes",
    ],
  },
  {
    slug: "civil-litigation",
    icon: Scale,
    title: "Civil Litigation",
    short: "Injunctions, Suits & Execution",
    desc: "Injunctions, declaratory suits, recovery and execution.",
    blurb:
      "Civil disputes move slowly unless the paperwork is right. We draft, plead and argue civil suits with a clear strategy at every hearing.",
    points: [
      "Injunctions & Stay Orders",
      "Declaratory & Specific Relief Suits",
      "Money Recovery Suits",
      "Execution of Decrees & Orders",
      "Appeals & Revisions",
    ],
    core: [
      "Temporary Injunctions & Stay Orders",
      "Declaratory Suits",
      "Specific Performance & Relief Suits",
      "Money Recovery Suits",
      "Execution of Decrees & Orders",
      "Appeals & Revisions",
      "Partition of Ancestral Property",
      "Contempt & Enforcement Proceedings",
      "Suit for Permanent Injunction",
    ],
  },
  {
    slug: "consumer-protection",
    icon: ShieldCheck,
    title: "Consumer Protection",
    short: "Claims Before Consumer Commissions",
    desc: "Complaints before consumer commissions for defective goods & services.",
    blurb:
      "Defective goods, deficient services and unfair trade practices — we file and argue complaints before District, State and National Commissions.",
    points: [
      "Defective Goods Complaints",
      "Deficiency in Service Claims",
      "Insurance & Bank Complaints",
      "E-commerce & Online Order Disputes",
      "Appeals Before Higher Commissions",
    ],
    core: [
      "Defective Goods Claims",
      "Deficiency in Service",
      "Unfair Trade Practices",
      "Insurance Claim Disputes",
      "Banking & Finance Complaints",
      "E-commerce & Online Orders",
      "Builder & Housing Complaints",
      "Appeals to State & National Commissions",
      "Product Liability Claims",
    ],
  },
  {
    slug: "cheque-bounce",
    icon: FileText,
    title: "Cheque Bounce (NI Act)",
    short: "Section 138 Notices & Complaints",
    desc: "Section 138 notices, complaints and defence.",
    blurb:
      "Cheque bounce matters run on strict timelines. We issue notices, file complaints and defend accused parties — on both sides of the table.",
    points: [
      "Legal Notice under Section 138",
      "Complaint Filing & Trial",
      "Quashing of Complaint",
      "Settlement & Compounding",
      "Recovery of Outstanding Dues",
    ],
    core: [
      "Section 138 Legal Notice",
      "Complaint Before the Magistrate",
      "Trial & Cross-Examination",
      "Quashing of Complaint",
      "Settlement & Compounding",
      "Recovery of Outstanding Dues",
      "Defence for the Accused",
      "Appeal & Revision",
      "Negotiable Instrument Disputes",
    ],
  },
  {
    slug: "writs-constitutional",
    icon: Landmark,
    title: "Writs & Constitutional",
    short: "Writ Petitions Before High Courts",
    desc: "Writ petitions before High Courts and the Supreme Court.",
    blurb:
      "When a right is violated or an order is passed without authority, we move writ petitions before the High Courts and the Supreme Court.",
    points: [
      "Writ Petitions under Art. 226 & 32",
      "Service & Employment Matters",
      "Enforcement of Fundamental Rights",
      "Judicial Review of Orders",
      "Public Interest Litigation",
    ],
    core: [
      "Writ Petitions (Art. 226)",
      "Special Leave Petitions (Art. 136)",
      "Service & Employment Matters",
      "Enforcement of Fundamental Rights",
      "Public Interest Litigation",
      "Judicial Review of Administrative Orders",
      "Habeas Corpus & Liberty Petitions",
      "Constitutional Interpretation",
      "Mandamus, Certiorari & Prohibition",
    ],
  },
];

export const STATS = [
  { value: "15+", label: "Years of Practice" },
  { value: "2500+", label: "Cases Handled" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "8+", label: "Practice Areas" },
];
