import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Phone, ShieldCheck, Landmark } from "lucide-react";
import { SiteShell, SectionTitle } from "@/components/site/Layout";
import { FIRM, LEGAL_SERVICES, findLegalService } from "@/components/site/data";
import { useConsultationModal } from "@/components/site/ConsultationModal";

export const Route = createFileRoute("/practice-areas/$slug")({
  loader: ({ params }) => {
    const service = findLegalService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = findLegalService(params.slug);
    const title = service
      ? `${service.emoji} ${service.title} Advocates | Urmika Juris & Associates`
      : "Legal Service | Urmika Juris & Associates";
    const desc = service
      ? `${service.short}. Legal representation at Tis Hazari Courts, Delhi.`
      : "Legal services by Urmika Juris & Associates.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
      ],
    };
  },
  component: PracticeAreaDetailPage,
});

function PracticeAreaDetailPage() {
  const { slug } = Route.useParams();
  const service = findLegalService(slug);
  const { openModal } = useConsultationModal();

  if (!service) return null;

  return (
    <SiteShell>
      <section className="bg-[#172B54] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/legal-services"
            className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-[#FEC556] transition mb-4"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Our Legal Services
          </Link>

          <span className="block text-xs uppercase font-bold tracking-widest text-[#FEC556]">
            {service.category}
          </span>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white flex items-center gap-3">
            <span className="text-4xl sm:text-5xl">{service.emoji}</span>
            <span>{service.title}</span>
          </h1>
          <p className="mt-3 font-serif text-xl text-amber-100">{service.short}</p>
          <p className="mt-4 max-w-2xl text-sm text-gray-200 leading-relaxed">{service.blurb}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={openModal}
              className="rounded-lg bg-[#FEC556] px-6 py-3 text-xs font-bold text-[#172B54] shadow hover:bg-amber-400 transition"
            >
              Book 30-Minute Consultation
            </button>
            <a
              href={FIRM.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold text-white hover:bg-white/20 transition"
            >
              <Phone className="h-3.5 w-3.5 text-[#FEC556]" />
              Call {FIRM.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-[#111827]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Core Practice Areas"
            title={`${service.title} — Key Sub-Domains`}
            subtitle="Advocacy and advisory areas covered before Tis Hazari and Delhi judicial benches."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.core.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-[#FEFBF3] p-4 shadow-sm"
              >
                <ShieldCheck className="h-5 w-5 text-[#FEC556] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-[#172B54]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
