import { Sparkles, Gem, Hammer, Tag, Bed, Truck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Sparkles, title: "Custom Made Designs", text: "Tailored to your taste, your space, your story." },
  { icon: Gem, title: "Premium Materials", text: "Hand-picked fabrics, hardwoods and full-grain leathers." },
  { icon: Hammer, title: "Skilled Craftsmanship", text: "Built by artisans with over a decade of mastery." },
  { icon: Tag, title: "Direct Factory Pricing", text: "No middlemen — luxury at honest, atelier pricing." },
  { icon: Bed, title: "Sofa Bed Specialists", text: "Convertible designs engineered for everyday luxury." },
  { icon: Truck, title: "Home Delivery", text: "White-glove delivery and installation across the region." },
];

export function WhyChoose() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="The ReCreate Difference"
          title={<>Why choose <em className="not-italic text-gold">ReCreate Living</em></>}
          description="Six promises that define every sofa that leaves our atelier."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-gold/20 bg-gold/20 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative bg-card p-8 transition-colors duration-500 hover:bg-midnight md:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 transition-all group-hover:bg-gradient-gold group-hover:border-transparent">
                <Icon className="h-6 w-6 text-gold transition-colors group-hover:text-midnight" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-midnight transition-colors group-hover:text-ivory">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-ivory/70">
                {text}
              </p>
              <span className="absolute right-8 top-8 font-display text-xs text-gold/60">
                0{items.indexOf(items.find((i) => i.title === title)!) + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}