import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reviews = [
  {
    name: "Aarav & Meera Reddy",
    role: "Jubilee Hills, Hyderabad",
    text: "Our custom L-sofa from ReCreate Living is the centerpiece of our home. The craftsmanship is honestly comparable to international luxury brands — at a fraction of the price.",
    initial: "AR",
  },
  {
    name: "Priya Lakshmi",
    role: "Banjara Hills",
    text: "I sent them a Pinterest reference and they recreated it perfectly. The velvet, the gold legs, the proportions — everything exactly as I imagined. White-glove delivery too.",
    initial: "PL",
  },
  {
    name: "Rohit Naidu",
    role: "Vijayawada",
    text: "Outstanding sofa bed — converts beautifully, sleeps like a real mattress. Five years in and it still looks brand new. Quality is unmatched.",
    initial: "RN",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section className="relative overflow-hidden bg-midnight py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10">
        <SectionHeading
          light
          eyebrow="Client Voices"
          title={<>Loved by families across <em className="not-italic text-gold">South India</em></>}
        />

        <div className="mt-16">
          <div className="glass rounded-sm p-8 md:p-12">
            <Quote className="h-10 w-10 text-gold" />
            <div className="mt-5 flex gap-1">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-6 font-display text-xl leading-relaxed text-ivory md:text-2xl">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold font-semibold text-midnight">
                {r.initial}
              </div>
              <div>
                <div className="font-semibold text-ivory">{r.name}</div>
                <div className="text-sm text-ivory/60">{r.role}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Review ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${
                    k === i ? "w-8 bg-gold" : "w-4 bg-ivory/20"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                aria-label="Previous"
                onClick={() => setI((i - 1 + reviews.length) % reviews.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-midnight"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next"
                onClick={() => setI((i + 1) % reviews.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-midnight"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}