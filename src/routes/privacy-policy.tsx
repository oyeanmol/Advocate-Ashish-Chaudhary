import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { FIRM } from "@/components/site/data";
import { ShieldCheck, Lock, EyeOff, FileText } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Urmika Juris & Associates — Client Confidentiality" },
      {
        name: "description",
        content:
          "Privacy policy and confidentiality protections under Section 126 of the Indian Evidence Act for Urmika Juris & Associates.",
      },
      { property: "og:title", content: "Privacy Policy | Urmika Juris & Associates" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Data Protection"
        title="Privacy Policy & Confidentiality"
        subtitle="Protecting Your Legal Information, Contact Data, and Privileged Communications"
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
                At Urmika Juris & Associates, client confidentiality is both an ethical duty and a
                statutory protection under Section 126 of the Indian Evidence Act 1872. All factual
                briefings, documents, contracts, and dispute details entrusted to our advocates
                remain strictly privileged and confidential.
              </p>
            </div>

            {/* Section 1: Information Collected */}
            <div>
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#FEC556]" />
                1. Information Collected Through the Website
              </h3>
              <p className="mt-2">
                When you submit an inquiry form or contact our chamber, we collect only the
                necessary information required to communicate with you:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc pl-5 text-gray-600">
                <li>Your full name and contact telephone/mobile number.</li>
                <li>Your email address (if provided).</li>
                <li>
                  The category of legal service and brief factual description of your concern.
                </li>
              </ul>
            </div>

            {/* Section 2: Use of Information */}
            <div>
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#FEC556]" />
                2. How Your Information is Used
              </h3>
              <p className="mt-2">Information submitted via this website is used solely to:</p>
              <ul className="mt-2 space-y-1.5 list-disc pl-5 text-gray-600">
                <li>
                  Assess preliminary procedural requirements for scheduling a 30-minute
                  consultation.
                </li>
                <li>Verify potential conflict of interest before accepting formal instructions.</li>
                <li>
                  Facilitate direct communication with Founder Advocate Aashish Choudhary, Satish
                  Chand, Durga Das, or Krishan Kumar.
                </li>
              </ul>
              <p className="mt-2 font-medium text-gray-800">
                We never sell, rent, commercialize, or share client information with third-party
                marketing networks.
              </p>
            </div>

            {/* Section 3: AI Assistant Disclaimer */}
            <div>
              <h3 className="font-heading text-lg font-bold text-[#172B54] flex items-center gap-2">
                <EyeOff className="h-5 w-5 text-[#FEC556]" />
                3. Website AI Legal Assistant
              </h3>
              <p className="mt-2">
                Our website includes an informational legal enquiry assistant. We strongly recommend
                that users do not enter highly sensitive personal identifiers (such as Aadhaar
                numbers or confidential banking passwords) into chat fields. The assistant is
                designed solely to navigate services, consultation norms, and contact routes.
              </p>
            </div>

            {/* Section 4: Contact Information */}
            <div className="border-t border-gray-200 pt-6 text-xs text-gray-500">
              <p>For any privacy or confidentiality questions, please contact:</p>
              <p className="mt-1 font-semibold text-gray-800">
                Urmika Juris & Associates
                <br />
                Chamber 298A, Western Wing, Tis Hazari Courts, Delhi – 110054
                <br />
                Email: {FIRM.email} | Phone: {FIRM.phone}
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
