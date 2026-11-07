import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useRef, useEffect, type ReactNode } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ChevronDown,
  ShieldAlert,
  ArrowRight,
  Scale,
} from "lucide-react";
import urmikaOriginalLogo from "@/assets/urmika-original-logo.jpg";
import { FIRM, NAV, LEGAL_SERVICES } from "./data";
import { ConsultationModalProvider, useConsultationModal } from "./ConsultationModal";
import { AiChatbot } from "./AiChatbot";

export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const isLarge = size === "large";
  return (
    <Link to="/" className="flex items-center gap-3 group shrink-0">
      <img
        src={urmikaOriginalLogo}
        alt="Urmika Juris and Associates official emblem"
        className={`${
          isLarge ? "h-14 w-14" : "h-11 w-11"
        } rounded-md object-cover border border-[#FEC556]/40 shadow-sm transition-transform duration-200 group-hover:scale-105`}
      />
      <div className="leading-tight">
        <div className="font-heading text-base font-extrabold tracking-wide text-[#FEC556] group-hover:text-amber-300 transition-colors">
          URMIKA JURIS
        </div>
        <div className="text-[10px] uppercase font-semibold tracking-[0.22em] text-gray-300">
          & Associates • Advocates
        </div>
      </div>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const { openModal } = useConsultationModal();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
    setServicesDropdown(false);
  }, [currentPath]);

  return (
    <header className="sticky top-0 z-50 bg-[#172B54] border-b border-[#FEC556]/20 shadow-lg">
      {/* Top Chamber Coordinates Bar */}
      <div className="hidden sm:block border-b border-white/10 bg-[#0F1D38] px-4 py-1.5 text-xs text-gray-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-none bg-[#FEC556]" />
            <span className="tracking-wide">
              Chamber 298A, Western Wing, Tis Hazari Courts, Delhi – 110054
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={FIRM.emailHref}
              className="hover:text-[#FEC556] transition-colors flex items-center gap-1.5"
            >
              <Mail className="h-3 w-3 text-[#FEC556]" /> {FIRM.email}
            </a>
            <span className="text-white/20">|</span>
            <a
              href={FIRM.phoneHref}
              className="hover:text-[#FEC556] transition-colors flex items-center gap-1.5 font-semibold text-white"
            >
              <Phone className="h-3 w-3 text-[#FEC556]" /> {FIRM.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          {NAV.map((n) => {
            const isActive = n.to === "/" ? currentPath === "/" : currentPath.startsWith(n.to);

            if (n.to === "/legal-services") {
              return (
                <div key={n.to} className="relative" ref={dropdownRef}>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setServicesDropdown(!servicesDropdown)}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#FEC556]/15 text-[#FEC556] border border-[#FEC556]/40 shadow-sm"
                          : "text-white hover:text-[#FEC556] hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <span>{n.label}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          servicesDropdown ? "rotate-180 text-[#FEC556]" : "text-gray-300"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Mega-style Services Dropdown */}
                  {servicesDropdown && (
                    <div className="absolute left-0 mt-2 w-80 rounded-lg border border-white/10 bg-[#172B54] p-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                      <div className="flex items-center justify-between px-2.5 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#FEC556] border-b border-white/10">
                        <span>Our 19 Practice Areas</span>
                        <Link
                          to="/legal-services"
                          onClick={() => setServicesDropdown(false)}
                          className="text-[10px] text-gray-300 hover:text-white underline underline-offset-2"
                        >
                          View All
                        </Link>
                      </div>
                      <div className="py-2 max-h-[380px] overflow-y-auto space-y-0.5 pr-1">
                        {LEGAL_SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            to="/legal-services/$slug"
                            params={{ slug: s.slug }}
                            onClick={() => setServicesDropdown(false)}
                            className="flex items-center gap-2.5 rounded px-2.5 py-1.5 text-xs text-gray-200 hover:bg-white/10 hover:text-[#FEC556] transition-colors"
                          >
                            <span className="text-sm shrink-0">{s.emoji}</span>
                            <span className="truncate font-medium">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-white/10 pt-2 px-1">
                        <Link
                          to="/legal-services"
                          onClick={() => setServicesDropdown(false)}
                          className="flex items-center justify-between rounded bg-[#0F1D38] px-3 py-2 text-xs font-semibold text-[#FEC556] hover:bg-[#203a70] transition-colors"
                        >
                          <span>Explore Full Legal Directory</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={n.to}
                to={n.to}
                className={`rounded-md px-3.5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-[#FEC556]/15 text-[#FEC556] border border-[#FEC556]/40 shadow-sm"
                    : "text-white hover:text-[#FEC556] hover:bg-white/5 border border-transparent"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Clean, Pixel-Perfect Desktop Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={FIRM.phoneHref}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-gray-200 hover:text-[#FEC556] hover:border-[#FEC556]/40 hover:bg-white/10 transition-all duration-200"
          >
            <Phone className="h-3.5 w-3.5 text-[#FEC556]" />
            <span>{FIRM.phone}</span>
          </a>

          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FEC556] px-5 py-2 text-xs font-bold text-[#172B54] shadow-md hover:bg-amber-400 hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="rounded-md p-2 text-white hover:bg-white/10 lg:hidden border border-white/15"
        >
          {open ? <X className="h-6 w-6 text-[#FEC556]" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {open && (
        <div className="border-t border-white/10 bg-[#0F1D38] px-4 py-5 lg:hidden animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            {NAV.map((n) => {
              const isActive = n.to === "/" ? currentPath === "/" : currentPath.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded px-3.5 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#FEC556]/15 text-[#FEC556] border-l-4 border-[#FEC556]"
                      : "text-gray-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-5 border-t border-white/10 pt-5 space-y-2.5">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openModal();
              }}
              className="w-full rounded bg-[#FEC556] py-3 text-center text-sm font-bold text-[#172B54] shadow-md hover:bg-amber-400 cursor-pointer"
            >
              Book 30-Minute Consultation
            </button>
            <a
              href={FIRM.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded border border-white/20 bg-white/5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-[#FEC556]" />
              Call {FIRM.phone}
            </a>
            <a
              href={FIRM.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded bg-[#34A853] py-2.5 text-sm font-semibold text-white hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-5 border-t border-white/10 pt-3 text-xs text-gray-400">
            <p className="flex items-start gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#FEC556] shrink-0 mt-0.5" />
              <span>Ch. 298A, Western Wing, Tis Hazari Courts, Delhi – 110054</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { openModal } = useConsultationModal();

  return (
    <footer className="bg-[#172B54] text-white border-t border-white/10">
      {/* Pre-footer Consultation Banner */}
      <div className="border-b border-white/10 bg-[#0F1D38] py-10 px-4">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="border-l-2 border-[#FEC556] pl-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FEC556]">
                Tis Hazari Courts & Delhi NCR
              </span>
              <h3 className="mt-1 font-heading text-2xl md:text-3xl font-extrabold text-white">
                Need Professional Legal Counsel?
              </h3>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Schedule an initial 30-minute structured case review with our advocates.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={openModal}
              className="rounded bg-[#FEC556] px-6 py-3 text-sm font-bold text-[#172B54] shadow-md hover:bg-amber-400 transition"
            >
              Book 30-Min Consultation
            </button>
            <a
              href={FIRM.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded bg-[#34A853] px-5 py-3 text-sm font-bold text-white shadow-md hover:brightness-110 transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 4-Column Footer Link Architecture */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Chamber */}
          <div>
            <Logo />
            <p className="mt-4 text-xs leading-relaxed text-gray-300">
              Urmika Juris & Associates provides strategic, ethical, and dedicated legal advocacy
              across Tis Hazari Courts, Delhi High Court, and appellate forums in Delhi.
            </p>
            <div className="mt-5 space-y-1.5 text-xs text-gray-300">
              <div className="font-semibold text-[#FEC556]">Advocates:</div>
              {FIRM.advocates.map((adv) => (
                <div key={adv.name} className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#FEC556]" />
                  <span>
                    {adv.name} ({adv.designation})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Our Legal Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#FEC556]">
              Our Legal Services
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-gray-300">
              {LEGAL_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/legal-services/$slug"
                    params={{ slug: s.slug }}
                    className="hover:text-[#FEC556] transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#FEC556]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-gray-300">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-[#FEC556] transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy-policy" className="hover:text-[#FEC556] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-[#FEC556] transition-colors">
                  Terms of Service & Consultation Norms
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Chamber Coordinates */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#FEC556]">
              Chamber Coordinates
            </h4>
            <ul className="mt-4 space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#FEC556] mt-0.5" />
                <span>{FIRM.chamber}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#FEC556]" />
                <a href={FIRM.phoneHref} className="hover:text-[#FEC556]">
                  {FIRM.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#FEC556]" />
                <a href={FIRM.emailHref} className="hover:text-[#FEC556]">
                  {FIRM.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-[#FEC556] mt-0.5" />
                <span>{FIRM.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Statutory BCI Compliance Disclaimer */}
        <div className="mt-12 border-l-2 border-[#FEC556] bg-[#0F1D38] p-5 text-xs text-gray-400">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#FEC556] mb-1.5">
            <ShieldAlert className="h-4 w-4" />
            <span>Bar Council of India Disclaimer (Rule 36)</span>
          </div>
          <p className="leading-relaxed">{FIRM.bciDisclaimer}</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} {FIRM.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-of-service" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingButtons() {
  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href={FIRM.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 sm:h-auto sm:w-auto items-center justify-center gap-2 rounded bg-[#34A853] p-3 sm:px-4 sm:py-2.5 text-white shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-200"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-xs font-bold">WhatsApp</span>
      </a>

      {/* Call Floating Button */}
      <a
        href={FIRM.phoneHref}
        aria-label={`Call ${FIRM.phone}`}
        className="flex h-12 w-12 sm:h-auto sm:w-auto items-center justify-center gap-2 rounded bg-[#FEC556] p-3 sm:px-4 sm:py-2.5 text-[#172B54] shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-200"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden sm:inline text-xs font-bold">Call Lawyer</span>
      </a>
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {eyebrow && (
        <div
          className={`inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest mb-3 border-l-2 ${
            light
              ? "bg-[#0F1D38] text-[#FEC556] border-[#FEC556]"
              : "bg-[#FEFBF3] text-[#172B54] border-[#172B54]"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
          light ? "text-white" : "text-[#172B54]"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-20 rounded bg-[#FEC556] ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#172B54] py-16 sm:py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1D38] via-[#172B54] to-[#1F3A70] opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(#FEC556_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block border-l-2 border-[#FEC556] bg-black/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#FEC556]">
          {eyebrow}
        </div>
        <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {title}
        </h1>
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#FEC556]" />
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-200">{subtitle}</p>
      </div>
    </section>
  );
}

/**
 * Circle Loading Screen shown while website hydrates / mounts.
 */
function CircleLoadingScreen({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;

  return (
    <div
      aria-label="Loading Urmika Juris"
      className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#0F1D38] text-white transition-opacity duration-500"
    >
      <div className="relative flex items-center justify-center">
        {/* Outer pulsing ring */}
        <div className="h-24 w-24 rounded-full border-2 border-[#FEC556]/20 animate-ping absolute" />

        {/* Circular SVG spinner ring */}
        <svg className="h-20 w-20 animate-spin text-[#FEC556]" viewBox="0 0 50 50">
          <circle
            className="text-white/10"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="20"
            cx="25"
            cy="25"
          />
          <circle
            className="animate-spinner-dash"
            strokeWidth="4"
            strokeDasharray="80"
            strokeDashoffset="60"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="20"
            cx="25"
            cy="25"
          />
        </svg>

        {/* Central emblem / scales */}
        <div className="absolute flex h-10 w-10 items-center justify-center text-[#FEC556]">
          <Scale className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="font-heading text-sm font-extrabold tracking-widest uppercase text-[#FEC556]">
          URMIKA JURIS & ASSOCIATES
        </div>
        <div className="mt-1 text-[11px] uppercase tracking-wider text-gray-400">
          Advocates • Tis Hazari Courts, Delhi
        </div>
      </div>
    </div>
  );
}

/**
 * Auto-Consultation Popup & Site Shell Wrapper
 * Pops up after 7 seconds (5-10 seconds) on initial visit.
 */
function SiteShellContent({ children }: { children: ReactNode }) {
  const { openModal } = useConsultationModal();
  const [loading, setLoading] = useState(true);

  // Initial circular loading screen dismissal
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Auto consultation popup after 7 seconds (between 5 and 10 seconds)
  useEffect(() => {
    const popupTimer = setTimeout(() => {
      if (typeof window !== "undefined") {
        const hasShown = sessionStorage.getItem("urmika_auto_consult_shown");
        if (!hasShown) {
          sessionStorage.setItem("urmika_auto_consult_shown", "true");
          openModal();
        }
      }
    }, 7000);

    return () => clearTimeout(popupTimer);
  }, [openModal]);

  return (
    <>
      <CircleLoadingScreen isVisible={loading} />
      <div className="min-h-screen flex flex-col bg-white text-[#111827] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
        <AiChatbot />
      </div>
    </>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <ConsultationModalProvider>
      <SiteShellContent>{children}</SiteShellContent>
    </ConsultationModalProvider>
  );
}
