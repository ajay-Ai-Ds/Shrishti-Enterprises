import { buildMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

export const metadata = buildMetadata({
  title: "Safety Nets in Whitefield Bangalore",
  description: "Premium safety net installation in Whitefield, Bangalore. Balcony nets, invisible grills, bird nets. Serving ITPL, Varthur, Kadugodi and all Whitefield areas. Call +91 80880 47056.",
  path: "/safety-nets-whitefield",
  keywords: ["safety nets whitefield", "balcony safety nets whitefield", "invisible grills whitefield bangalore"],
});

const faqs = [
  { question: "Do you install safety nets in Whitefield, Bangalore?", answer: "Yes. Shrishti Enterprises provides full safety net installation services in Whitefield and all surrounding areas including ITPL, Varthur, Kadugodi, Brookefield, and Nallurhalli." },
  { question: "How long does safety net installation take in Whitefield?", answer: "Most installations in Whitefield take 2–4 hours. We offer same-day installation when you call before noon." },
  { question: "What is the price of safety nets in Whitefield?", answer: "Safety net prices in Whitefield are the same as across Bangalore: ₹12–₹25 per sq ft depending on net type. Call us for a free site inspection and exact quote." },
  { question: "Do you serve apartments in ITPL, Whitefield?", answer: "Yes. We serve all major apartment complexes in Whitefield including those near ITPL, Marathahalli Bridge, Varthur Main Road, and Brookefield." },
];

export default function WhitefieldPage() {
  return (
    <LocationPageTemplate
      area="Whitefield"
      slug="safety-nets-whitefield"
      imageSrc="/images/team1.webp"
      imageAlt="Whitefield safety nets installation team"
      faqs={faqs}
      content={
        <div className="space-y-8">
          <div>
            <h2>Safety Nets in Whitefield, Bangalore</h2>
            <p>Whitefield is one of Bangalore's fastest-growing residential and commercial hubs. With thousands of apartments, IT campuses, and gated communities, the demand for safety nets and invisible grills in Whitefield has grown significantly over the past decade.</p>
            <p>Shrishti Enterprises has been serving Whitefield residents since 2010. We provide premium quality balcony safety nets, invisible grills, bird nets, pigeon nets, children safety nets, cloth hangers, and construction safety nets across all parts of Whitefield — from ITPL and Varthur to Kadugodi and Brookefield.</p>
          </div>
          <div>
            <h2>Why Safety Nets Are Important in Whitefield Apartments</h2>
            <p>Whitefield's apartments are typically high-rise with open balconies and large windows. Families with young children and pets face real risks from unprotected balcony openings. Our safety nets provide a transparent, strong barrier that keeps your family safe without compromising your view of Whitefield's greenery.</p>
          </div>
          <div>
            <h2>Our Services in Whitefield</h2>
            <ul>
              <li><strong>Balcony Safety Nets:</strong> High-strength UV-stabilised nets for all balcony types in Whitefield apartments.</li>
              <li><strong>Invisible Grills:</strong> SS316 cable grills for a premium, view-preserving safety solution.</li>
              <li><strong>Bird &amp; Pigeon Nets:</strong> Effective bird control for Whitefield's many bird-prone areas.</li>
              <li><strong>Children Safety Nets:</strong> Extra-strong nets for staircases, balconies, and windows.</li>
              <li><strong>Cloth Hangers:</strong> Ceiling cloth drying systems for compact Whitefield balconies.</li>
              <li><strong>Construction Safety Nets:</strong> For Whitefield's ongoing residential and commercial construction projects.</li>
            </ul>
          </div>
          <div>
            <h2>Whitefield Areas We Cover</h2>
            <p>We provide safety net installation across all Whitefield sub-areas including ITPL, Varthur, Kadugodi, Brookefield, Nallurhalli, Channasandra, Kundalahalli, Mahadevapura, Hoodi, Thubarahalli, and all adjacent areas.</p>
          </div>
          <div>
            <h2>Response Time in Whitefield</h2>
            <p>We aim to respond to all inquiries from Whitefield within 30 minutes. Free site inspection is available 7 days a week from 8 AM to 8 PM. Call us on <a href="tel:+91 80880 47056" className="text-green-700 font-semibold">+91 80880 47056</a> or WhatsApp us for a same-day appointment.</p>
          </div>
          <div>
            <h2>Why Choose Shrishti Enterprises in Whitefield?</h2>
            <p>With 15+ years of experience and 5000+ installations in Bangalore, we are Whitefield's most trusted safety net company. Our 4.9-star Google rating from 320+ verified customers speaks for itself. We use only premium materials, offer transparent pricing, and back every installation with a 1-year warranty.</p>
          </div>
        </div>
      }
    />
  );
}
