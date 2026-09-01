import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Cricket Practice Nets Bangalore | Terrace & Ground Net Enclosures",
  description: "Custom cricket batting net enclosures for terraces, residential societies, and sports academies in Bangalore by Shrishti Enterprises.",
  path: "/cricket-safety-nets",
  keywords: ["cricket safety nets bangalore", "terrace cricket practice net", "box cricket cage installation", "cricket net price bangalore"],
});

const faqs = [
  { question: "How much does cricket net installation cost in Bangalore?", answer: "Cricket practice net setups cost between ₹22 and ₹45 per sq ft depending on frame material (GI pipe or MS frame) and netting grade." },
];

export default function CricketSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Cricket Safety Nets"
      slug="cricket-safety-nets"
      heroHeadline="Professional Cricket Practice Nets in Bangalore"
      heroSub="Custom-fabricated batting enclosures and ball-stop nets for rooftops, backyards, residential societies, and sports clubs."
      imagePath="/images/cricket.jpeg"
      imageAlt="Cricket practice net enclosure installation on Bangalore terrace"
      relatedServices={[
        { title: "Sports Nets", slug: "sports-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Construction Safety Nets", slug: "construction-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Custom Cricket Practice Enclosures in Bangalore</h2>
            <p>Whether you need a terrace practice net for aspiring young cricketers or a full-scale society box cricket cage, Shrishti Enterprises provides impact-absorbing, weather-resistant cricket netting systems.</p>
          </div>
        </div>
      }
    />
  );
}
