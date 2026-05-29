import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import lshape from "@/assets/cat-lshape.jpg";
import recliner from "@/assets/cat-recliner.jpg";
import sofaset from "@/assets/cat-sofaset.jpg";
import sofabed from "@/assets/cat-sofabed.jpg";
import custom from "@/assets/cat-custom.jpg";
import premium from "@/assets/cat-premium.jpg";
import compact from "@/assets/cat-compact.jpg";

const categories = [
  { name: "L-Shape Sofas", desc: "Architectural seating for grand living rooms.", img: lshape },
  { name: "Recliners", desc: "Indulgent comfort, precision-engineered.", img: recliner },
  { name: "Sofa Sets", desc: "Coordinated ensembles, timelessly elegant.", img: sofaset },
  { name: "Sofa Beds", desc: "Convertible luxury for modern living.", img: sofabed },
  { name: "Custom Sofas", desc: "Bespoke pieces made entirely to your vision.", img: custom },
  { name: "Premium Sofas", desc: "Statement designs in finest materials.", img: premium },
  { name: "Compact Sofas", desc: "Refined seating for smaller spaces.", img: compact },
];

export function Collections() {
  return (
    <section id="collections" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Our Collections"
          title={<>Designed for every <em className="not-italic text-gold">way of living</em></>}
          description="Seven thoughtfully crafted collections — each engineered for comfort, made for beauty."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <article
              key={c.name}
              className={`group relative overflow-hidden rounded-sm bg-midnight shadow-card ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "aspect-[16/10]" : "aspect-[4/5]"} overflow-hidden`}>
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover hover-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Collection</span>
                  <h3 className="mt-2 font-display text-2xl text-ivory md:text-3xl">{c.name}</h3>
                  <p className="mt-2 max-w-xs text-sm text-ivory/70">{c.desc}</p>
                </div>
                <a
                  href="https://wa.me/917386889855"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Enquire about ${c.name}`}
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-gold/40 bg-midnight/60 text-gold transition-all hover:bg-gradient-gold hover:text-midnight"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}