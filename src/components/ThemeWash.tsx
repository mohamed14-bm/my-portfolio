"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeContext";

/**
 * Chalk-dust color wash that plays briefly whenever the theme changes.
 * More visible than the first attempt — 35% opacity, 400ms.
 */
export default function ThemeWash() {
  const { theme } = useTheme();
  const prevTheme = useRef(theme);
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prevTheme.current === theme) return;
    prevTheme.current = theme;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    const animation = node.current?.animate(
      [{ opacity: 0.35 }, { opacity: 0 }],
      { duration: 400, easing: "ease-out" }
    );
    const stop = () => { if (reduced.matches) animation?.cancel(); };
    reduced.addEventListener("change", stop);
    return () => {
      animation?.cancel();
      reduced.removeEventListener("change", stop);
    };
  }, [theme]);

  return (
    <div
      ref={node}
      className="theme-wash"
      aria-hidden="true"
    />
  );
}
