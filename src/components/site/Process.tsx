import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", title: "Share Your Design", text: "Send us a picture, sketch or reference. Tell us your space." },
  { n: "02", title: "Get Free Quote", text: "We curate materials and share transparent pricing." },
  { n: "03", title: "Manufacturing", text: "Master artisans craft each piece in our Vijayawada atelier." },
  { n: "04", title: "Quality Check", text: "Every stitch, joint and finish passes a 40-point inspection." },
  { n: "05", title: "Delivery & Install", text: "White-glove delivery, set up perfectly in your home." },
];

export function Process() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Our Process"
          title={<>Five steps from <em className="not-italic text-gold">vision to delivery</em></>}
        />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 lg:block" />

          <div className="space-y-10 lg:space-y-0">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className={`relative ${i % 2 === 1 ? "lg:text-left lg:pl-16" : "lg:text-right lg:pr-16"}`}>
                  <span className="font-display text-7xl text-gold/30 md:text-8xl">{s.n}</span>
                  <h3 className="-mt-6 font-display text-3xl text-midnight md:text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-md text-muted-foreground lg:ml-auto lg:max-w-sm">
                    {i % 2 === 1 ? s.text : s.text}
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="relative flex items-center">
                    <span className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-gold ring-4 ring-ivory" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}