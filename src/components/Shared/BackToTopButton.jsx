// BackToTopButton.jsx
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={[
        "fixed bottom-6 right-6 z-50",
        "rounded-full p-3 shadow-lg",
        "bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-800 text-white",
        "transition-opacity duration-300",
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
        "focus:outline-none focus:ring-2 focus:ring-white/60",
      ].join(" ")}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
