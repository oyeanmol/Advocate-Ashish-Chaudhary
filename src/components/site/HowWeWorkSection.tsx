import { useState } from "react";
import {
  HelpCircle,
  MessageSquare,
  UserCheck,
  CreditCard,
  Phone,
  Scale,
  Globe,
  ArrowRight,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { FIRM } from "./data";
import { useConsultationModal } from "./ConsultationModal";
import { WhatsAppLogo } from "./WhatsAppLogo";

export function HowWeWorkSection({
  showHeading = true,
  className = "",
}: {
  showHeading?: boolean;
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState<"phone" | "chamber">("phone");
  const { openModal } = useConsultationModal();

  return (
    <section className={`py-20 md:py-24 bg-[#0A1428] text-white relative overflow-hidden ${className}`}>
      {/* Subtle judicial grid / dot background */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-gold)_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              How Urmika Juris Works
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded bg-gold" />
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              Direct legal consultation with Tis Hazari advocates followed by disciplined courtroom
              representation across Delhi courts.
            </p>
          </div>
        )}

        {/* 2-Column Split Matching VakeelSaab Image 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual Globe & Process Selector (Richly Detailed) */}
          <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-navy-deep/95 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

            <div>
              {/* Scales over Globe Graphic */}
              <div className="relative mx-auto h-40 w-40 rounded-full border border-white/10 bg-navy/60 p-3 flex items-center justify-center shadow-inner mb-5">
                <Globe className="h-36 w-36 text-white/15 absolute stroke-1 animate-pulse" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-navy-deep border border-gold/40 shadow-xl">
                  <Scale className="h-14 w-14 text-gold" />
                </div>
              </div>

              <div className="text-center">
                <div className="text-[11px] uppercase font-bold tracking-widest text-gray-300 mb-2.5">
                  Learn about our process via
                </div>

                {/* Tabs */}
                <div className="flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("phone")}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition-colors duration-200 cursor-pointer ${
                      activeTab === "phone"
                        ? "bg-gold text-navy shadow-md"
                        : "border border-white/20 bg-white/5 text-gray-300 hover:text-white"
                    }`}
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Phone Call</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("chamber")}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition-colors duration-200 cursor-pointer ${
                      activeTab === "chamber"
                        ? "bg-gold text-navy shadow-md"
                        : "border border-white/20 bg-white/5 text-gray-300 hover:text-white"
                    }`}
                  >
                    <span>Tis Hazari Chamber</span>
                  </button>
                </div>
              </div>

              {/* At a Glance Chamber Summary Points */}
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-left space-y-2.5">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[10px] font-bold tracking-widest text-gold uppercase">
                    AT A GLANCE
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Chamber
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-gray-200">
                  <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Tis Hazari Headquarters:</span>
                    <p className="text-[11px] text-gray-300">Chamber 298A, Western Wing, Delhi - 110054</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-gray-200">
                  <Clock className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">30-Min Initial Review:</span>
                    <p className="text-[11px] text-gray-300">Merits, statutory limitation & court jurisdiction</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-gray-200">
                  <ShieldCheck className="h-4 w-4 text-whatsapp shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Section 126 Privilege:</span>
                    <p className="text-[11px] text-gray-300">100% confidential disclosures under Evidence Act</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href={FIRM.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp py-2.5 text-xs font-bold text-white shadow hover:brightness-110 transition-[filter] duration-200 cursor-pointer"
              >
                <WhatsAppLogo className="h-4 w-4" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={FIRM.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 py-2 text-xs font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-colors duration-200"
              >
                <Phone className="h-3.5 w-3.5 text-gold" />
                <span>Call Chamber: {FIRM.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Amber/Yellow Cards Roadmap Grid */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="mb-6">
              <div className="text-xs uppercase font-extrabold tracking-widest text-gold">
                LEARN ABOUT OUR PROCESS VIA
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Your Legal Journey
              </h3>
              <div className="text-xs text-gray-400 mt-0.5">Roadmap</div>
            </div>

            {/* 4 Yellow Cards in 2x2 Grid Matching VakeelSaab */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="rounded-2xl bg-gold p-6 text-navy shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 motion-reduce:transform-none motion-reduce:transition-none flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 bg-white/40 text-navy">
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-navy px-3 py-1 text-[10px] font-extrabold tracking-wider text-gold uppercase">
                      01 STEP 1
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-extrabold leading-snug">
                    Call Our Helpline
                  </h4>
                  <p className="mt-2 text-xs font-medium text-navy/90 leading-relaxed">
                    Dial {FIRM.phone} to start your legal consultation journey directly with our
                    chamber team.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-gold p-6 text-navy shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 motion-reduce:transform-none motion-reduce:transition-none flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 bg-white/40 text-navy">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-navy px-3 py-1 text-[10px] font-extrabold tracking-wider text-gold uppercase">
                      02 STEP 2
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-extrabold leading-snug">
                    Confidential Discussion
                  </h4>
                  <p className="mt-2 text-xs font-medium text-navy/90 leading-relaxed">
                    Our advocates will ask about your legal issue, court forum, documents, and
                    timeline with strict privilege.
                  </p>
                </div>
              </div>

              {/* Card 3: Chamber Case Evaluation */}
              <div className="rounded-2xl bg-gold p-6 text-navy shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 motion-reduce:transform-none motion-reduce:transition-none flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 bg-white/40 text-navy">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-navy px-3 py-1 text-[10px] font-extrabold tracking-wider text-gold uppercase">
                      03 STEP 3
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-extrabold leading-snug">
                    Chamber Case Evaluation
                  </h4>
                  <p className="mt-2 text-xs font-medium text-navy/90 leading-relaxed">
                    Our advocates examine your case records, limitation periods, and court jurisdiction
                    to advise on statutory merits and procedural remedies.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="rounded-2xl bg-gold p-6 text-navy shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 motion-reduce:transform-none motion-reduce:transition-none flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 bg-white/40 text-navy">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-navy px-3 py-1 text-[10px] font-extrabold tracking-wider text-gold uppercase">
                      04 STEP 4
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-extrabold leading-snug">
                    Court Representation
                  </h4>
                  <p className="mt-2 text-xs font-medium text-navy/90 leading-relaxed">
                    Execute formal Vakalatnama for physical appearances across Tis Hazari, Delhi
                    High Court, or Supreme Court.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row Action */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <span className="text-xs text-gray-300">
                Chamber 298A, Western Wing, Tis Hazari Courts, Delhi - 110054
              </span>
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded bg-gold px-6 py-2.5 text-xs font-bold text-navy hover:bg-amber-400 transition-colors duration-200 cursor-pointer"
              >
                <span>Start Legal Journey</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
