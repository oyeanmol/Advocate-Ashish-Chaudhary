import { Phone, MessageCircle, Clock, ShieldCheck, Video, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionTitle } from "./Layout";
import { FIRM } from "./data";
import g1 from "@/assets/glimpse-1.jpg.asset.json";
import g2 from "@/assets/glimpse-2.jpg.asset.json";
import g3 from "@/assets/glimpse-3.jpg.asset.json";
import g4 from "@/assets/glimpse-4.jpg.asset.json";
import g5 from "@/assets/glimpse-5.jpg.asset.json";
import g6 from "@/assets/glimpse-6.jpg.asset.json";
import g7 from "@/assets/glimpse-7.jpg.asset.json";
import g8 from "@/assets/glimpse-8.jpg.asset.json";

export function ConsultationSection() {
  const points = [
    { icon: Clock, title: "Quick Response", desc: "Get a call back within 24 hours." },
    { icon: ShieldCheck, title: "100% Confidential", desc: "Your matter stays private." },
    { icon: Video, title: "Online & In-Person", desc: "Consult by phone, video or at chamber." },
    { icon: Users, title: "Experienced Team", desc: "Advocates across multiple courts." },
  ];
  return (
    <section className="bg-navy-deep py-24 text-navy-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Expert Legal Consultation</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Get the Right Legal Advice, at the Right Time</h2>
          <p className="mt-5 text-navy-foreground/75">
            Whether it is a criminal case, family dispute, property matter or business issue — speak directly with our advocates and understand your rights, options and the best way forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={FIRM.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-primary-foreground shadow-gold">
              <Phone className="h-4 w-4" /> Book Consultation
            </a>
            <a href={FIRM.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 font-semibold hover:bg-navy">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gold/25 bg-navy p-6">
              <p.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-4 text-lg">{p.title}</h3>
              <p className="mt-1 text-sm text-navy-foreground/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TEAM = [
  { img: g8.url, title: "Litigation Team", caption: "Our advocates at District Court, Gurugram" },
  { img: g6.url, title: "Court Practice Team", caption: "Representing clients at Family & District Courts" },
  { img: g7.url, title: "Associates & Counsel", caption: "Senior counsel with our associate advocates" },
  { img: g4.url, title: "Advocates in Practice", caption: "Legal practitioners appearing before the High Court" },
];

export function TeamSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle eyebrow="Legal Practitioners" title="Our Team of Advocates" />
        <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center text-muted-foreground">
          A dedicated team of advocates working together under the guidance of Advocate {FIRM.advocate}, bringing expertise across courts and practice areas.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((t) => (
            <div key={t.title} className="group overflow-hidden rounded-2xl border bg-card shadow-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={t.img} alt={t.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="border-t-2 border-gold p-5">
                <h3 className="text-lg text-navy">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GLIMPSES = [
  { img: g3.url, label: "Allahabad High Court", span: "md:col-span-2 md:row-span-2" },
  { img: g2.url, label: "At the Court Premises", span: "" },
  { img: g5.url, label: "Supreme Court Corridors", span: "" },
  { img: g1.url, label: "With Senior Colleagues", span: "" },
  { img: g4.url, label: "High Court Appearance", span: "" },
];

export function GlimpsesSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle eyebrow="Moments" title="Professional Glimpses" />
        <div className="grid auto-rows-[240px] gap-4 md:grid-cols-4">
          {GLIMPSES.map((g) => (
            <figure key={g.label} className={`group relative overflow-hidden rounded-2xl shadow-card ${g.span}`}>
              <img src={g.img} alt={g.label} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-4 font-serif text-lg text-navy-foreground">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "How can I book a consultation?", a: "You can call us, message on WhatsApp, or fill the form on the Contact page. Our team will get back to you within 24 hours." },
  { q: "Do you offer online consultations?", a: "Yes. We provide consultations over phone and video call for clients anywhere in India, as well as in-person meetings at our chamber." },
  { q: "Which courts do you appear in?", a: "Our advocates appear before District & Sessions Courts, Family Courts, High Courts (including Allahabad High Court), the Supreme Court of India, consumer commissions and tribunals." },
  { q: "Will my information be kept confidential?", a: "Absolutely. Advocate–client communication is privileged, and every detail you share is kept strictly confidential." },
  { q: "What documents should I bring for the first meeting?", a: "Bring any notices, FIR copies, agreements, property papers, court orders or correspondence related to your matter. If unsure, call us and we will guide you." },
  { q: "How are your fees decided?", a: "Fees depend on the nature and complexity of the matter. We discuss charges transparently upfront — there are no hidden costs." },
];

export function FaqSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`f${i}`} className="rounded-xl border bg-card px-5 shadow-card">
              <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
