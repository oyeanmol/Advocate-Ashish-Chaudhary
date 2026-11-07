import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { FIRM, LEGAL_SERVICES } from "@/components/site/data";
import { useConsultationModal } from "@/components/site/ConsultationModal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Urmika Juris & Associates — Chamber 298A Tis Hazari Courts" },
      {
        name: "description",
        content:
          "Connect with Urmika Juris & Associates. Chamber 298A, Western Wing, Tis Hazari Courts, Delhi. Phone: +91 88024 87291. Book a 30-minute consultation.",
      },
      { property: "og:title", content: "Contact Us | Urmika Juris & Associates" },
      {
        property: "og:description",
        content: "Chamber 298A, Western Wing, Tis Hazari Courts, Delhi. Call +91 88024 87291.",
      },
    ],
  }),
  component: ContactPage,
});

const inputClasses =
  "w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm text-[#111827] placeholder-gray-400 outline-none transition focus:border-[#172B54] focus:ring-1 focus:ring-[#172B54]";

function ContactPage() {
  const { openModal } = useConsultationModal();
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobile.trim()) return;
    setSubmitted(true);
  };

  const getWhatsAppEnquiryUrl = () => {
    const text = `Hello Urmika Juris & Associates,
My Name: ${fullName}
Mobile: ${mobile}
Email: ${email || "Not specified"}
Service Required: ${service || "General Consultation"}
Enquiry Details: ${message || "I would like to schedule a 30-minute legal consultation at Tis Hazari Chamber."}`;
    return `https://wa.me/918802487291?text=${encodeURIComponent(text)}`;
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
                    <div className="text-xs font-bold text-[#172B54]">Direct Chamber Telephone</div>
                    <a
                      href={FIRM.phoneHref}
                      className="text-xs text-amber-800 font-semibold hover:underline mt-0.5 block"
                    >
                      {FIRM.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded border border-gray-200 bg-[#FEFBF3] p-4">
                  <Mail className="h-5 w-5 text-[#172B54] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#172B54]">Official Email</div>
                    <a
                      href={FIRM.emailHref}
                      className="text-xs text-amber-800 font-semibold hover:underline mt-0.5 block"
                    >
                      {FIRM.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded border border-gray-200 bg-[#FEFBF3] p-4">
                  <Clock className="h-5 w-5 text-[#172B54] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#172B54]">Chamber Hours</div>
                    <div className="text-xs text-gray-700 mt-0.5">{FIRM.hours}</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp & Call Direct Action Block */}
              <div className="rounded bg-[#172B54] p-6 text-white space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FEC556]">
                  Immediate Legal Connect
                </div>
                <p className="text-xs text-gray-300">
                  For urgent bail hearings or time-sensitive court notices, contact us via WhatsApp
                  or direct phone.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <a
                    href={FIRM.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded bg-[#34A853] py-2.5 px-3 text-xs font-bold text-white shadow hover:brightness-110 transition"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Chat
                  </a>
                  <a
                    href={FIRM.phoneHref}
                    className="flex items-center justify-center gap-2 rounded bg-[#FEC556] py-2.5 px-3 text-xs font-bold text-[#172B54] shadow hover:bg-amber-400 transition"
                  >
                    <Phone className="h-4 w-4" /> Call Chamber
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Request Form */}
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
                    className="text-xs text-[#172B54] font-semibold underline hover:text-amber-800"
                  >
                    View Terms
                  </button>
                </div>

                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded bg-[#F0FDF4] text-[#34A853] mx-auto">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-[#172B54]">
                      Thank You, {fullName}
                    </h4>
                    <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                      We have compiled your enquiry details. For the fastest response, send these
                      details directly to our chamber WhatsApp or call our advocate helpline.
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={getWhatsAppEnquiryUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded bg-[#34A853] px-6 py-3 text-xs font-bold text-white shadow hover:brightness-110 transition"
                      >
                        <MessageCircle className="h-4 w-4" /> Send Enquiry via WhatsApp
                      </a>
                      <a
                        href={FIRM.phoneHref}
                        className="flex items-center gap-2 rounded bg-[#172B54] px-6 py-3 text-xs font-bold text-[#FEC556] shadow hover:bg-[#1f386e] transition"
                      >
                        <Phone className="h-4 w-4" /> Call Chamber Now
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        Brief Summary of Matter
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Briefly describe the court notice, FIR, dispute, or legal assistance required..."
                        className={inputClasses}
                      />
                    </div>

                    <div className="rounded bg-white border border-gray-200 p-3 text-[11px] text-gray-600 flex items-start gap-2">
                      <ShieldCheck className="h-4 w-4 text-[#34A853] shrink-0 mt-0.5" />
                      <span>
                        All communications are confidential under Section 126 of the Evidence Act.
                        Initial consultation is scheduled for up to 30 minutes.
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded bg-[#172B54] py-3.5 text-sm font-bold text-[#FEC556] shadow-md hover:bg-[#1f386e] transition"
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit Consultation Request</span>
                    </button>
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
