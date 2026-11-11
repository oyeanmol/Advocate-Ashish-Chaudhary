import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { FIRM } from "@/components/site/data";
import { ShieldCheck, Lock, EyeOff, FileText, DatabaseZap, UserCheck, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      {
        title:
          "Privacy Policy & DPDP Disclosures | Urmika Juris & Associates — Client Confidentiality",
      },
      {
        name: "description",
        content:
          "Privacy policy, DPDP Act 2023 disclosures, and statutory confidentiality protections under Section 132 of the Bharatiya Sakshya Adhiniyam, 2023 for Urmika Juris & Associates.",
      },
      {
        name: "keywords",
        content:
          "privacy policy Urmika Juris, DPDP Act 2023 notice, Section 132 BSA privilege, legal confidentiality India, client data protection Delhi",
      },
      { property: "og:title", content: "Privacy Policy & Confidentiality | Urmika Juris & Associates" },
      {
        property: "og:description",
        content:
          "Privileged client confidentiality, statutory DPDP Act notice, and stateless data-flow practices of Urmika Juris & Associates.",
      },
      {
        name: "twitter:title",
        content: "Privacy Policy & DPDP Notice | Urmika Juris & Associates",
      },
      {
        name: "twitter:description",
        content:
          "Advocate-client confidentiality safeguards under Section 132 BSA and DPDP Act 2023 compliance.",
      },
    ],
    links: [{ rel: "canonical", href: "https://urmikajuris.com/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Data Protection & Privilege"
        title="Privacy Policy & DPDP Disclosures"
        subtitle="Protecting Your Legal Information, Contact Data, and Statutory Privileged Communications"
      />

      <section className="py-20 md:py-24 bg-white text-[#111827]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
            {/* Core Principle Banner */}
            <div className="rounded-2xl border border-gray-200 bg-[#FEFBF3] p-8 shadow-sm">
              <div className="flex items-center gap-3 text-[#172B54] mb-3">
                <Lock className="h-6 w-6 text-[#FEC556]" />
                <h3 className="font-heading text-lg font-bold">
                  Statutory Advocate-Client Privilege
                </h3>
              </div>
              <p className="text-gray-800">
                At Urmika Juris & Associates, client confidentiality is a non-negotiable professional
                duty codified under Section 132 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly
                Section 126 of the Indian Evidence Act, 1872). All factual briefings, case records,
                pleadings, and sensitive dispute disclosures entrusted to our advocates remain strictly
                privileged under the Advocates Act, 1961.
              </p>
            </div>

            {/* Section 1: Data Fiduciary & Stateless Architecture */}
            <div>
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <DatabaseZap className="h-5 w-5 text-[#FEC556]" />
                1. Data Fiduciary Identity & Stateless Website Architecture
              </h3>
              <p className="mt-2">
                The Data Fiduciary for this website is <strong>Urmika Juris & Associates</strong>,
                headquartered at Chamber 298A, Western Wing, Tis Hazari Courts, Delhi – 110054.
              </p>
              <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50/60 p-4 text-xs text-amber-950">
                <strong>Statutory Architecture Notice:</strong> This website operates on a stateless,
                no-database architecture. Information entered into consultation booking or contact forms
                is not stored in any website server database, CMS, or cloud repository. Form submissions
                are processed entirely client-side to generate an encrypted WhatsApp communication URI (
                <code>wa.me</code>) directed straight to our verified chamber line.
              </div>
            </div>

            {/* Section 2: Personal Data Collected */}
            <div>
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#FEC556]" />
                2. Information Collected & Processing Notice
              </h3>
              <p className="mt-2">
                When you initiate an enquiry or schedule a consultation, we receive only the information
                necessary to assess preliminary forum jurisdiction and communicate with you:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc pl-5 text-gray-600">
                <li>Your full name and mobile/telephone contact number.</li>
                <li>Your email address (if voluntarily provided).</li>
                <li>The relevant practice area or judicial forum (e.g. Criminal, Property, Matrimonial, Corporate).</li>
                <li>Brief, high-level overview notes describing the procedural assistance required.</li>
              </ul>
            </div>

            {/* Section 3: Purposes of Processing & Consultation Terms */}
            <div>
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#FEC556]" />
                3. Purpose of Processing & Consultation Norms
              </h3>
              <p className="mt-2">Information provided is utilized strictly for:</p>
              <ul className="mt-2 space-y-1.5 list-disc pl-5 text-gray-600">
                <li>
                  Scheduling an initial 30-minute structured case evaluation. The firm&apos;s standard
                  advisory rate is ₹4,500 per hour, applicable after the initial 30 minutes in accordance
                  with agreed terms.
                </li>
                <li>Verifying procedural conflicts of interest before formal Vakalatnama execution.</li>
                <li>
                  Direct chamber coordination with Founder Advocate Aashish Choudhary and Senior
                  Advocates Satish Chand, Durga Das, and Krishan Kumar.
                </li>
              </ul>
              <p className="mt-2 font-medium text-gray-800">
                We never monetize, rent, sell, or disclose client contact information to commercial brokers
                or external marketing networks.
              </p>
            </div>

            {/* Section 4: Data Principal Rights under DPDP Act, 2023 */}
            <div>
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-[#FEC556]" />
                4. Data Principal Rights under DPDP Act, 2023
              </h3>
              <p className="mt-2">
                In compliance with the Digital Personal Data Protection Act, 2023, you hold the following rights:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc pl-5 text-gray-600">
                <li>
                  <strong>Right to Access:</strong> You may request a summary of personal data provided to our chamber.
                </li>
                <li>
                  <strong>Right to Correction & Erasure:</strong> You may request correction of inaccurate contact data or deletion of preliminary consultation notes, subject to professional statutory record-keeping requirements under the Advocates Act.
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> You may withdraw consent for communication at any time by notifying our chamber.
                </li>
                <li>
                  <strong>Right to Nominate:</strong> You may nominate an individual to exercise your rights in the event of incapacity or death.
                </li>
              </ul>
            </div>

            {/* Section 5: Automated Enquiry Engine Notice */}
            <div>
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <EyeOff className="h-5 w-5 text-[#FEC556]" />
                5. Website Information Assistant Notice
              </h3>
              <p className="mt-2">
                The enquiry assistant on this website is a deterministic navigation engine designed solely to guide
                visitors toward appropriate practice areas and chamber contact points. It makes zero third-party AI
                model calls and stores zero chat records. Users should not enter confidential Aadhaar numbers,
                sensitive banking records, or detailed FIR drafts into automated chat fields.
              </p>
            </div>

            {/* Section 6: Grievance Redressal Officer */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-[#FEC556]" />
                6. Grievance Redressal & Chamber Contact
              </h3>
              <p className="mt-2 text-xs text-gray-600">
                For any inquiries regarding data protection, statutory rights, or confidentiality, contact the
                Chamber Grievance Point:
              </p>
              <div className="mt-3 rounded-xl border border-gray-200 bg-[#FEFBF3] p-5 text-xs text-gray-800">
                <p className="font-bold text-[#172B54]">Urmika Juris & Associates</p>
                <p className="mt-1">
                  Chamber 298A, Western Wing, Tis Hazari Courts, Delhi – 110054
                </p>
                <p className="mt-1">
                  <strong>Grievance Email:</strong> {FIRM.email} | <strong>Chamber Helpline:</strong> {FIRM.phone}
                </p>
                <p className="mt-1 text-[11px] text-gray-500">
                  Hours: Monday – Saturday, 10:00 AM – 6:00 PM (By Appointment)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
