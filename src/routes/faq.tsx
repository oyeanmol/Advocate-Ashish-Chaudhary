import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { FAQS, FIRM } from "@/components/site/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useConsultationModal } from "@/components/site/ConsultationModal";
import { HelpCircle } from "lucide-react";
import { WhatsAppLogo } from "@/components/site/WhatsAppLogo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Urmika Juris & Associates — Legal Consultation Questions" },
      {
        name: "description",
        content:
          "Answers to frequently asked questions about consultation terms, chamber visits at Tis Hazari Courts, fee transparency, and advocate representation.",
      },
      { property: "og:title", content: "FAQ | Urmika Juris & Associates" },
    ],
    links: [{ rel: "canonical", href: "https://urmikajuris.com/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { openModal } = useConsultationModal();

  return (
    <SiteShell>
      <PageHero
        eyebrow="Help & Information"
        title="Frequently Asked Questions"
        subtitle="Transparent Answers Regarding Consultations, Chamber Appointments, Court Jurisdictions & Professional Fees"
      />

      <section className="py-20 md:py-24 bg-white text-[#111827]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block border-l-2 border-[#FEC556] bg-[#172B54] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#FEC556]">
              General Inquiries
            </div>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-[#172B54]">
              Common Questions Answered
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded bg-[#FEC556]" />
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${idx}`}
                className="rounded border border-gray-200 bg-[#FEFBF3] px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading text-base font-bold text-[#172B54] hover:text-[#B8860B] hover:no-underline py-5">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-4 w-4 text-[#FEC556] shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-gray-700 pb-5 pl-7">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Need Further Clarity Card */}
          <div className="mt-14 rounded bg-[#172B54] p-8 text-white text-center">
            <h3 className="font-heading text-2xl font-bold">Still Have Specific Questions?</h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
              Our advocates are available to guide you on court procedures and case merits during an
              initial 30-minute structured consultation.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={openModal}
                className="rounded bg-[#FEC556] px-6 py-3 text-xs font-bold text-[#172B54] shadow hover:bg-amber-400 transition"
              >
                Book 30-Minute Consultation
              </button>
              <a
                href={FIRM.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded bg-[#34A853] px-5 py-3 text-xs font-bold text-white shadow hover:brightness-110 transition"
              >
                <WhatsAppLogo className="h-4 w-4" /> Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
