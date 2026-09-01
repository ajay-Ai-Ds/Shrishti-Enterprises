import { buildMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata = buildMetadata({
  title: "Safety Nets & Invisible Grills in Indiranagar Bangalore | Shrishti",
  description: "Discreet balcony safety nets and SS316 invisible grills in Indiranagar, 100 Feet Road, CMH Road & HAL 2nd Stage. Free site visit.",
  path: "/safety-nets-indiranagar",
  keywords: ["safety nets indiranagar", "invisible grills indiranagar bangalore", "balcony nets 100 feet road"],
});

const faqs = [
  { question: "Are invisible grills suitable for Indiranagar apartments?", answer: "Yes! Invisible grills offer unhindered tree-canopy views while providing certified 350+ kg fall protection for families." },
];

export default function IndiranagarPage() {
  return (
    <LocationPageTemplate
      area="Indiranagar"
      slug="safety-nets-indiranagar"
      imageSrc="/images/invisiblegrill.webp"
      imageAlt="Invisible grill installation on Indiranagar apartment balcony"
      faqs={faqs}
      content={
        <div className="space-y-8">
          <div>
            <h2>Discreet Home Safety Solutions in Indiranagar</h2>
            <p>Indiranagar's upscale bungalows and boutique apartments value aesthetics as much as protection. Shrishti Enterprises provides precision-fitted invisible grills and translucent safety netting that safeguard your family without altering property aesthetics.</p>
          </div>
        </div>
      }
    />
  );
}
