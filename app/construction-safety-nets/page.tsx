import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Construction Safety Nets Bangalore | IS-Standard Fall Arrest & Debris Nets",
  description: "Certified construction safety netting, scaffold debris containment, and personnel fall-arrest nets for builders and contractors across Bangalore.",
  path: "/construction-safety-nets",
  keywords: ["construction safety nets bangalore", "scaffolding debris net", "building site fall net", "safety netting contractors bangalore"],
});

const faqs = [
  { question: "Do Shrishti Enterprises construction nets meet Indian safety standards?", answer: "Yes, our construction safety nets comply with IS 5175 and international fall-arrest safety regulations for construction sites." },
];

export default function ConstructionSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Construction Safety Nets"
      slug="construction-safety-nets"
      heroHeadline="Industrial Construction &amp; Debris Catchment Nets in Bangalore"
      heroSub="High-strength personnel fall-arrest netting and scaffold containment mesh for multi-storey building projects."
      imagePath="/images/team1.webp"
      imageAlt="Construction safety net installation on building site in Bangalore"
      relatedServices={[
        { title: "Duct Area Safety Nets", slug: "duct-area-safety-nets" },
        { title: "Sports Nets", slug: "sports-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Site Safety &amp; Fall Prevention Netting in Bangalore</h2>
            <p>Ensure regulatory compliance and protect on-site workers and pedestrians with heavy-duty construction safety nets from Shrishti Enterprises.</p>
          </div>
        </div>
      }
    />
  );
}
