import { ShieldCheck, Gavel, Scale, ArrowRight } from "lucide-react";
import { useConsultationModal } from "./ConsultationModal";

export function PromiseSection() {
  const { openModal } = useConsultationModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-[#0A1428] py-20 md:py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-gold)_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block border-l-2 border-gold bg-black/40 px-3.5 py-1 text-xs font-semibold tracking-wide text-gold mb-3">
            Our Foundation
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Urmika Juris Promise: A Hybrid Path to Justice
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-gold" />
          <p className="mt-5 text-base sm:text-lg text-amber-100/90 font-serif leading-relaxed italic">
            "Litigation strategy is grounded in factual diligence, statutory analysis, and disciplined courtroom advocacy."
          </p>
          <p className="mt-3 text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Preliminary legal advisory provides essential clarity on jurisdiction, merits, and statutory limitation before matters proceed to physical courtroom filings across Delhi courts.
          </p>
        </div>

        {/* 3 Pillars Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-white/15 bg-white/5 p-8 backdrop-blur-md hover:border-gold/60 transition-colors duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold text-navy mb-6 shadow-md">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              1. 100% Confidential Consultation
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
              Explore your legal options privately. Under Section 132 of the Bharatiya Sakshya
              Adhiniyam, 2023 (formerly Section 126 of the Evidence Act), privileged professional
              communications remain strictly safeguarded before formal engagement.
            </p>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/5 p-8 backdrop-blur-md hover:border-gold/60 transition-colors duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold text-navy mb-6 shadow-md">
              <Gavel className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              2. Coordinated Courtroom Representation
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
              When court litigation is required, our advocates coordinate physical filings, bail applications, and oral arguments before Tis
              Hazari and Delhi benches.
            </p>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/5 p-8 backdrop-blur-md hover:border-gold/60 transition-colors duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold text-navy mb-6 shadow-md">
              <Scale className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              3. Transparent Terms & Ethical Advocacy
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
              No hidden fees, no unrealistic outcome promises. We evaluate statutory merits
              honestly, provide realistic case timelines, and execute our briefs with procedural
              discipline.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-2.5 rounded bg-gold px-8 py-4 text-xs font-bold text-navy shadow-lg hover:bg-amber-400 transition-colors duration-200 cursor-pointer"
          >
            <span>Book Initial 30-Minute Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

