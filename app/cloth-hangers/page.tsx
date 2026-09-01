import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Ceiling Cloth Drying Hangers Bangalore | Space-Saving Pulley Systems",
  description: "Heavy-gauge stainless steel ceiling cloth drying hangers with smooth pulley mechanisms in Bangalore. Free installation & warranty by Shrishti Enterprises.",
  path: "/cloth-hangers",
  keywords: ["cloth hangers bangalore", "ceiling cloth drying hanger", "pulley cloth hanger bangalore", "balcony clothes dryer"],
});

const faqs = [
  { question: "How much weight can ceiling cloth hangers support?", answer: "Each stainless steel pipe supports up to 8–10 kg of wet laundry, handling heavy bedsheets, towels, and daily clothes effortlessly." },
  { question: "What is the price of ceiling cloth hanger installation in Bangalore?", answer: "Ceiling cloth hanger systems start from ₹850 to ₹2,500 depending on pipe count (4, 6, or 8 pipes) and stainless steel grade." },
];

export default function ClothHangersPage() {
  return (
    <ServicePageTemplate
      title="Cloth Hangers"
      slug="cloth-hangers"
      heroHeadline="Ceiling-Mounted Cloth Drying Hanger Systems in Bangalore"
      heroSub="Maximize your balcony floor space with smooth dual-pulley stainless steel drying racks. Fast 1-hour installation."
      imagePath="/images/clothhanger.jpg"
      imageAlt="Ceiling cloth drying hanger system installed in Bangalore balcony"
      relatedServices={[
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Invisible Grills", slug: "invisible-grills" },
        { title: "Bird Nets", slug: "bird-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Space-Saving Ceiling Cloth Dryers for Bangalore Apartments</h2>
            <p>Shrishti Enterprises ceiling cloth hangers provide an intelligent solution to drying laundry without cluttering small apartment balconies or utility spaces.</p>
          </div>
        </div>
      }
    />
  );
}
