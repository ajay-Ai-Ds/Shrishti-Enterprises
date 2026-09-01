"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`group fixed bottom-6 left-6 z-50 w-12 h-12 sm:w-13 sm:h-13 rounded-full text-white flex items-center justify-center transition-all duration-300 shadow-[0_4px_18px_rgba(172,123,37,0.35)] hover:shadow-[0_6px_24px_rgba(172,123,37,0.5)] hover:scale-110 active:scale-95 cursor-pointer border border-white/30 focus:outline-hidden ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      style={{
        background: "linear-gradient(135deg, #AC7B25 0%, #C59740 100%)",
      }}
    >
      {/* Floating upward moving indicator arrow */}
      <div className="flex flex-col items-center justify-center relative">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-y-1 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </div>

      {/* Tooltip on hover */}
      <span className="absolute left-16 bg-[#1E2125] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Back to Top ↑
      </span>
    </button>
  );
}
