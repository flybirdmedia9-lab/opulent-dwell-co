import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Collections } from "@/components/site/Collections";
import { CustomDesign } from "@/components/site/CustomDesign";
import { Process } from "@/components/site/Process";
import { Craftsmanship } from "@/components/site/Craftsmanship";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ReCreate Living — Bespoke Luxury Sofas in Vijayawada" },
      {
        name: "description",
        content:
          "Premium custom sofas, recliners, sectionals and sofa beds — designed and crafted in Vijayawada. Crafted for comfort, designed for life.",
      },
      { property: "og:title", content: "ReCreate Living — Bespoke Luxury Sofas" },
      {
        property: "og:description",
        content:
          "Custom-designed sofas that combine luxury, comfort and timeless craftsmanship.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-ivory">
      <Nav />
      <Hero />
      <WhyChoose />
      <Collections />
      <CustomDesign />
      <Process />
      <Craftsmanship />
      <Testimonials />
      <Gallery />
      <CtaBanner />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
