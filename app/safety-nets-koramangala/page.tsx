import { buildMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata = buildMetadata({
  title: "Premium Safety Nets & Invisible Grills in Koramangala Bangalore",
  description: "Architectural SS316 invisible grills and balcony safety nets for upscale homes across Koramangala Blocks 1 to 8 by Shrishti Enterprises.",
  path: "/safety-nets-koramangala",
  keywords: ["safety nets koramangala", "invisible grills koramangala bangalore", "balcony netting koramangala"],
});

const faqs = [
  { question: "Do you install invisible grills across Koramangala?", answer: "Yes, we install SS316 marine-grade invisible grills throughout all Koramangala blocks, Ejipura, and ST Bed layout." },
];

export default function KoramangalaPage() {
  return (
    <LocationPageTemplate
      area="Koramangala"
      slug="safety-nets-koramangala"
      imageSrc="/images/monkey.webp"
      imageAlt="Invisible grill and balcony protection in Koramangala"
      faqs={faqs}
      content={
        <div className="space-y-8">
          <div>
            <h2>Architectural Protection for Koramangala Residences</h2>
            <p>Koramangala's cosmopolitan residential landscape demands top-tier aesthetic and safety standards. Shrishti Enterprises offers sleek invisible grills and premium safety netting that blend effortlessly with modern interiors and exterior facades.</p>
          </div>
        </div>
      }
    />
  );
}
