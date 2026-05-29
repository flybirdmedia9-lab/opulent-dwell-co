import { MessageCircle, FileText } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-sm bg-gradient-dark p-10 text-center shadow-luxe md:p-16">
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{
            background:
              "radial-gradient(ellipse at top, var(--gold) 0%, transparent 60%)",
          }} />
          <div className="relative">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold md:text-xs">
              Let&rsquo;s talk
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-[1.1] text-ivory md:text-5xl">
              Looking for the <em className="not-italic text-gold">perfect sofa?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-ivory/70">
              Chat with our design team today. Free consultation, transparent quote, no obligation.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/917386889855"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-sm border border-gold/50 px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-midnight"
              >
                <FileText className="h-4 w-4" /> Request Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}