import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Pigeon Safety Nets Bangalore | Heavy-Duty Balcony Pigeon Protection",
  description: "Eradicate pigeon mess and nesting on balconies and AC ledges with heavy-duty pigeon safety nets by Shrishti Enterprises Bangalore. Same-day installation.",
  path: "/pigeon-safety-nets",
  keywords: ["pigeon safety nets bangalore", "balcony pigeon mesh", "pigeon proofing bangalore", "anti pigeon net price"],
});

const faqs = [
  { question: "What makes pigeon nets different from standard bird nets?", answer: "Pigeon safety nets feature heavy-gauge knotted polymers with 40mm to 50mm square aperture specifically designed to resist aggressive pigeon roosting while maximizing air circulation." },
  { question: "How much does pigeon net installation cost in Bangalore?", answer: "Pigeon netting ranges from ₹10 to ₹18 per square foot, inclusive of all anchoring hardware and professional fitment." },
];

export default function PigeonSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Pigeon Safety Nets"
      slug="pigeon-safety-nets"
      heroHeadline="Heavy-Duty Balcony Pigeon Nets in Bangalore"
      heroSub="Permanently block pigeon roosting, droppings, and nesting on balconies, windows, and utility ducts."
      imagePath="/images/pigeon-safety-nets.webp"
      imageAlt="Pigeon safety net installation on residential building in Bangalore"
      relatedServices={[
        { title: "Bird Nets", slug: "bird-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Duct Area Safety Nets", slug: "duct-area-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Permanent Pigeon Exclusion for Bangalore Residences</h2>
            <p>Pigeon droppings carry harmful bacteria and respiratory allergens like histoplasmosis. Shrishti Enterprises installs reinforced pigeon safety nets that seal off potential roosting ledges, leaving your balconies sanitary, clean, and pleasant to use.</p>
          </div>
        </div>
      }
    />
  );
}
