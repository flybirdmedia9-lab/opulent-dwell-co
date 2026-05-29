import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-midnight text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10 md:py-20">
        <div className="md:col-span-2">
          <span className="font-display text-2xl">
            ReCreate <span className="text-gold">Living</span>
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">
            Crafted for Comfort. Designed for Life. A Vijayawada atelier
            specializing in bespoke sofas, recliners and sectional designs for
            modern Indian homes.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gradient-gold hover:text-midnight"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Explore"
          links={[
            ["About Us", "#craft"],
            ["Collections", "#collections"],
            ["Customization", "#custom"],
            ["Gallery", "#gallery"],
            ["Contact", "#contact"],
          ]}
        />

        <FooterCol
          title="Contact"
          links={[
            ["+91 73868 89855", "tel:+917386889855"],
            ["+91 99498 19132", "tel:+919949819132"],
            ["recreatelivingstudio@gmail.com", "mailto:recreatelivingstudio@gmail.com"],
            ["Vijayawada, AP", "#contact"],
          ]}
        />
      </div>
      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-ivory/50 md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} ReCreate Living. All rights reserved.</span>
          <span className="tracking-[0.25em] uppercase">Crafted with care · Vijayawada</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display text-lg text-gold">{title}</h4>
      <span className="gold-divider mt-2 block" />
      <ul className="mt-5 space-y-3 text-sm text-ivory/70">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="transition-colors hover:text-gold break-all">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}