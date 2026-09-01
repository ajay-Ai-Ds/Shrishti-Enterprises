import { buildMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata = buildMetadata({
  title: "Safety Nets & Invisible Grills in HSR Layout Bangalore",
  description: "Premium balcony safety nets, invisible grills, and bird deterrence netting across all 7 sectors of HSR Layout by Shrishti Enterprises.",
  path: "/safety-nets-hsr-layout",
  keywords: ["safety nets hsr layout", "invisible grills hsr layout", "balcony safety nets hsr sectors"],
});

const faqs = [
  { question: "How to schedule a free inspection in HSR Layout?", answer: "Call or WhatsApp us at +91 80880 47056. Our HSR Layout field unit can reach your residence on the same day." },
];

export default function HSRLayoutPage() {
  return (
    <LocationPageTemplate
      area="HSR Layout"
      slug="safety-nets-hsr-layout"
      imageSrc="/images/child.webp"
      imageAlt="Child safety net installation in HSR Layout apartment"
      faqs={faqs}
      content={
        <div className="space-y-8">
          <div>
            <h2>Comprehensive Safety Netting for HSR Layout Homes</h2>
            <p>HSR Layout's planned residential layout across Sectors 1 through 7 features a blend of independent villas and multi-floor apartments. Shrishti Enterprises provides tailored safety net solutions, anti-pigeon netting, and stainless steel invisible grills throughout the locality.</p>
          </div>
        </div>
      }
    />
  );
}
