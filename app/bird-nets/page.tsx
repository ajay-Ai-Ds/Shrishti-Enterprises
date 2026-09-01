import { buildMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = buildMetadata({
  title: "Anti-Bird Netting Solutions Bangalore | Humane Bird Barrier Systems",
  description: "Keep balconies, AC ledges, and building shafts completely free of nesting birds with durable anti-bird nets by Shrishti Enterprises Bangalore. Free quote.",
  path: "/bird-nets",
  keywords: ["bird nets bangalore", "anti bird netting", "balcony bird protection net", "pigeon deterrence bangalore"],
});

const faqs = [
  { question: "How does bird netting keep pigeons and small birds away?", answer: "Our bird nets create an unobtrusive physical barrier that eliminates perching and nesting opportunities on balconies and window sills without trapping or injuring birds." },
  { question: "What mesh aperture is recommended for Bangalore apartments?", answer: "We recommend 19mm to 25mm aperture mesh to deter smaller birds like sparrows and mynas, and 40mm to 50mm mesh for pigeon exclusion." },
  { question: "What is the cost of anti-bird net installation in Bangalore?", answer: "Anti-bird netting generally ranges between ₹8 and ₹15 per square foot depending on area size and installation accessibility." },
];

export default function BirdNetsPage() {
  return (
    <ServicePageTemplate
      title="Bird Nets"
      slug="bird-nets"
      heroHeadline="Effective Anti-Bird &amp; Pigeon Exclusion Netting in Bangalore"
      heroSub="Humane, durable polymer mesh barriers that keep your balcony, AC ledges, and open utility areas spotless and bird-free."
      imagePath="/images/antibirdnet.jpg"
      imageAlt="Anti-bird mesh installation on residential balcony in Bangalore"
      relatedServices={[
        { title: "Pigeon Safety Nets", slug: "pigeon-safety-nets" },
        { title: "Balcony Safety Nets", slug: "balcony-safety-nets" },
        { title: "Duct Area Safety Nets", slug: "duct-area-safety-nets" },
      ]}
      faqs={faqs}
      mainContent={
        <div className="space-y-8">
          <div>
            <h2>Humane Bird Control Netting for Bangalore Apartments &amp; Offices</h2>
            <p>Urban bird nesting, particularly pigeons, poses severe health hazards, foul odors, and property staining across Bangalore's apartment balconies and office shafts. Shrishti Enterprises provides tailor-fitted anti-bird netting solutions that protect your living spaces humanely and permanently.</p>
          </div>
          <div>
            <h2>Why Choose Shrishti Anti-Bird Nets</h2>
            <ul>
              <li><strong>UV-Resistant Polyethylene:</strong> Will not rot, become brittle, or fade under direct sunlight.</li>
              <li><strong>Humane Exclusion:</strong> Safely redirects birds without causing entanglement.</li>
              <li><strong>Clean Installation:</strong> Fitted tightly with corrosion-proof SS hooks along the entire perimeter.</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
