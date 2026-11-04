import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/Layout";
import { FIRM, PRACTICE } from "@/components/site/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Urmika Juris & Associates" },
      { name: "description", content: "Book a legal consultation with Urmika Juris & Associates." },
      { property: "og:title", content: "Contact | Urmika Juris & Associates" },
      { property: "og:description", content: "Book a legal consultation with our advocates." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-md border bg-background px-4 py-3 outline-none focus:border-gold";

function Contact() {
  const [sent, setSent] = useState(false);
  const info = [
    { icon: Phone, label: "Phone", value: FIRM.phone },
    { icon: Mail, label: "Email", value: FIRM.email },
    { icon: MapPin, label: "Office", value: FIRM.address },
    { icon: Clock, label: "Hours", value: FIRM.hours },
  ];
  return (
    <SiteShell>
      <PageHero eyebrow="Contact Us" title="Book a Consultation" subtitle="Share your concern and our team will get back to you within 24 hours." />
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            {info.map((i) => (
              <div key={i.label} className="flex gap-4 rounded-xl bg-navy p-5 text-navy-foreground">
                <i.icon className="h-6 w-6 shrink-0 text-gold" />
                <div><div className="text-sm text-gold">{i.label}</div><div>{i.value}</div></div>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-4 rounded-2xl border bg-card p-8 shadow-card md:col-span-3"
          >
            {sent ? (
              <div className="py-16 text-center">
                <h3 className="text-2xl text-navy">Thank you!</h3>
                <p className="mt-2 text-muted-foreground">We have received your request and will contact you shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Full Name" className={field} />
                  <input required type="tel" placeholder="Phone Number" className={field} />
                </div>
                <input type="email" placeholder="Email Address" className={field} />
                <select className={field} defaultValue="">
                  <option value="" disabled>Select Legal Matter</option>
                  {PRACTICE.map((p) => <option key={p.title}>{p.title}</option>)}
                </select>
                <textarea rows={5} placeholder="Briefly describe your matter" className={field} />
                <button className="w-full rounded-md bg-gold py-3.5 font-semibold text-primary-foreground shadow-gold">Submit Request</button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
