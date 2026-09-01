import { buildMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata = buildMetadata({
  title: "Balcony Safety Nets & Pigeon Nets in Marathahalli Bangalore",
  description: "Fast-response balcony safety net fitment and pigeon control netting across Marathahalli, Munnekollal & ORR corridor by Shrishti Enterprises.",
  path: "/safety-nets-marathahalli",
  keywords: ["safety nets marathahalli", "pigeon nets marathahalli", "balcony safety nets orr bangalore"],
});

const faqs = [
  { question: "Can Shrishti Enterprises install pigeon nets in Marathahalli today?", answer: "Yes! For bookings made before 1:00 PM, our technicians provide express same-day measurement and installation in Marathahalli." },
];

export default function MarathahalliPage() {
  return (
    <LocationPageTemplate
      area="Marathahalli"
      slug="safety-nets-marathahalli"
      imageSrc="/images/pigeon-safety-nets.webp"
      imageAlt="Pigeon safety netting on residential apartment in Marathahalli Bangalore"
      faqs={faqs}
      content={
        <div className="space-y-8">
          <div>
            <h2>Professional Safety Net Fitments Across Marathahalli</h2>
            <p>Connecting the Outer Ring Road with Old Airport Road, Marathahalli houses thousands of IT professionals in bustling apartment complexes. Dense residential living increases the need for effective pigeon exclusion and child balcony security.</p>
            <p>Shrishti Enterprises provides industrial-grade netting solutions throughout Marathahalli, Munnekollal, Kundalahalli, and surrounding tech corridors with zero call-out charges for inspection.</p>
          </div>
        </div>
      }
    />
  );
}
