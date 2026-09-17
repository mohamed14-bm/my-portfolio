"use client";

import { useEffect, useRef } from "react";

/**
 * Hand-drawn wavy divider whose path draws itself when it
 * scrolls into view. Irregular Y values for authentic sketch feel.
 */
export default function WavyDivider({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    node.classList.add("wavy-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("wavy-drawn");
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`wavy-divider ${className}`}
      viewBox="0 0 1200 26"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 14 Q 30 6, 55 15 T 120 12 T 175 16 T 240 11 T 310 15 T 370 10 T 440 16 T 510 12 T 580 15 T 640 9 T 720 16 T 790 12 T 860 15 T 930 10 T 1000 14 T 1070 11 T 1140 16 T 1200 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength={100}
        style={{ transform: "rotate(-0.3deg)", transformOrigin: "center" }}
      />
    </svg>
  );
}
