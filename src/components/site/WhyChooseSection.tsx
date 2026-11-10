import { Shield, Users, Handshake, Landmark, PhoneCall, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const REASONS = [
  {
    icon: Shield,
    title: "Stay Protected & Confidential Through Every Conversation",
    desc: "Your privacy matters. Discuss your sensitive legal concerns freely under Section 132 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 126 of the Evidence Act) — your confidential communications, documents, and case facts remain privileged.",
  },
  {
    icon: Users,
    title: "Hire An Experienced Advocate Or Get A Second Opinion",
    desc: "Consult our senior advocacy bench across criminal, property, civil, and family law. Compare procedural perspectives and verify existing advice before committing to litigation.",
  },
  {
    icon: Handshake,
    title: "Objective Evaluation of Statutory Merits",
    desc: "We assess the legal standing, documentation, and procedural merits of your matter before advising on formal litigation, helping you avoid unnecessary proceedings.",
  },
  {
    icon: Landmark,
    title: "Permanent Tis Hazari Chamber & Delhi Court Network",
    desc: "Headquartered at Chamber 298A, Western Wing, Tis Hazari Courts, with active appearance and filing privileges across Delhi High Court and the Supreme Court of India.",
  },
  {
    icon: PhoneCall,
    title: "Direct Access to Practicing Trial Advocates",
    desc: "Speak directly with Founder Advocate Aashish Choudhary and our courtroom advocates rather than non-legal intermediaries or automated call center operators.",
  },
  {
    icon: CheckCircle2,
    title: "Truly Transparent & BCI Compliant",
    desc: "Clear 30-minute structured consultation terms with zero hidden fees and rigorous adherence to Bar Council of India Rule 36 standards of legal etiquette.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 md:py-24 bg-white text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block border-l-2 border-navy bg-surface-cream px-3.5 py-1 text-xs font-semibold tracking-wide text-navy">
            Why Urmika Juris
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Why Choose Urmika Juris & Associates for Legal Consultation & Legal Advice?
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-gold" />
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Urmika Juris & Associates provides an accessible, disciplined legal consultation
            platform in Delhi NCR. Clients benefit from consulting experienced trial advocates to
            evaluate strategies and secure reliable, honest legal counsel.
          </p>
        </div>

        {/* 6 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="group rounded-xl border border-gray-200/90 bg-surface-cream p-7 shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-1.5 motion-reduce:transform-none hover:border-gold hover:bg-white hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold group-hover:bg-navy-hover transition-colors mb-5 shadow-sm">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy leading-snug">
                  {r.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">{r.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-bold text-gold-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span>Verified Legal Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

