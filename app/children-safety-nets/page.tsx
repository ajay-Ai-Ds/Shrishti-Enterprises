import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Children Safety Nets Bangalore | Child-Safe Staircase & Balcony Mesh",
  description: "Reinforced child fall-arrest safety nets for staircases, balconies, and window galleries in Bangalore. Certified load testing by Shrishti Enterprises.",
  path: "/children-safety-nets",
  keywords: ["children safety nets bangalore", "child proof balcony netting", "kids staircase safety net", "child fall protection"],
});

const faqs = [
  { question: "How safe are child protection nets on open staircases?", answer: "Our children safety nets are anchored with heavy-duty tension bolts and support 250+ kg force, completely eliminating the danger of toddlers slipping through open balusters." },
  { question: "What is the cost of child safety netting in Bangalore?", answer: "Child safety netting typically costs ₹12 to ₹18 per square foot based on installation layout and railing design." },
];

export default function ChildrenSafetyNetsPage() {
  return (
    <ServicePageTemplate
      title="Children Safety Nets"
      slug="children-safety-nets"
      heroHeadline="Reinforced Children Safety Netting for Bangalore Homes"
      heroSub="Dedicated child fall-prevention mesh for balconies, stairwells, and mezzanine galleries. Certified 250+ kg load rating."
      imagePath="/images/child.webp"
      imageAlt="Child safety net installation on staircase and balcony in Bangalore"
      relatedServices={[
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Invisible Grills", slug: "invisible-grills" },
        { title: "Monkey Safety Nets", slug: "monkey-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Uncompromising Child Fall Protection for Bangalore Families</h2>
            <p>Young children are naturally energetic and curious. Shrishti Enterprises child safety nets provide peace of mind by securing balcony railings, open staircases, and window galleries with high-tensile, splinter-free polymer netting.</p>
          </div>
        </div>
      }
    />
  );
}
