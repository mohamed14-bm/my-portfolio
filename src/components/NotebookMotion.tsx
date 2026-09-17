"use client";

import { useEffect } from "react";

/** Enhances existing decorative SVGs without adding layout or React scroll renders. */
export default function NotebookMotion() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sketches = Array.from(document.querySelectorAll<SVGSVGElement>(".robotics-motif"));
    const hero = document.querySelector<HTMLElement>(".hero-surface");
    let frame = 0;
    let x = 0;
    let y = 0;

    const observer = window.IntersectionObserver
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("sketch-awake");
              observer?.unobserve(entry.target);
            }
          });
        }, { threshold: 0 })
      : null;

    function resetPointer() {
      cancelAnimationFrame(frame);
      frame = 0;
      hero?.style.removeProperty("--sketch-x");
      hero?.style.removeProperty("--sketch-y");
    }

    function movePointer(event: PointerEvent) {
      if (motion.matches || !pointer.matches || event.pointerType !== "mouse" || !hero) return;
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect();
        const tiltX = ((x - bounds.left) / bounds.width - 0.5) * 10;
        const tiltY = ((y - bounds.top) / bounds.height - 0.5) * 10;
        hero.style.setProperty("--sketch-x", `${tiltX.toFixed(2)}px`);
        hero.style.setProperty("--sketch-y", `${tiltY.toFixed(2)}px`);
        frame = 0;
      });
    }

    function updatePreference() {
      resetPointer();
      observer?.disconnect();
      if (!motion.matches) {
        sketches.forEach((sketch) => {
          if (!sketch.classList.contains("sketch-awake")) observer?.observe(sketch);
        });
      }
    }

    function settleHero(event: FocusEvent) {
      if (!(event.target instanceof Node)) return;
      const target = event.target;
      hero?.querySelectorAll<HTMLElement>(".hero-notes > *").forEach((note) => {
        if (note.contains(target)) note.dataset.entered = "true";
      });
    }

    updatePreference();
    hero?.addEventListener("focusin", settleHero);
    motion.addEventListener("change", updatePreference);
    pointer.addEventListener("change", resetPointer);
    hero?.addEventListener("pointermove", movePointer, { passive: true });
    hero?.addEventListener("pointerleave", resetPointer);
    window.addEventListener("blur", resetPointer);
    return () => {
      observer?.disconnect();
      resetPointer();
      sketches.forEach((sketch) => sketch.classList.remove("sketch-awake"));
      motion.removeEventListener("change", updatePreference);
      pointer.removeEventListener("change", resetPointer);
      hero?.removeEventListener("focusin", settleHero);
      hero?.removeEventListener("pointermove", movePointer);
      hero?.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("blur", resetPointer);
    };
  }, []);

  return null;
}
