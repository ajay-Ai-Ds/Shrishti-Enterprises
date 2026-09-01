import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ol className="flex items-center flex-wrap gap-1.5 text-sm text-gray-500">
          {all.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              )}
              {i === all.length - 1 ? (
                <span className="text-green-700 font-medium">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-green-600 transition-colors">{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
