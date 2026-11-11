import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  Edit3,
} from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { FIRM, LEGAL_SERVICES } from "@/components/site/data";
import { useConsultationModal } from "@/components/site/ConsultationModal";
import { WhatsAppLogo } from "@/components/site/WhatsAppLogo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Urmika Juris & Associates — Chamber 298A Tis Hazari Courts" },
      {
        name: "description",
        content:
          "Contact Urmika Juris & Associates at Chamber 298A, Western Wing, Tis Hazari Courts, Delhi. Call +91 88024 87291 or WhatsApp for legal consultation before Supreme Court, High Court & District Courts.",
      },
      {
        name: "keywords",
        content:
          "Contact Urmika Juris, Tis Hazari Court chamber address, Advocate Aashish Choudhary phone, legal consultation Delhi, book lawyer appointment, Delhi lawyer phone number",
      },
      { property: "og:title", content: "Contact Us | Urmika Juris & Associates — Tis Hazari Courts" },
      {
        property: "og:description",
        content:
          "Chamber 298A, Western Wing, Tis Hazari Courts, Delhi – 110054. Direct Phone: +91 88024 87291. Book a structured 30-minute case consultation.",
      },
      {
        name: "twitter:title",
        content: "Contact Us | Urmika Juris & Associates",
      },
      {
        name: "twitter:description",
        content:
          "Chamber 298A Tis Hazari Courts, Delhi. Phone: +91 88024 87291. Legal counsel across Supreme Court, High Courts and District Courts.",
      },
    ],
    links: [{ rel: "canonical", href: "https://urmikajuris.com/contact" }],
  }),
  component: ContactPage,
});

const inputClasses =
  "w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-[#111827] placeholder-gray-400 outline-none transition-colors focus:border-[#172B54] focus:ring-1 focus:ring-[#172B54]";

