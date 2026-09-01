import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";

export const metadata = buildMetadata({
  title: "Gallery — Safety Net Installation Photos",
  description: "View our gallery of safety net and invisible grill installations in Bangalore. Balcony nets, bird nets, children safety nets — see our work quality.",
  path: "/gallery",
  keywords: ["safety net photos bangalore", "invisible grill installation photos", "shrishti enterprises gallery"],
});

const GALLERY_SLOTS = [
  { id: 1, label: "Balcony Installation", path: "/images/balcony.webp" },
  { id: 2, label: "Balcony Safety Net 1", path: "/images/balcony1.webp" },
  { id: 3, label: "Balcony Safety Net 2", path: "/images/balcony2.webp" },
  { id: 4, label: "Balcony Safety Net 3", path: "/images/balcony3.webp" },
  { id: 5, label: "Balcony Safety Net 4", path: "/images/balcony4.webp" },
  { id: 6, label: "Balcony Grille Work", path: "/images/balconygrill.webp" },
  { id: 7, label: "Balcony Grille 2", path: "/images/balconygrill1.webp" },
  { id: 8, label: "Bird Safety Net", path: "/images/birdsafety.webp" },
  { id: 9, label: "Children Safety Net", path: "/images/child.webp" },
  { id: 10, label: "Children Safety Net 2", path: "/images/childrensafetynet.webp" },
  { id: 11, label: "Cloth Hanger", path: "/images/clothhanger.jpg" },
  { id: 12, label: "Duct Area Net 1", path: "/images/ductarea1.webp" },
  { id: 13, label: "Duct Area Net 2", path: "/images/ductarea2.webp" },
  { id: 14, label: "Invisible Grill Installation", path: "/images/invisiblegrill.webp" },
  { id: 15, label: "Monkey Net", path: "/images/monkey.webp" },
  { id: 16, label: "Pigeon Net", path: "/images/pigeonnet.webp" },
];

export default function GalleryPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Gallery", url: `${BUSINESS.url}/gallery` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Breadcrumb items={[{ name: "Gallery", href: "/gallery" }]} />

      <section className="py-16 md:py-20 bg-gradient-to-br from-green-700 to-green-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Work Gallery</h1>
          <p className="text-xl text-green-100">See the quality of our safety net and invisible grill installations across Bangalore.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_SLOTS.map((slot) => (
              <div key={slot.id} className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-square w-full">
                  <Image
                    src={slot.path}
                    alt={slot.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-green-100 px-3 py-3 bg-white">
                  <p className="text-sm font-semibold text-gray-800">{slot.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Like What You See? Book Your Free Inspection" />
    </>
  );
}
