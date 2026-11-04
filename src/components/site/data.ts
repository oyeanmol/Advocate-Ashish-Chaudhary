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

export const PRACTICE: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Gavel, title: "Criminal Law", desc: "Bail, trial defence, FIR quashing, appeals and white-collar matters." },
  { icon: Users, title: "Family & Divorce", desc: "Divorce, child custody, maintenance, domestic violence and mediation." },
  { icon: Home, title: "Property & Real Estate", desc: "Title disputes, partition, RERA, tenancy and documentation." },
  { icon: Briefcase, title: "Corporate & Commercial", desc: "Contracts, company matters, arbitration and recovery suits." },
  { icon: Scale, title: "Civil Litigation", desc: "Injunctions, declaratory suits, recovery and execution." },
  { icon: ShieldCheck, title: "Consumer Protection", desc: "Complaints before consumer commissions for defective goods & services." },
  { icon: FileText, title: "Cheque Bounce (NI Act)", desc: "Section 138 notices, complaints and defence." },
  { icon: Landmark, title: "Writs & Constitutional", desc: "Writ petitions before High Courts and the Supreme Court." },
];

export const STATS = [
  { value: "15+", label: "Years of Practice" },
  { value: "2500+", label: "Cases Handled" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "8+", label: "Practice Areas" },
];
