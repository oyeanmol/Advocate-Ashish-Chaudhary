import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, ShieldCheck, ChevronRight, ArrowRight, Landmark } from "lucide-react";
import { SiteShell, SectionTitle } from "@/components/site/Layout";
import { FIRM, LEGAL_SERVICES, findLegalService } from "@/components/site/data";
import { useConsultationModal } from "@/components/site/ConsultationModal";

export const Route = createFileRoute("/legal-services/$slug")({
  loader: ({ params }) => {
    const service = findLegalService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = findLegalService(params.slug);
    const title = service
      ? `${service.emoji} ${service.title} Advocates | Urmika Juris & Associates — Tis Hazari, Delhi`
      : "Legal Service | Urmika Juris & Associates";
    const desc = service
      ? `${service.short}. Practicing at Tis Hazari Courts and Delhi High Court. Initial 30-minute consultation.`
      : "Legal counsel by Urmika Juris & Associates.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: LegalServiceDetailPage,
});

function LegalServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = findLegalService(slug);
  const { openModal } = useConsultationModal();

  if (!service) return null;

  const others = LEGAL_SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <SiteShell>
      {/* Service Hero Fold */}
      <section className="relative overflow-hidden bg-[#172B54] py-16 sm:py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D38] via-[#172B54] to-[#1F3A70] opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(#FEC556_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-300 mb-6">
            <Link to="/" className="hover:text-[#FEC556] transition">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <Link to="/legal-services" className="hover:text-[#FEC556] transition">
              Our Legal Services
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <span className="text-[#FEC556] font-semibold flex items-center gap-1.5">
              <span>{service.emoji}</span>
              <span>{service.title}</span>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 border-l-2 border-[#FEC556] bg-black/40 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#FEC556]">
                <span>{service.emoji}</span>
                <span>{service.category}</span>
              </div>
              <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
                <span className="text-4xl sm:text-5xl shrink-0">{service.emoji}</span>
                <span>{service.title}</span>
              </h1>
              <p className="mt-3 font-serif text-xl sm:text-2xl text-amber-100">{service.short}</p>
              <p className="mt-4 text-base text-gray-200 leading-relaxed max-w-2xl">
                {service.blurb}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="rounded bg-[#FEC556] px-7 py-3.5 text-sm font-bold text-[#172B54] shadow-lg hover:bg-amber-400 transition active:scale-95 cursor-pointer"
                >
                  Book 30-Minute Consultation
                </button>
                <a
                  href={FIRM.phoneHref}
                  className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition"
                >
                  <Phone className="h-4 w-4 text-[#FEC556]" />
                  <span>Call {FIRM.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick Service Summary Card with Emoji */}
            <div className="w-full lg:w-80 rounded-xl border border-white/15 bg-[#0F1D38]/85 p-6 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#FEC556] text-3xl shadow-md shrink-0">
                  <span>{service.emoji}</span>
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#FEC556]">Chamber 298A</div>
                  <div className="text-xs text-gray-300">Tis Hazari Courts, Delhi</div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2 text-xs text-gray-300">
                <div>
                  <span className="font-semibold text-white">Governing Law:</span>
                  <div className="text-[11px] text-gray-400 mt-0.5">{service.statutoryBasis}</div>
                </div>
                <div className="border-t border-white/10 pt-2">
                  <span className="font-semibold text-white">Consultation Protocol:</span>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    30-minute structured case review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Areas Covered Grid */}
      <section className="py-20 bg-white text-[#111827]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Scope of Advocacy"
            title={`${service.title} — Key Practice Sub-Domains`}
            subtitle="Specific legal matters and applications handled by our advocates before trial and appellate forums."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.core.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-[#FEFBF3] p-4 shadow-sm hover:border-[#FEC556] transition"
              >
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#FEC556] mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-[#172B54]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Court Forums & Jurisdictions */}
      <section className="py-16 bg-[#EDF3FA] text-[#111827] border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="inline-block border-l-2 border-[#172B54] bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#172B54]">
              Jurisdictional Benches
            </div>
            <h3 className="mt-2 font-heading text-2xl font-bold text-[#172B54]">
              Forums Where We Appear for {service.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {service.forums.map((forum) => (
              <div
                key={forum}
                className="flex items-center gap-3 rounded-lg bg-white border border-gray-200 p-4 shadow-sm"
              >
                <Landmark className="h-5 w-5 text-[#172B54] shrink-0" />
                <span className="text-xs font-bold text-[#172B54]">{forum}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Handle Your Matter */}
      <section className="py-20 bg-white text-[#111827]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="Our Procedure"
            title="How We Handle Your Case"
            subtitle="A disciplined, stepwise progression designed to provide clear legal direction without unnecessary delays."
          />

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Preliminary Fact & Document Scrutiny",
                desc: "Thorough confidential examination of dispute facts, agreements, summons, or FIR copies under advocate-client privilege.",
              },
              {
                num: "02",
                title: "30-Minute Structured Advisory Session",
                desc: "Dedicated consultation at Chamber 298A Tis Hazari Courts or via tele-conference outlining procedural avenues, legal merits, and fee norms.",
              },
              {
                num: "03",
                title: "Drafting, Filing & Courtroom Advocacy",
                desc: "Precise drafting of pleadings, interim applications, and hearing-by-hearing advocacy before the competent judicial forum.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-4 rounded-lg border border-gray-200 p-6 bg-[#FEFBF3] shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#172B54] text-[#FEC556] font-bold text-sm">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-[#172B54]">{step.title}</h4>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other Services Grid */}
      <section className="py-16 bg-[#172B54] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FEC556]">
                Explore
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Other Legal Services
              </h3>
            </div>
            <Link
              to="/legal-services"
              className="text-xs font-semibold text-[#FEC556] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/legal-services/$slug"
                params={{ slug: other.slug }}
                className="rounded-lg border border-white/10 bg-[#0F1D38] p-4 hover:border-[#FEC556]/50 hover:bg-[#1f386e] transition text-center"
              >
                <other.icon className="h-5 w-5 text-[#FEC556] mx-auto mb-2" />
                <div className="text-xs font-semibold text-white">{other.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
