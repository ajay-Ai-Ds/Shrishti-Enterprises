import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Duct Area Safety Nets Bangalore | Apartment Shaft & Utility Netting",
  description: "Specialized building shaft and duct safety nets in Bangalore. Prevent debris build-up, bird nesting, and accidental falls with Shrishti Enterprises.",
  path: "/duct-area-safety-nets",
  keywords: ["duct area safety nets bangalore", "building shaft net", "plumbing duct safety mesh", "apartment duct net price"],
});

const faqs = [
  { question: "Why are duct area safety nets vital for apartment buildings?", answer: "Building duct shafts easily accumulate waste, debris, and roosting pigeons. Installing heavy-duty duct nets maintains clean shafts and prevents maintenance hazards." },
];

export default function DuctAreaSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Duct Area Safety Nets"
      slug="duct-area-safety-nets"
      heroHeadline="Building Duct &amp; Shaft Safety Nets in Bangalore"
      heroSub="Specialized high-tensile safety netting covering building ventilation shafts, plumbing voids, and utility ducts."
      imagePath="/images/ductareanets.webp"
      imageAlt="Building duct area safety net installation in Bangalore apartment"
      relatedServices={[
        { title: "Bird Nets", slug: "bird-nets" },
        { title: "Construction Safety Nets", slug: "construction-safety-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Protect Building Shafts &amp; Plumbing Ducts in Bangalore</h2>
            <p>Shrishti Enterprises installs reinforced duct area nets that withstand heavy outdoor exposure while maintaining ventilation and accessibility for building maintenance staff.</p>
          </div>
        </div>
      }
    />
  );
}
