import { useState, useEffect, type ReactNode } from "react";
import {
  X,
  ShieldCheck,
  Clock,
  Phone,
  MessageCircle,
  MapPin,
  AlertCircle,
  ExternalLink,
  Edit3,
} from "lucide-react";
import { FIRM, LEGAL_SERVICES } from "./data";
import urmikaOriginalLogo from "@/assets/urmika-original-logo.jpg";
import { ConsultationModalContext, useConsultationModal } from "@/hooks/use-consultation-modal";
import { WhatsAppLogo } from "./WhatsAppLogo";

export { useConsultationModal };

export function ConsultationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [handoffActive, setHandoffActive] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string>("");

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("criminal-lawyer");
  const [mode, setMode] = useState<"Phone Call" | "Chamber Visit" | "Video Conference">("Chamber Visit");
  const [notes, setNotes] = useState("");
  const [agreed, setAgreed] = useState(true);

  const openModal = () => {
    setIsOpen(true);
    setHandoffActive(false);
    setValidationError(null);
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

  const selectedServiceObj = LEGAL_SERVICES.find((s) => s.slug === service);
  const selectedServiceTitle =
    selectedServiceObj?.title ??
    (LEGAL_SERVICES[0]?.title ?? "General Legal Consultation");

  const handleWhatsAppHandoff = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const digitsOnly = cleanPhone.replace(/\D/g, "");

    if (cleanName.length < 2) {
      setValidationError("Please enter your full name (minimum 2 characters).");
      return;
    }

    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      setValidationError("Please enter a valid mobile number (10 to 15 digits).");
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setValidationError("Please enter a valid email address or leave it blank.");
      return;
    }

    if (!agreed) {
      setValidationError("Please acknowledge the consultation terms under BCI Rule 36.");
      return;
    }

    // Build prewritten WhatsApp message using visitor's actual form inputs
    const messageLines = [
      "Hello Urmika Juris & Associates,",
      "",
      "I would like to request an initial legal consultation at your Tis Hazari chamber.",
      "",
      `• Name: ${cleanName}`,
      `• Phone: ${cleanPhone}`,
      email.trim() ? `• Email: ${email.trim()}` : null,
      `• Legal Service Area: ${selectedServiceTitle}`,
      `• Preferred Consultation Mode: ${mode}`,
      notes.trim() ? `• Brief Matter Notes: ${notes.trim()}` : null,
    ].filter(Boolean) as string[];

    const whatsappUrl = `https://wa.me/918802487291?text=${encodeURIComponent(messageLines.join("\n"))}`;
    setPreparedWhatsAppUrl(whatsappUrl);

    // Open WhatsApp in a new tab/window
    try {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Browser popup blocker fallback is rendered in the handoff UI
    }

    setHandoffActive(true);
  };

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
          <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-[#FEC556]/40 bg-[#0F1D38] text-white shadow-2xl transition-transform duration-300">
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close consultation modal"
              className="absolute top-4 right-4 z-20 rounded-md bg-black/40 p-2 text-gray-300 hover:bg-[#172B54] hover:text-white transition-colors duration-200 cursor-pointer border border-white/10"
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
                        under Section 132 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 126 of the Evidence Act).
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="h-4 w-4 text-[#FEC556] shrink-0 mt-0.5" />
                      <span>
                        <strong>30-Minute Structured Advisory:</strong> Initial evaluation of merits & procedure.
                        Advisory rate: ₹4,500/hr, applying after the initial 30 minutes under agreed terms.
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
                      <WhatsAppLogo className="h-3.5 w-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Consultation Booking Form / WhatsApp Handoff */}
              <div className="lg:col-span-7 bg-white text-[#111827] p-6 sm:p-8 flex flex-col justify-between">
                {!handoffActive ? (
                  <form onSubmit={handleWhatsAppHandoff} className="space-y-4">
                    <div>
                      <div className="inline-block border-l-2 border-[#172B54] bg-[#FEFBF3] px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-[#172B54] mb-2">
                        Case Appointment Request
                      </div>
                      <h4 className="font-heading text-xl font-extrabold text-[#172B54]">
                        Schedule Your Discussion
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Fill in your matter details to prepare your direct chamber WhatsApp enquiry.
                      </p>
                    </div>

                    {/* Validation Error Banner */}
                    {validationError && (
                      <div className="rounded border border-red-200 bg-red-50 p-3 text-xs text-red-800 flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                        <div>{validationError}</div>
                      </div>
                    )}

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
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 outline-none focus:border-[#172B54] focus:ring-1 focus:ring-[#172B54]"
                        />
                      </div>
                    </div>

                    {/* Email (Optional) & Practice Area */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Email Address{" "}
                          <span className="text-[10px] text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
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

                    {/* Consultation Mode Selection */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Preferred Consultation Mode
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(["Chamber Visit", "Phone Call", "Video Conference"] as const).map(
                          (m) => (
                            <button
                              key={m}
                              type="button"
                              onClick={() => setMode(m)}
                              className={`py-2 px-1 text-center rounded text-xs font-semibold border transition cursor-pointer ${
                                mode === m
                                  ? "bg-[#172B54] text-[#FEC556] border-[#172B54] shadow-sm"
                                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                              }`}
                            >
                              {m}
                            </button>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Brief Query Notes */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Brief Case Summary / Matter Overview{" "}
                        <span className="text-[10px] text-gray-400 font-normal">
                          (Confidential)
                        </span>
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Briefly describe your legal concern, court forum, or key questions for the advocates..."
                        className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 outline-none focus:border-[#172B54] focus:ring-1 focus:ring-[#172B54]"
                      />
                    </div>

                    {/* BCI Rule 36 Checkbox */}
                    <label className="flex items-start gap-2 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 h-3.5 w-3.5 rounded border-gray-300 text-[#172B54] accent-[#172B54]"
                      />
                      <span className="text-[11px] text-gray-600 select-none leading-tight">
                        I acknowledge the consultation terms (initial 30-min evaluation; standard advisory rate ₹4,500/hr applying thereafter under agreed terms) compliant with BCI Rule 36.
                      </span>
                    </label>

                    {/* Primary Button: Continue to WhatsApp */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={!agreed}
                        className="w-full inline-flex items-center justify-center gap-2 rounded bg-[#34A853] py-3.5 text-xs font-bold text-white shadow-md hover:brightness-110 transition-colors duration-200 disabled:opacity-50 cursor-pointer"
                      >
                        <WhatsAppLogo className="h-4 w-4" />
                        <span>Continue to WhatsApp</span>
                      </button>
                      <p className="mt-2 text-center text-[11px] text-gray-500">
                        Direct connection to Chamber Helpline: <strong>+91 88024 87291</strong>
                      </p>
                    </div>
                  </form>
                ) : (
                  /* WhatsApp Handoff Information Screen */
                  <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-[#34A853]">
                      <WhatsAppLogo className="h-8 w-8" />
                    </div>

                    <div>
                      <h4 className="font-heading text-xl sm:text-2xl font-extrabold text-[#172B54]">
                        WhatsApp Enquiry Prepared
                      </h4>
                      <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50/70 p-3.5 text-xs text-emerald-950 font-medium max-w-md mx-auto leading-relaxed shadow-sm">
                        "WhatsApp is opening with your enquiry details. Please review the message and press Send to share it with the chamber."
                      </div>
                    </div>

                    {/* Summary of Prepared Details */}
                    <div className="rounded-lg border border-gray-200 bg-[#FEFBF3] p-4 text-xs text-left text-gray-700 max-w-md mx-auto space-y-1.5">
                      <div className="font-bold text-[#172B54] border-b border-gray-200 pb-1">
                        Prepared Consultation Details:
                      </div>
                      <div>• <strong>Name:</strong> {name}</div>
                      <div>• <strong>Phone:</strong> {phone}</div>
                      {email && <div>• <strong>Email:</strong> {email}</div>}
                      <div>• <strong>Legal Service:</strong> {selectedServiceTitle}</div>
                      <div>• <strong>Mode:</strong> {mode}</div>
                      {notes && <div>• <strong>Notes:</strong> {notes}</div>}
                    </div>

                    {/* Fallback CTAs for browser/app compatibility */}
                    <div className="pt-2 flex flex-col gap-2.5 max-w-md mx-auto">
                      <a
                        href={preparedWhatsAppUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded bg-[#34A853] py-3 text-xs font-bold text-white shadow hover:brightness-110 transition cursor-pointer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Open WhatsApp Again</span>
                      </a>

                      <a
                        href={FIRM.phoneHref}
                        className="inline-flex items-center justify-center gap-2 rounded border border-gray-300 bg-white py-2.5 text-xs font-bold text-[#172B54] hover:bg-gray-50 transition cursor-pointer"
                      >
                        <Phone className="h-4 w-4 text-[#172B54]" />
                        <span>Call Chamber Directly: {FIRM.phone}</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setHandoffActive(false)}
                        className="inline-flex items-center justify-center gap-1.5 text-xs text-gray-600 hover:text-[#172B54] pt-1 cursor-pointer"
                      >
                        <Edit3 className="h-3.5 w-3.5" />
                        <span>Edit Enquiry Details</span>
                      </button>
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
