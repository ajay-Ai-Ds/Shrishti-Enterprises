import { buildMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata = buildMetadata({
  title: "Safety Nets in Marathahalli Bangalore",
  description: "Safety net installation in Marathahalli, Bangalore. Balcony nets, invisible grills, bird nets. Serving all Marathahalli apartments and villas. Call +91 80880 47056.",
  path: "/safety-nets-marathahalli",
  keywords: ["safety nets marathahalli", "balcony safety nets marathahalli", "invisible grills marathahalli"],
});

const faqs = [
  { question: "Do you install safety nets in Marathahalli?", answer: "Yes. We provide full safety net and invisible grill installation services in Marathahalli and surrounding areas including Borewell Road, HAL Airport Road, and Old Madras Road." },
  { question: "How quickly can you install safety nets in Marathahalli?", answer: "We offer same-day installation in Marathahalli for most standard projects. Call us before noon for same-day service." },
  { question: "Do you serve apartment complexes in Marathahalli?", answer: "Yes. We serve all major apartment complexes in Marathahalli including Brigade, Prestige, Purva, Godrej, and independent villas and rowhouses." },
  { question: "What is the cost of invisible grills in Marathahalli?", answer: "Invisible grills in Marathahalli cost ₹150–₹250 per sq ft. Contact us for a free site inspection and precise quote." },
];

export default function MarathahalliPage() {
  return (
    <LocationPageTemplate
      area="Marathahalli"
      slug="safety-nets-marathahalli"
      imageSrc="/images/balcony.webp"
      imageAlt="Balcony safety net installation in Marathahalli Bangalore"
      faqs={faqs}
      content={
        <div className="space-y-8">
          <div>
            <h2>Safety Nets in Marathahalli, Bangalore</h2>
            <p>Marathahalli is one of Bangalore's most densely populated residential areas, with thousands of apartments, gated communities, and independent homes lining the Outer Ring Road and HAL Airport Road corridors. Shrishti Enterprises has been providing premium safety net installation services in Marathahalli since 2010.</p>
            <p>Whether you live in a high-rise near Borewell Road, a villa near Haralur, or an apartment along the Outer Ring Road, we bring premium quality safety nets and invisible grills directly to your door.</p>
          </div>
          <div>
            <h2>Popular Safety Net Services in Marathahalli</h2>
            <ul>
              <li><strong>Balcony Safety Nets:</strong> Our most requested service in Marathahalli. High-strength nylon nets for balconies at all floor levels.</li>
              <li><strong>Invisible Grills:</strong> Increasingly popular in premium apartments — transparent, strong, and aesthetically superior to iron grills.</li>
              <li><strong>Bird &amp; Pigeon Nets:</strong> Marathahalli's proximity to Bellandur Lake makes bird problems especially common here.</li>
              <li><strong>Children Safety Nets:</strong> For families with young children in staircase-access apartments and villas.</li>
              <li><strong>Cloth Hangers:</strong> Space-saving ceiling cloth drying systems for compact balconies.</li>
            </ul>
          </div>
          <div>
            <h2>Marathahalli Areas We Cover</h2>
            <p>We cover all of Marathahalli including Borewell Road, HAL Airport Road, Kadubeesanahalli, Kundalahalli Gate, Doddanekundi, Ramamurthy Nagar Road, and all adjacent sub-localities.</p>
          </div>
          <div>
            <h2>Why Marathahalli Residents Choose Shrishti Enterprises</h2>
            <p>We understand Marathahalli's unique housing landscape — a mix of older independent houses and new high-rise apartments. Our technicians are experienced in handling all types of balcony and window configurations across different building ages and styles. We carry the right tools and materials for same-day completion of most projects.</p>
          </div>
          <div>
            <h2>Our Commitment to Marathahalli Customers</h2>
            <p>Every installation in Marathahalli comes with: free site inspection, transparent pricing before work begins, clean installation with no damage to tiles or paint, and a 1-year installation warranty. Call us on <a href="tel:+91 80880 47056" className="text-green-700 font-semibold">+91 80880 47056</a> today.</p>
          </div>
        </div>
      }
    />
  );
}
