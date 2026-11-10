import { useState } from "react";
import {
  ChevronDown,
  Phone,
  Lock,
  CheckCircle2,
  Zap,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import { FIRM } from "./data";
import { useConsultationModal } from "./ConsultationModal";
import { WhatsAppLogo } from "./WhatsAppLogo";

const FAQS_VAKEELSAAB = [
  {
    num: 1,
    q: "What is Online Lawyer Consultation?",
    a: "Online lawyer consultation is a fast and convenient way to seek legal advice and guidance from experienced advocates via phone call, video meeting, or structured messaging without needing to immediately travel to physical court chambers.",
  },
  {
    num: 2,
    q: "How can I get an online lawyer consultation in India?",
    a: "You can book a consultation directly through our website by submitting your matter details, or by calling our chamber line at +91 88024 87291. Our advocates will schedule a 30-minute structured discussion at a time convenient for you.",
  },
  {
    num: 3,
    q: "Can I get legal advice without visiting a law office?",
    a: "Yes. Many preliminary legal matters, bail assessments, agreement vetting, legal notice drafting, and strategy reviews can be conducted completely via phone or secure video consultation with confidentiality protected under Section 132 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 126 Evidence Act).",
  },
  {
    num: 4,
    q: "What types of legal issues can be resolved via online lawyer consultation?",
    a: "Our advocates advise on criminal defense (bail, FIR quashing), property disputes, RERA claims, family & divorce separation, cheque bounce (Sec 138 NI Act), commercial contracts, recovery suits, and consumer complaints.",
  },
  {
    num: 5,
    q: "Can I consult directly with your chamber advocates?",
    a: "Yes. You can consult directly with Founder Advocate Aashish Choudhary and the practicing advocates of our Tis Hazari chamber regarding your matter.",
  },
  {
    num: 6,
    q: "Are online legal consultations valid for court proceedings or documentation?",
    a: "Yes. Legal advisory provided during consultation establishes procedural viability. When formal court filing or physical representation is required, our advocates execute a formal Vakalatnama for physical representation before Tis Hazari, Delhi High Court, or Supreme Court.",
  },
  {
    num: 7,
    q: "What are the benefits of consulting a lawyer online compared to in-person visits?",
    a: "Online consultations save travel time, provide immediate clarity in urgent legal situations, allow private second opinions without social pressure, and provide a clear roadmap before you commit to physical courtroom litigation.",
  },
];

export function FaqWithImmediateHelpSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openModal } = useConsultationModal();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-deep via-navy to-[#0A1428] py-20 md:py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-gold)_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Tag Matching Image 5 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/40 px-4 py-1 text-xs font-semibold text-gold backdrop-blur-sm mb-4">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span>Expert Legal Consultation</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Online Legal Consultation - Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-gold" />
        </div>

        {/* 2-Column Split Matching Image 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 7 Numbered Accordion Questions in Glass Cards */}
          <div className="lg:col-span-8 space-y-3">
            {FAQS_VAKEELSAAB.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-white/10 bg-navy-deep/80 backdrop-blur-md overflow-hidden transition-colors duration-200 hover:border-gold/50 shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 pr-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 border border-gold/40 text-xs font-bold text-gold">
                        {faq.num}
                      </span>
                      <span className="font-heading text-sm sm:text-base font-bold text-white">
                        {faq.q}
                      </span>
                    </div>
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-gold text-navy" : "text-gray-300"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pl-14">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Vibrant Gold Immediate Legal Help Card Matching Image 5 */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="rounded-2xl bg-gold p-7 sm:p-8 text-navy shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div>
                {/* Phone icon in circle */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/40 border border-navy/20 text-navy shadow-md mb-5">
                  <Phone className="h-7 w-7 text-navy" />
                </div>

                <div className="text-center">
                  <h3 className="font-heading text-2xl font-extrabold text-navy leading-tight">
                    Need Immediate Legal Help?
                  </h3>

                  {/* 4 Feature Badges Row Matching Image 5 */}
                  <div className="mt-5 grid grid-cols-4 gap-2">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold shadow-sm">
                        <Lock className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold text-navy mt-1.5 uppercase">
                        Private
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold shadow-sm">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold text-navy mt-1.5 uppercase">
                        Verified
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold shadow-sm">
                        <Zap className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold text-navy mt-1.5 uppercase">
                        Instant
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold shadow-sm">
                        <ClipboardList className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold text-navy mt-1.5 uppercase">
                        Transparent
                      </span>
                    </div>
                  </div>

                  {/* Big Phone Number Display */}
                  <div className="mt-7">
                    <a
                      href={FIRM.phoneHref}
                      className="font-heading text-3xl font-extrabold tracking-tight text-navy hover:scale-105 transition-transform inline-block"
                    >
                      {FIRM.phone}
                    </a>
                    <p className="mt-2 text-xs font-semibold text-navy/90 max-w-xs mx-auto leading-relaxed">
                      Speak directly with our chamber advocates regarding your preliminary legal consultation and court representation.
                    </p>
                  </div>

                  {/* Primary Call Now Button */}
                  <div className="mt-6 space-y-3">
                    <a
                      href={FIRM.phoneHref}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy py-3.5 text-sm font-bold text-white shadow-lg hover:bg-navy-deep transition-colors duration-200 cursor-pointer"
                    >
                      <Phone className="h-4 w-4 text-gold" />
                      <span>Call Now</span>
                    </a>

                    <button
                      type="button"
                      onClick={openModal}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-navy py-3 text-xs font-bold text-navy hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                    >
                      <span>Book 30-Min Structured Review</span>
                    </button>
                  </div>

                  {/* Bottom Line Matching Image 5 */}
                  <div className="mt-6 pt-4 border-t border-navy/20 flex items-center justify-between text-xs text-navy font-bold">
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <span className="h-2 w-2 rounded-full bg-emerald-700 animate-pulse" />
                      <span>Available 10 AM - 7 PM</span>
                    </div>

                    <a
                      href={FIRM.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp px-3.5 py-1 text-[11px] font-bold text-white shadow hover:brightness-110 transition-[filter] duration-200"
                    >
                      <WhatsAppLogo className="h-3.5 w-3.5" />
                      <span>Whatsapp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

