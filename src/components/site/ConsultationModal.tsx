import { useState, useEffect, type ReactNode } from "react";
import {
  X,
  ShieldCheck,
  Clock,
  Phone,
  MessageCircle,
  Scale,
  CheckCircle2,
  MapPin,
  Calendar,
  Send,
  ArrowRight,
} from "lucide-react";
import { FIRM, LEGAL_SERVICES } from "./data";
import urmikaOriginalLogo from "@/assets/urmika-original-logo.jpg";
import { ConsultationModalContext, useConsultationModal } from "@/hooks/use-consultation-modal";

export { useConsultationModal };

export function ConsultationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("criminal-lawyer");
  const [mode, setMode] = useState("Tis Hazari Chamber Visit");
  const [notes, setNotes] = useState("");
  const [agreed, setAgreed] = useState(true);

  const openModal = () => {
    setIsOpen(true);
    setSubmitted(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const selectedServiceObj = LEGAL_SERVICES.find((s) => s.slug === service) || LEGAL_SERVICES[0];

  // Dynamic WhatsApp link with user's details prefilled
  const encodedQuery = encodeURIComponent(
    `Hello Urmika Juris & Associates,\n\nI would like to book a 30-minute legal consultation.\n\n• Name: ${name || "Client"}\n• Phone: ${phone || "Not provided"}\n• Legal Domain: ${selectedServiceObj.title}\n• Preferred Mode: ${mode}\n• Brief Concern: ${notes || "Legal inquiry"}`,
  );
  const dynamicWhatsAppUrl = `https://wa.me/918802487291?text=${encodedQuery}`;

  return (
    <ConsultationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-modal-title"
          className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-[#FEC556]/40 bg-[#0F1D38] text-white shadow-2xl transition-all duration-300">
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close consultation modal"
              className="absolute top-4 right-4 z-20 rounded-md bg-black/40 p-2 text-gray-300 hover:bg-[#172B54] hover:text-white transition cursor-pointer border border-white/10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
              {/* Left Column: Brand Identity, Tis Hazari Details, & Consultation Guarantee */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#172B54] via-[#0F1D38] to-[#0A1428] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                <div>
                  {/* Brand Crest */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <img
                      src={urmikaOriginalLogo}
                      alt="Urmika Juris and Associates"
                      className="h-14 w-14 rounded-lg object-cover border-2 border-[#FEC556]/50 shadow-md shrink-0"
                    />
                    <div>
                      <div className="font-heading text-lg font-extrabold tracking-wide text-[#FEC556]">
                        URMIKA JURIS
                      </div>
                      <div className="text-[10px] uppercase font-semibold tracking-[0.2em] text-gray-300">
                        & Associates • Advocates
                      </div>
                    </div>
                  </div>

                  <h3
                    id="consultation-modal-title"
                    className="font-heading text-2xl font-extrabold text-white leading-snug"
                  >
                    Book a Legal Consultation
                  </h3>
                  <p className="mt-1 font-serif text-sm text-[#FEC556]">
                    Initial 30-Minute Structured Case Review
                  </p>

                  <p className="mt-4 text-xs text-gray-300 leading-relaxed">
                    Consult with Founder Advocate{" "}
                    <strong className="text-white">Aashish Choudhary</strong> and our senior counsel
                    bench regarding your courtroom defense, property dispute, civil recovery, or
                    matrimonial brief.
                  </p>

                  {/* Core Assurances */}
                  <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-xs text-gray-300">
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="h-4 w-4 text-[#34A853] shrink-0 mt-0.5" />
                      <span>
                        <strong>Statutory Privilege:</strong> Confidential disclosures protected
                        under Section 126 of the Evidence Act.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="h-4 w-4 text-[#FEC556] shrink-0 mt-0.5" />
                      <span>
                        <strong>30-Minute Protocol:</strong> Objective evaluation of procedural
                        merits, jurisdiction, and limitation periods.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 text-[#FEC556] shrink-0 mt-0.5" />
                      <span>
                        <strong>Permanent Chamber:</strong> Chamber 298A, Western Wing, Tis Hazari
                        Courts, Delhi.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Instant Helpline Bar */}
                <div className="mt-8 pt-5 border-t border-white/10">
                  <div className="text-[11px] text-gray-400 mb-1">Direct Chamber Helpline:</div>
                  <div className="flex items-center gap-3">
                    <a
                      href={FIRM.phoneHref}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#FEC556] transition"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#FEC556]" />
                      <span>{FIRM.phone}</span>
                    </a>
                    <span className="text-white/20">|</span>
                    <a
                      href={FIRM.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#34A853] hover:brightness-110 transition"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Trust Consultation Booking Form */}
              <div className="lg:col-span-7 bg-white text-[#111827] p-6 sm:p-8 flex flex-col justify-between">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <div className="inline-block border-l-2 border-[#172B54] bg-[#FEFBF3] px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-[#172B54] mb-2">
                        Case Appointment Request
                      </div>
                      <h4 className="font-heading text-xl font-extrabold text-[#172B54]">
                        Schedule Your Discussion
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Please provide preliminary matter details for conflict checks.
                      </p>
                    </div>

                    {/* Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Advait Sharma"
                          className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 outline-none focus:border-[#172B54] focus:ring-1 focus:ring-[#172B54]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Contact Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 98110 XXXXX"
                          className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 outline-none focus:border-[#172B54] focus:ring-1 focus:ring-[#172B54]"
                        />
                      </div>
                    </div>

                    {/* Email & Legal Domain */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. name@example.com"
                          className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 outline-none focus:border-[#172B54] focus:ring-1 focus:ring-[#172B54]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Legal Domain <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 outline-none focus:border-[#172B54] focus:ring-1 focus:ring-[#172B54]"
                        >
                          {LEGAL_SERVICES.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.emoji} {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Consultation Mode */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Preferred Consultation Mode
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          "Tis Hazari Chamber Visit",
                          "Telephonic Review",
                          "Virtual Video Session",
                        ].map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setMode(m)}
                            className={`rounded border px-2.5 py-2 text-[11px] font-semibold text-center transition cursor-pointer ${
                              mode === m
                                ? "border-[#172B54] bg-[#172B54] text-[#FEC556] shadow-sm"
                                : "border-gray-200 bg-[#FEFBF3] text-gray-700 hover:border-gray-400"
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Brief Query Notes */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Brief Summary of Matter / Query
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Briefly mention the nature of dispute, FIR number, court jurisdiction, or document verification required..."
                        className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 outline-none focus:border-[#172B54] focus:ring-1 focus:ring-[#172B54]"
                      />
                    </div>

                    {/* Norms & Agreement Checkbox */}
                    <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 h-3.5 w-3.5 rounded border-gray-300 text-[#172B54] accent-[#172B54]"
                      />
                      <span className="text-[11px] text-gray-600 select-none leading-tight">
                        I acknowledge the 30-minute structured consultation terms under BCI Rule 36.
                        Subsequent court representation governed by agreed professional norms.
                      </span>
                    </label>

                    {/* Form Submit & Quick Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        disabled={!agreed}
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded bg-[#172B54] py-3 text-xs font-bold text-[#FEC556] shadow-md hover:bg-[#1f386e] transition-all disabled:opacity-50 cursor-pointer"
                      >
                        <span>Confirm & Request Consultation</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      <a
                        href={dynamicWhatsAppUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded bg-[#34A853] px-4 py-3 text-xs font-bold text-white shadow-md hover:brightness-110 transition cursor-pointer"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>WhatsApp Now</span>
                      </a>
                    </div>
                  </form>
                ) : (
                  /* Success Confirmation Screen */
                  <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-[#34A853]">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>

                    <div>
                      <h4 className="font-heading text-2xl font-extrabold text-[#172B54]">
                        Consultation Request Received
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-gray-900">{name}</strong>. Your inquiry
                        for <strong className="text-gray-900">{selectedServiceObj.title}</strong>{" "}
                        has been logged with our chamber registry.
                      </p>
                    </div>

                    <div className="rounded-lg border border-amber-200 bg-[#FEFBF3] p-4 text-xs text-left text-gray-700 max-w-md mx-auto space-y-1.5">
                      <div className="font-bold text-[#172B54] border-b border-amber-200/60 pb-1">
                        Next Procedural Steps:
                      </div>
                      <div>• Mode: {mode}</div>
                      <div>• Contact Number: {phone}</div>
                      <div>
                        • Chamber Officer will connect within 30 minutes during working hours.
                      </div>
                      <div>
                        • Urgent inquiries: Please proceed to WhatsApp with details pre-filled.
                      </div>
                    </div>

                    <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={dynamicWhatsAppUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded bg-[#34A853] px-6 py-3 text-xs font-bold text-white shadow hover:brightness-110 transition"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Open Details in WhatsApp</span>
                      </a>
                      <a
                        href={FIRM.phoneHref}
                        className="inline-flex items-center gap-2 rounded border border-gray-300 bg-white px-5 py-3 text-xs font-bold text-[#172B54] hover:bg-gray-50 transition"
                      >
                        <Phone className="h-4 w-4 text-[#172B54]" />
                        <span>Direct Call: {FIRM.phone}</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </ConsultationModalContext.Provider>
  );
}
