import { SectionHeading } from "./SectionHeading";
import stitch from "@/assets/craft-stitch.jpg";
import frame from "@/assets/craft-frame.jpg";
import fabric from "@/assets/craft-fabric.jpg";

export function Craftsmanship() {
  return (
    <section id="craft" className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          light
          eyebrow="Atelier Craftsmanship"
          title={<>Made by hand. <em className="not-italic text-gold">Made to last.</em></>}
          description="Every ReCreate sofa passes through the hands of skilled artisans — from solid hardwood frames to hand-stitched upholstery and master-curated fabrics."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { img: frame, title: "Hardwood Frames", text: "Kiln-dried, mortise-and-tenon construction built to outlive trends." },
            { img: stitch, title: "Hand Stitching", text: "Tight, even seams hand-finished by upholstery masters." },
            { img: fabric, title: "Fabric Curation", text: "Premium velvets, boucles and full-grain leathers from leading mills." },
          ].map((c) => (
            <article key={c.title} className="group overflow-hidden rounded-sm border border-gold/15 bg-midnight">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover hover-zoom" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-ivory">{c.title}</h3>
                <span className="gold-divider mt-3 block" />
                <p className="mt-4 text-sm leading-relaxed text-ivory/70">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}