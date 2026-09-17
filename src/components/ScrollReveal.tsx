"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "pop" | "wobble" | "header";
}

export default function ScrollReveal({ children, className = "", delay = 0, variant = "up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!node || !window.IntersectionObserver) return;

    // SSR and no-JS content stays visible. Enhance only after hydration.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) reveal();
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

    function reveal() {
      if (!node) return;
      observer.unobserve(node);
      // A queued intersection callback must not override a focus settlement.
      if (node.dataset.reveal === "static") return;
      node.dataset.reveal = "visible";
    }

    function updatePreference() {
      if (!node) return;
      if (motion.matches) {
        node.dataset.reveal = "static";
        observer.disconnect();
      } else if (!node.dataset.reveal) {
        node.dataset.reveal = "pending";
        observer.observe(node);
      }
    }

    function settle() {
      if (!node) return;
      node.dataset.reveal = "static";
      observer.unobserve(node);
    }

    updatePreference();
    node.addEventListener("focusin", settle);
    motion.addEventListener("change", updatePreference);
    return () => {
      observer.disconnect();
      node.removeEventListener("focusin", settle);
      motion.removeEventListener("change", updatePreference);
      delete node.dataset.reveal;
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal reveal-${variant} ${className}`}
      style={{ "--reveal-delay": `${Math.min(Math.max(delay, 0), 400)}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

