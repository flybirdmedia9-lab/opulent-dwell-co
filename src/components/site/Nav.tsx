import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "Customize", href: "#custom" },
  { label: "Craftsmanship", href: "#craft" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-midnight/85 backdrop-blur-xl border-b border-gold/15" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-xl tracking-wide text-ivory md:text-2xl">
            ReCreate <span className="text-gold">Living</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-[0.18em] text-ivory/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+917386889855"
          className="hidden items-center gap-2 rounded-sm border border-gold/40 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-midnight lg:inline-flex"
        >
          <Phone className="h-3.5 w-3.5" /> Call
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="text-ivory lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-midnight/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-gradient-dark border-l border-gold/20 px-7 py-7 shadow-luxe transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl text-ivory">
              ReCreate <span className="text-gold">Living</span>
            </span>
            <button aria-label="Close" onClick={() => setOpen(false)} className="text-ivory">
              <X className="h-6 w-6" />
            </button>
          </div>
          <span className="gold-divider mt-6 block" />
          <nav className="mt-8 flex flex-col gap-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 60}ms` }}
                className="animate-fade-up border-b border-gold/10 py-4 font-display text-2xl text-ivory transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-10 space-y-3">
            <a
              href="https://wa.me/917386889855"
              target="_blank"
              rel="noreferrer"
              className="block rounded-sm bg-gradient-gold py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-midnight"
            >
              WhatsApp Enquiry
            </a>
            <a
              href="tel:+917386889855"
              className="block rounded-sm border border-gold/40 py-3 text-center text-sm uppercase tracking-[0.2em] text-gold"
            >
              +91 73868 89855
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}