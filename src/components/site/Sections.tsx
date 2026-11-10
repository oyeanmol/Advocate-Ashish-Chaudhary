import { Phone, MessageCircle, Clock, ShieldCheck, Video, Users, Scale } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTitle } from "./Layout";
import { FIRM, FAQS } from "./data";
import { useConsultationModal } from "./ConsultationModal";

export function ConsultationSection() {
  const { openModal } = useConsultationModal();

  const points = [
    {
      icon: Clock,
      title: "Structured 30-Min Review",
      desc: "Focused assessment of facts and documents.",
    },
    {
      icon: ShieldCheck,
      title: "Privileged & Confidential",
      desc: "Protected under Section 132 BSA 2023 (formerly Sec 126 IEA).",
    },
    {
      icon: Video,
      title: "Chamber & Remote Connect",
      desc: "In-person at Tis Hazari or via phone call.",
    },
    {
      icon: Users,
      title: "Dedicated Advocates",
      desc: "Practicing before Tis Hazari & Delhi High Court.",
    },
  ];

  return (
    <section className="bg-[#172B54] py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#FEC556]">
            Legal Consultation
          </span>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl font-extrabold text-white">
            Get Clear, Truthful Legal Advice at the Right Time
          </h2>
          <p className="mt-4 text-sm text-gray-200 leading-relaxed">
            Whether facing criminal proceedings, matrimonial dispute, property conflict, or
            commercial breach — consult directly with advocates Satish Chand, Durga Das, and Krishan
            Kumar at Tis Hazari Courts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center gap-2 rounded-lg bg-[#FEC556] px-6 py-3.5 text-xs font-bold text-[#172B54] shadow hover:bg-amber-400 transition"
            >
              <Phone className="h-4 w-4" /> Book 30-Minute Consultation
            </button>
            <a
              href={FIRM.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-semibold text-white hover:bg-white/20 transition"
            >
              <MessageCircle className="h-4 w-4" /> Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-white/10 bg-[#0F1D38] p-5 shadow-sm"
            >
              <p.icon className="h-7 w-7 text-[#FEC556]" />
              <h3 className="mt-3 font-heading text-sm font-bold text-white">{p.title}</h3>
              <p className="mt-1 text-xs text-gray-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Verified Court Forums Overview (Replaces random TeamSection galleries).
 */
export function TeamSection() {
  return (
    <section className="py-20 bg-white text-[#111827]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Judicial Advocates"
          title="Advocates of Urmika Juris & Associates"
          subtitle="Practicing across District Courts, High Courts across India, and the Supreme Court of India."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {FIRM.advocates.map((adv) => (
            <div
              key={adv.name}
              className="rounded-xl border border-gray-200 bg-[#FEFBF3] p-5 text-center shadow-sm hover:border-[#172B54] transition-colors"
            >
              <Scale className="h-7 w-7 text-[#FEC556] mx-auto mb-2.5" />
              <h3 className="font-heading text-base font-bold text-[#172B54]">Adv. {adv.name}</h3>
              <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded mt-1.5">
                {adv.role === "Founder & Principal Advocate" ? "Principal" : adv.role}
              </div>
              <div className="text-[11px] text-gray-600 mt-2 leading-relaxed">{adv.forum}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * GlimpsesSection placeholder maintaining backwards compatibility without stock galleries.
 */
export function GlimpsesSection() {
  return null;
}

export function FaqSection() {
  return (
    <section className="py-20 bg-white text-[#111827]">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.slice(0, 6).map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`f${i}`}
              className="rounded-xl border bg-card px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left font-heading text-sm font-bold text-[#172B54] hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs text-gray-600 pb-4 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