function ContactPage() {
  const { openModal } = useConsultationModal();
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [handoffActive, setHandoffActive] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const cleanName = fullName.trim();
    const cleanMobile = mobile.trim();
    const digitsOnly = cleanMobile.replace(/\D/g, "");

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

    if (!service) {
      setValidationError("Please select the legal practice area relevant to your enquiry.");
      return;
    }

    if (message.trim().length < 5) {
      setValidationError("Please provide a brief summary of your legal matter (at least 5 characters).");
      return;
    }

    // Build prewritten WhatsApp message using visitor's actual form inputs
    const messageLines = [
      "Hello Urmika Juris & Associates,",
      "",
      "I am submitting a consultation enquiry through your website contact page.",
      "",
      `• Name: ${cleanName}`,
      `• Mobile: ${cleanMobile}`,
      email.trim() ? `• Email: ${email.trim()}` : null,
      `• Legal Service Required: ${service}`,
      `• Matter Summary: ${message.trim()}`,
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
    <SiteShell>
      <PageHero
        eyebrow="Chamber & Enquiries"
        title="Contact Urmika Juris & Associates"
        subtitle="Schedule an In-Person Consultation at Chamber 298A Tis Hazari Courts or Connect Directly via Phone & WhatsApp"
      />

      <section className="py-20 md:py-24 bg-white text-[#111827]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Chamber Details & Direct CTAs */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-block border-l-2 border-[#FEC556] bg-[#172B54] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#FEC556]">
                  Tis Hazari Chamber
                </div>
                <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold text-[#172B54]">
                  Chamber 298A, Western Wing
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Our chamber is located in the central Western Wing of the Tis Hazari Courts
                  complex, conveniently accessible for filing and courtroom hearings across Delhi.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-3">
                <div className="flex items-start gap-3.5 rounded border border-gray-200 bg-[#FEFBF3] p-4">
                  <MapPin className="h-5 w-5 text-[#172B54] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#172B54]">Chamber Address</div>
                    <div className="text-xs text-gray-700 mt-0.5 leading-relaxed">
                      {FIRM.chamber}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded border border-gray-200 bg-[#FEFBF3] p-4">
                  <Phone className="h-5 w-5 text-[#172B54] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#172B54]">Telephone & WhatsApp</div>
                    <div className="text-xs text-gray-700 mt-0.5">
                      <a href={FIRM.phoneHref} className="hover:text-amber-800 font-semibold">
                        {FIRM.phone}
                      </a>{" "}
                      (Direct Chamber Line)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded border border-gray-200 bg-[#FEFBF3] p-4">
                  <Mail className="h-5 w-5 text-[#172B54] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#172B54]">Email Communications</div>
                    <div className="text-xs text-gray-700 mt-0.5">
                      <a href={FIRM.emailHref} className="hover:text-amber-800 font-semibold">
                        {FIRM.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded border border-gray-200 bg-[#FEFBF3] p-4">
                  <Clock className="h-5 w-5 text-[#172B54] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#172B54]">Consultation Timings</div>
                    <div className="text-xs text-gray-700 mt-0.5 leading-relaxed">{FIRM.hours}</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Box */}
              <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
                  <WhatsAppLogo className="h-4 w-4" />
                  <span>Chamber WhatsApp</span>
                </div>
                <p className="mt-2 text-xs text-emerald-950 leading-relaxed">
                  For preliminary scheduling or immediate coordination, you can message our chamber directly.
                </p>
                <a
                  href={FIRM.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded bg-[#34A853] px-4 py-2 text-xs font-bold text-white shadow hover:brightness-110 transition"
                >
                  <WhatsAppLogo className="h-4 w-4" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form with Direct WhatsApp Handoff */}
            <div className="lg:col-span-7">
              <div className="rounded border border-gray-200 bg-[#FEFBF3] p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#172B54]">
                      Legal Consultation Enquiry
                    </h3>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Initial 30-minute structured case review
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={openModal}
                    className="text-xs text-[#172B54] font-semibold underline hover:text-amber-800 cursor-pointer"
                  >
                    View Terms
                  </button>
                </div>

                {handoffActive ? (
                  /* WhatsApp Handoff Information Screen */
                  <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-[#34A853] mx-auto">
                      <WhatsAppLogo className="h-8 w-8" />
                    </div>

                    <div>
                      <h4 className="font-heading text-xl font-bold text-[#172B54]">
                        WhatsApp Enquiry Prepared
                      </h4>
                      <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50/70 p-3.5 text-xs text-emerald-950 font-medium max-w-md mx-auto leading-relaxed shadow-sm">
                        "WhatsApp is opening with your enquiry details. Please review the message and press Send to share it with the chamber."
                      </div>
                    </div>

                    {/* Summary of Prepared Details */}
                    <div className="rounded-lg border border-gray-200 bg-white p-4 text-xs text-left text-gray-700 max-w-md mx-auto space-y-1.5 shadow-sm">
                      <div className="font-bold text-[#172B54] border-b border-gray-100 pb-1">
                        Prepared Enquiry Details:
                      </div>
                      <div>• <strong>Name:</strong> {fullName}</div>
                      <div>• <strong>Mobile:</strong> {mobile}</div>
                      {email && <div>• <strong>Email:</strong> {email}</div>}
                      <div>• <strong>Service:</strong> {service}</div>
                      <div>• <strong>Summary:</strong> {message}</div>
                    </div>

                    {/* Fallback Action Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={preparedWhatsAppUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded bg-[#34A853] px-6 py-3 text-xs font-bold text-white shadow hover:brightness-110 transition cursor-pointer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Open WhatsApp Again</span>
                      </a>

                      <a
                        href={FIRM.phoneHref}
                        className="inline-flex items-center gap-2 rounded border border-gray-300 bg-white px-5 py-3 text-xs font-bold text-[#172B54] hover:bg-gray-50 transition cursor-pointer"
                      >
                        <Phone className="h-4 w-4 text-[#172B54]" />
                        <span>Call Chamber Directly: {FIRM.phone}</span>
                      </a>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => setHandoffActive(false)}
                        className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#172B54] cursor-pointer"
                      >
                        <Edit3 className="h-3.5 w-3.5" />
                        <span>Edit Enquiry Details</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Validation Error Banner */}
                    {validationError && (
                      <div className="rounded border border-red-200 bg-red-50 p-3 text-xs text-red-800 flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                        <div>{validationError}</div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your Full Name"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="+91 98765 43210"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Email Address{" "}
                          <span className="text-xs text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Legal Service Required <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className={inputClasses}
                        >
                          <option value="">Select Legal Practice Area</option>
                          {LEGAL_SERVICES.map((s) => (
                            <option key={s.slug} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Brief Summary of Matter <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Briefly describe the court notice, FIR, dispute, or legal assistance required..."
                        className={inputClasses}
                      />
                    </div>

                    <div className="rounded bg-white border border-gray-200 p-3 text-[11px] text-gray-600 flex items-start gap-2">
                      <ShieldCheck className="h-4 w-4 text-[#34A853] shrink-0 mt-0.5" />
                      <span>
                        Privileged communications protected under Section 132 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 126 of the Evidence Act).
                        Initial consultation is scheduled for up to 30 minutes; standard advisory rate is ₹4,500/hr applying thereafter under agreed terms.
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded bg-[#34A853] py-3.5 text-sm font-bold text-white shadow-md hover:brightness-110 transition-colors cursor-pointer"
                    >
                      <WhatsAppLogo className="h-4 w-4" />
                      <span>Continue to WhatsApp</span>
                    </button>
                    <p className="text-center text-[11px] text-gray-500 mt-1">
                      Direct Chamber Helpline: <strong>+91 88024 87291</strong>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
