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
} from "lucide-react";
import { FIRM } from "./data";
import { useConsultationModal } from "./ConsultationModal";

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
      <div className="absolute inset-0 bg-[radial-gradient(#FEC556_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              How Urmika Juris Works
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded bg-[#FEC556]" />
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              Get expert online lawyer consultation in a few easy steps - a secure, efficient, and
              transparent process.
            </p>
          </div>
        )}

        {/* 2-Column Split Matching VakeelSaab Image 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual Globe & Process Selector */}
          <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-[#0F1D38]/90 p-8 flex flex-col justify-between backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#FEC556]/10 blur-3xl pointer-events-none" />

            <div>
              {/* Scales over Globe Graphic */}
              <div className="relative mx-auto h-52 w-52 rounded-full border border-white/10 bg-[#172B54]/60 p-4 flex items-center justify-center shadow-inner mb-8">
                <Globe className="h-44 w-44 text-white/15 absolute stroke-1 animate-pulse" />
                <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-[#0F1D38] border border-[#FEC556]/40 shadow-xl">
                  <Scale className="h-20 w-20 text-[#FEC556]" />
                </div>
              </div>

              <div className="text-center">
                <div className="text-xs uppercase font-bold tracking-widest text-gray-300 mb-3">
                  Learn about our process via
                </div>

                {/* Tabs */}
                <div className="flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("phone")}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                      activeTab === "phone"
                        ? "bg-[#FEC556] text-[#172B54] shadow-md"
                        : "border border-white/20 bg-white/5 text-gray-300 hover:text-white"
                    }`}
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Phone Call</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("chamber")}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                      activeTab === "chamber"
                        ? "bg-[#FEC556] text-[#172B54] shadow-md"
                        : "border border-white/20 bg-white/5 text-gray-300 hover:text-white"
                    }`}
                  >
                    <span>Tis Hazari Chamber</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <span className="inline-block rounded-full bg-black/40 border border-[#FEC556]/30 px-4 py-1 text-[10px] font-bold tracking-widest text-[#FEC556] uppercase">
                AT A GLANCE
              </span>
            </div>
          </div>

          {/* Right Column: 4 Amber/Yellow Cards Roadmap Grid */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="mb-6">
              <div className="text-xs uppercase font-extrabold tracking-widest text-[#FEC556]">
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
              <div className="rounded-2xl bg-[#FEC556] p-6 text-[#172B54] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#172B54]/20 bg-white/40 text-[#172B54]">
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-[#172B54] px-3 py-1 text-[10px] font-extrabold tracking-wider text-[#FEC556] uppercase">
                      01 STEP 1
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-extrabold leading-snug">
                    Call Our Helpline
                  </h4>
                  <p className="mt-2 text-xs font-medium text-[#172B54]/90 leading-relaxed">
                    Dial {FIRM.phone} to start your legal consultation journey directly with our
                    chamber team.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-[#FEC556] p-6 text-[#172B54] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#172B54]/20 bg-white/40 text-[#172B54]">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-[#172B54] px-3 py-1 text-[10px] font-extrabold tracking-wider text-[#FEC556] uppercase">
                      02 STEP 2
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-extrabold leading-snug">
                    Confidential Discussion
                  </h4>
                  <p className="mt-2 text-xs font-medium text-[#172B54]/90 leading-relaxed">
                    Our advocates will ask about your legal issue, court forum, documents, and
                    timeline with strict privilege.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl bg-[#FEC556] p-6 text-[#172B54] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#172B54]/20 bg-white/40 text-[#172B54]">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-[#172B54] px-3 py-1 text-[10px] font-extrabold tracking-wider text-[#FEC556] uppercase">
                      03 STEP 3
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-extrabold leading-snug">
                    Lawyer Selection
                  </h4>
                  <p className="mt-2 text-xs font-medium text-[#172B54]/90 leading-relaxed">
                    Based on your inputs, we will select and assign the most suitable courtroom
                    specialist for your case.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="rounded-2xl bg-[#FEC556] p-6 text-[#172B54] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#172B54]/20 bg-white/40 text-[#172B54]">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-[#172B54] px-3 py-1 text-[10px] font-extrabold tracking-wider text-[#FEC556] uppercase">
                      04 STEP 4
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-extrabold leading-snug">
                    Court Representation
                  </h4>
                  <p className="mt-2 text-xs font-medium text-[#172B54]/90 leading-relaxed">
                    Execute formal Vakalatnama for physical appearances across Tis Hazari, Delhi
                    High Court, or Supreme Court.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row Action */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <span className="text-xs text-gray-300">
                Chamber 298A, Western Wing, Tis Hazari Courts, Delhi – 110054
              </span>
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded bg-[#FEC556] px-6 py-2.5 text-xs font-bold text-[#172B54] hover:bg-amber-400 transition cursor-pointer"
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
