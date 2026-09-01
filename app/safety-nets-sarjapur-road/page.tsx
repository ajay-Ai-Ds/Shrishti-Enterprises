import { buildMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata = buildMetadata({
  title: "Safety Nets & Invisible Grills on Sarjapur Road Bangalore",
  description: "Certified safety net and invisible grill installations for apartment townships and villas along Sarjapur Road, Haralur & Carmelram.",
  path: "/safety-nets-sarjapur-road",
  keywords: ["safety nets sarjapur road", "balcony nets sarjapur bangalore", "invisible grills haralur road"],
});

const faqs = [
  { question: "Do you cover all townships along Sarjapur Road?", answer: "Yes! We cover the entire Sarjapur corridor from HSR / Haralur junction to Sarjapur Town, including Carmelram, Doddakannelli, and Sompura." },
];

export default function SarjapurRoadPage() {
  return (
    <LocationPageTemplate
      area="Sarjapur Road"
      slug="safety-nets-sarjapur-road"
      imageSrc="/images/grillwork.webp"
      imageAlt="Safety net and grill work along Sarjapur Road Bangalore"
      faqs={faqs}
      content={
        <div className="space-y-8">
          <div>
            <h2>Safety Net Solutions for Sarjapur Road Apartment Enclaves</h2>
            <p>Sarjapur Road's rapidly growing residential corridor features massive high-rise developments. Shrishti Enterprises provides certified balcony safety netting, invisible grills, and ceiling cloth dryers across all gated societies along Sarjapur Road.</p>
          </div>
        </div>
      }
    />
  );
}
