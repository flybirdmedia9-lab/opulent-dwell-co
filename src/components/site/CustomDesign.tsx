import { Upload, MessageCircle, FileText } from "lucide-react";
import customCraft from "@/assets/custom-craft.jpg";

export function CustomDesign() {
  return (
    <section id="custom" className="relative isolate overflow-hidden bg-midnight py-24 md:py-32">
      <img
        src={customCraft}
        alt="Artisan crafting a bespoke sofa frame"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold md:text-xs">
          Bespoke Service
        </span>
        <h2 className="mt-5 font-display text-4xl leading-[1.1] text-ivory md:text-6xl">
          Have a design <em className="not-italic text-gold">in mind?</em>
          <br />
          We&rsquo;ll recreate it.
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-gradient-gold" />
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ivory/75 md:text-lg">
          Share your sofa inspiration — a photo, a sketch, a Pinterest board —
          and our craftsmen will recreate it, perfected for your space and lifestyle.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: Upload, label: "Upload Design", href: "https://wa.me/917386889855" },
            { icon: MessageCircle, label: "WhatsApp Enquiry", href: "https://wa.me/917386889855" },
            { icon: FileText, label: "Request Quote", href: "#contact" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group glass flex items-center justify-center gap-3 rounded-sm px-6 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-ivory transition-all hover:bg-gradient-gold hover:text-midnight"
            >
              <Icon className="h-5 w-5 text-gold transition-colors group-hover:text-midnight" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}