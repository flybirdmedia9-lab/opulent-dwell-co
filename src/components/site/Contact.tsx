import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  message: z.string().trim().min(5, "Tell us a little about your project").max(1000),
});

export function Contact() {
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setStatus({ ok: false, msg: parsed.error.issues[0].message });
      return;
    }
    const { name, phone, message } = parsed.data;
    const text = encodeURIComponent(
      `Hi ReCreate Living,\n\nName: ${name}\nPhone: ${phone}\n\n${message}`,
    );
    window.open(`https://wa.me/917386889855?text=${text}`, "_blank");
    setStatus({ ok: true, msg: "Opening WhatsApp with your enquiry…" });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Contact"
          title={<>Visit, call or <em className="not-italic text-gold">write to us</em></>}
          description="Our studio in Vijayawada is open every day for consultations and showroom visits."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Info + Map */}
          <div className="space-y-6">
            <div className="rounded-sm border border-gold/20 bg-midnight p-7 text-ivory">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold">ReCreate Living</span>
              <h3 className="mt-2 font-display text-3xl">Crafted in Vijayawada</h3>
              <span className="gold-divider mt-3 block" />
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-gold" />
                  <div>
                    <a href="tel:+917386889855" className="block hover:text-gold">+91 73868 89855</a>
                    <a href="tel:+919949819132" className="block text-ivory/70 hover:text-gold">+91 99498 19132</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-gold" />
                  <a href="mailto:recreatelivingstudio@gmail.com" className="hover:text-gold break-all">
                    recreatelivingstudio@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                  <span>Vijayawada, Andhra Pradesh, India</span>
                </li>
              </ul>
              <a
                href="https://wa.me/917386889855"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-whatsapp px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>

            <div className="overflow-hidden rounded-sm border border-gold/20">
              <iframe
                title="ReCreate Living Vijayawada"
                src="https://www.google.com/maps?q=Vijayawada,Andhra+Pradesh&output=embed"
                className="h-72 w-full grayscale-[0.4]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="rounded-sm border border-border bg-ivory p-7 md:p-10">
            <h3 className="font-display text-2xl text-midnight">Request a quote</h3>
            <p className="mt-2 text-sm text-muted-foreground">We&rsquo;ll get back within 24 hours.</p>

            <div className="mt-7 space-y-5">
              <Field label="Your Name" name="name" placeholder="Full name" />
              <Field label="Phone" name="phone" placeholder="+91 ..." type="tel" />
              <Field label="Your Project" name="message" placeholder="Tell us about your sofa, dimensions, fabric preferences…" textarea />
            </div>

            {status && (
              <p
                className={`mt-4 text-sm ${
                  status.ok ? "text-emerald-700" : "text-destructive"
                }`}
              >
                {status.msg}
              </p>
            )}

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gradient-dark px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-ivory transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4 text-gold" /> Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  const common =
    "mt-2 w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-midnight placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.3em] text-midnight/60">{label}</label>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={4} maxLength={1000} className={common} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} maxLength={120} className={common} />
      )}
    </div>
  );
}