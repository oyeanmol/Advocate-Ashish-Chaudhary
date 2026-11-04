import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import emblem from "@/assets/urmika-emblem.png.asset.json";
import { FIRM, NAV, PRACTICE } from "./data";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={emblem.url} alt="Urmika Juris emblem" className="h-12 w-14 rounded-md object-cover object-top" />
      <div className="leading-tight">
        <div className="font-display text-base font-semibold tracking-wide text-gold">URMIKA JURIS</div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-navy-foreground/70">& Associates</div>
      </div>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-navy-deep/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-md px-4 py-2 text-sm text-navy-foreground/85 transition hover:text-gold"
              activeProps={{ className: "bg-navy text-gold border border-gold/30" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={FIRM.phoneHref} className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:brightness-110">
            Talk to a Lawyer
          </a>
        </div>
        <button className="text-navy-foreground lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-gold/20 px-4 pb-4 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-3 text-navy-foreground/85">
              {n.label}
            </Link>
          ))}
          <a href={FIRM.phoneHref} className="mt-2 block rounded-md bg-gold px-5 py-3 text-center font-semibold text-primary-foreground">Talk to a Lawyer</a>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-gold/25 bg-navy p-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gold">Need legal help?</p>
            <h3 className="mt-2 text-2xl">Justice Starts With the Right Counsel</h3>
          </div>
          <a href={FIRM.phoneHref} className="rounded-md bg-gold px-6 py-3 font-semibold text-primary-foreground shadow-gold">Book a Consultation</a>
        </div>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-navy-foreground/70">Trusted advocates committed to truth, integrity and the pursuit of justice. <span className="text-gold">{FIRM.tagline}.</span></p>
          </div>
          <div>
            <h4 className="font-display text-gold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
              {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-gold">Practice Areas</h4>
            <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
              {PRACTICE.slice(0, 5).map((p) => <li key={p.title}>{p.title}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-gold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" />{FIRM.address}</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 text-gold" />{FIRM.phone}</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-gold" />{FIRM.email}</li>
              <li className="flex gap-2"><Clock className="h-4 w-4 text-gold" />{FIRM.hours}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gold/15 pt-6 text-xs text-navy-foreground/55">
          <p>© {new Date().getFullYear()} {FIRM.name}. All rights reserved.</p>
          <p className="mt-2">Disclaimer: As per the rules of the Bar Council of India, this website is for information purposes only and does not constitute solicitation or advertisement.</p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a href={FIRM.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-navy-foreground shadow-card">
        WhatsApp <MessageCircle className="h-5 w-5" />
      </a>
      <a href={FIRM.phoneHref} className="flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-primary-foreground shadow-gold">
        Call Now <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="bg-navy-deep py-20 text-center text-navy-foreground">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h1 className="mx-auto mt-4 max-w-3xl px-4 text-4xl md:text-5xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-2xl px-4 text-navy-foreground/70">{subtitle}</p>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, light }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mb-12 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl md:text-4xl ${light ? "text-navy-foreground" : "text-navy"}`}>{title}</h2>
      <div className="mx-auto mt-4 h-0.5 w-16 bg-gold" />
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
