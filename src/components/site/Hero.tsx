import heroImg from "@/assets/hero-sofa.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] w-full overflow-hidden bg-midnight">
      <img
        src={heroImg}
        alt="Luxury navy velvet sectional sofa in a premium living room"
        width={1600}
        height={1920}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(7,20,38,0.6)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28 lg:justify-center lg:pt-40">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold md:text-xs">
            <span className="h-px w-8 bg-gold" />
            Vijayawada · Est. Luxury
          </span>
          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] text-ivory md:text-6xl lg:text-7xl">
            Your Dream Sofa,
            <br />
            <em className="not-italic text-gold">Crafted to Perfection.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg">
            Custom-designed sofas that combine luxury, comfort, and timeless
            craftsmanship — made in our atelier, for your home.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#collections"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-midnight shadow-gold transition-transform hover:-translate-y-0.5"
            >
              Explore Collection
            </a>
            <a
              href="https://wa.me/917386889855?text=Hi%20ReCreate%20Living%2C%20I%27d%20like%20to%20enquire."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/60 bg-midnight/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-ivory backdrop-blur-md transition-colors hover:bg-gold hover:text-midnight"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>

        <div className="mt-14 hidden grid-cols-3 gap-8 border-t border-gold/15 pt-8 text-ivory/70 lg:grid lg:max-w-3xl">
          {[
            ["12+ Yrs", "Of Craftsmanship"],
            ["1,200+", "Sofas Delivered"],
            ["100%", "Bespoke & Custom"],
          ].map(([a, b]) => (
            <div key={a}>
              <div className="font-display text-3xl text-gold">{a}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.25em]">{b}</div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/50 md:flex">
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <span className="h-12 w-px animate-pulse bg-gold/60" />
      </div>
    </section>
  );
}