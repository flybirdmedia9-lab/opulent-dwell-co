import { useState } from "react";
import { X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/cat-premium.jpg";
import g6 from "@/assets/cat-custom.jpg";

const items = [
  { src: g1, alt: "Luxury living room with navy sectional and city view", span: "row-span-2" },
  { src: g2, alt: "Curved cream boucle sofa in modern home", span: "" },
  { src: g3, alt: "Home theater with tan leather recliners", span: "" },
  { src: g4, alt: "Grey modern sofa with brass lamp", span: "row-span-2" },
  { src: g5, alt: "Emerald velvet premium sofa with gold accents", span: "" },
  { src: g6, alt: "Tufted custom-designed sofa with brass legs", span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title={<>Inside our <em className="not-italic text-gold">installations</em></>}
          description="A curated look into ReCreate Living homes and bespoke commissions."
        />

        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-3 md:gap-4">
          {items.map((it, k) => (
            <button
              key={k}
              onClick={() => setOpen(it.src)}
              className={`group relative overflow-hidden rounded-sm bg-midnight ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover hover-zoom"
              />
              <div className="absolute inset-0 bg-midnight/0 transition-colors duration-500 group-hover:bg-midnight/30" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold">View</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-midnight/90 p-6 animate-fade-in-slow"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 text-ivory"
            onClick={() => setOpen(null)}
          >
            <X className="h-7 w-7" />
          </button>
          <img src={open} alt="Preview" className="max-h-[85vh] max-w-full rounded-sm shadow-luxe" />
        </div>
      )}
    </section>
  );
}