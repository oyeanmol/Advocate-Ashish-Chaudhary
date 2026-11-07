import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SectionTitle } from "./Layout";
import { FIRM, LEGAL_SERVICES, type LegalService } from "./data";
import { useConsultationModal } from "./ConsultationModal";

export function PracticeCard({ area }: { area: LegalService }) {
  const { openModal } = useConsultationModal();

  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#FEC556] hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF3FA] text-[#172B54]">
        <area.icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-heading text-xl font-bold text-[#172B54]">{area.title}</h3>
      <p className="mt-2 text-xs text-gray-600 line-clamp-2">{area.desc}</p>
      <ul className="mt-5 space-y-2 text-xs text-gray-700">
        {area.points.slice(0, 3).map((pt) => (
          <li key={pt} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FEC556]" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-100">
        <Link
          to="/legal-services/$slug"
          params={{ slug: area.slug }}
          className="text-xs font-bold text-[#172B54] hover:underline"
        >
          View Details
        </Link>
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#172B54] px-4 py-2 text-xs font-semibold text-[#FEC556] shadow-sm hover:bg-[#1f386e]"
        >
          Consult <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

export function PracticeAreasSection({
  eyebrow = "Our Legal Services",
  title = "Our Legal Services",
  subtitle,
  limit,
  showMore = false,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  limit?: number;
  showMore?: boolean;
}) {
  const areas = limit ? LEGAL_SERVICES.slice(0, limit) : LEGAL_SERVICES;
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={eyebrow} title={title} />
        {subtitle && (
          <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center text-gray-600 text-sm">
            {subtitle}
          </p>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <PracticeCard key={area.slug} area={area} />
          ))}
        </div>
        {showMore && (
          <div className="mt-12 text-center">
            <Link
              to="/legal-services"
              className="inline-flex items-center gap-2 rounded-lg bg-[#172B54] px-8 py-3.5 text-xs font-bold text-[#FEC556] shadow hover:bg-[#1f386e] transition"
            >
              Explore All Legal Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function CoreAreasGrid({ area }: { area: LegalService }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {area.core.map((c) => (
        <div
          key={c}
          className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#FEFBF3] px-5 py-4 shadow-sm"
        >
          <ShieldCheck className="h-5 w-5 shrink-0 text-[#FEC556]" />
          <span className="text-xs sm:text-sm font-semibold text-[#172B54]">{c}</span>
        </div>
      ))}
    </div>
  );
}

export function ExploreAreasGrid({ current }: { current: string }) {
  const others = LEGAL_SERVICES.filter((p) => p.slug !== current);
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {others.map((p) => (
        <Link
          key={p.slug}
          to="/legal-services/$slug"
          params={{ slug: p.slug }}
          className="rounded-xl border border-white/10 bg-[#0F1D38] px-4 py-3 text-center text-xs font-semibold text-white transition hover:border-[#FEC556] hover:text-[#FEC556]"
        >
          {p.title}
        </Link>
      ))}
    </div>
  );
}

export function PracticeCta() {
  const { openModal } = useConsultationModal();

  return (
    <section className="bg-[#172B54] py-16 text-white text-center">
      <div className="mx-auto max-w-4xl px-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FEC556]">
          Tis Hazari Courts Chamber 298A
        </span>
        <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-white">
          Speak With Our Advocates About Your Matter
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={openModal}
            className="rounded-lg bg-[#FEC556] px-7 py-3.5 text-xs font-bold text-[#172B54] shadow hover:bg-amber-400 transition"
          >
            Book 30-Minute Consultation
          </button>
          <a
            href={FIRM.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-semibold text-white hover:bg-white/20 transition"
          >
            Call {FIRM.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
