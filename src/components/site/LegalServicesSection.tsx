import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { LEGAL_SERVICES, type LegalService } from "./data";
import { useConsultationModal } from "./ConsultationModal";

const CATEGORIES = [
  "All Services",
  "Criminal Defense",
  "Property & Real Estate",
  "Family & Matrimonial",
  "Civil Litigation",
  "Corporate & Commercial",
  "Banking & Financial",
  "Consumer Protection",
] as const;

export function LegalServiceCard({ service }: { service: LegalService }) {
  const { openModal } = useConsultationModal();

  return (
    <div className="group flex flex-col justify-between rounded-xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 motion-reduce:transform-none hover:border-gold hover:shadow-xl">
      <div>
        {/* Header with Exact Emoji and Sharp Category Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-ice text-2xl border border-navy/10 shadow-sm group-hover:scale-110 motion-reduce:transform-none group-hover:bg-navy transition-[transform,background-color] duration-200">
            <span role="img" aria-label={service.title}>
              {service.emoji}
            </span>
          </div>
          <span className="border-l-2 border-navy bg-surface-cream px-2.5 py-1 text-[10.5px] font-bold tracking-wide text-navy">
            {service.category}
          </span>
        </div>

        {/* Title & Short */}
        <h3 className="font-heading text-xl font-bold text-navy">
          {service.title}
        </h3>
        <p className="mt-1 text-xs font-semibold text-gold-dark">{service.short}</p>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">{service.desc}</p>

        {/* Core Points */}
        <div className="mt-5 border-t border-gray-100 pt-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
            Key Focus Areas
          </div>
          <ul className="space-y-1.5">
            {service.points.slice(0, 3).map((pt) => (
              <li key={pt} className="flex items-start gap-2 text-xs text-gray-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                <span className="line-clamp-1">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Row */}
      <div className="mt-7 border-t border-gray-100 pt-5 flex items-center justify-between gap-2">
        <Link
          to="/legal-services/$slug"
          params={{ slug: service.slug }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-gold-dark transition-colors"
        >
          <span>Service Details</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center gap-1.5 rounded bg-navy px-4 py-2 text-xs font-semibold text-gold shadow-sm hover:bg-navy-hover transition-colors duration-200 cursor-pointer"
        >
          <span>Consult</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

export function LegalServicesSection({
  limit,
  showCategoryFilters = true,
  showViewAll = false,
  className = "",
}: {
  limit?: number;
  showCategoryFilters?: boolean;
  showViewAll?: boolean;
  className?: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Services");

  const filtered = LEGAL_SERVICES.filter((s) => {
    if (selectedCategory === "All Services") return true;
    return s.category === selectedCategory;
  });

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className={`py-20 md:py-24 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block border-l-2 border-navy bg-surface-cream px-3.5 py-1 text-xs font-semibold tracking-wide text-navy">
            Litigation & Advisory Domains
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Legal Services
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-gold" />
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Focused, courtroom-tested advocacy across civil, criminal, matrimonial, corporate, and
            constitutional forums in Delhi.
          </p>
        </div>

        {/* Category Filter Buttons (Architectural Tabs — No Pill Capsule Tags) */}
        {showCategoryFilters && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded px-4 py-2 text-xs font-bold tracking-wide transition-[color,background-color,border-color,box-shadow] duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-navy text-gold shadow-md border border-navy"
                    : "bg-surface-cream text-gray-700 border border-gray-200 hover:border-navy/40 hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayed.map((service) => (
            <LegalServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* View All CTA */}
        {showViewAll && (
          <div className="mt-14 text-center">
            <Link
              to="/legal-services"
              className="inline-flex items-center gap-2 rounded bg-navy px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-navy-hover transition-[background-color,box-shadow] duration-200"
            >
              <span>Explore All 19 Legal Services</span>
              <ArrowRight className="h-4 w-4 text-gold" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
