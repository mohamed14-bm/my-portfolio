"use client";

import { useEffect, useRef } from "react";

/** Short-lived graphite strokes; no frame loop while idle or on touch. */
export default function PencilCursor() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const fine = matchMedia("(pointer: fine)");
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let points: { x: number; y: number; time: number }[] = [];
    let frame = 0;
    let ink = "";
    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      points = [];
      ctx.clearRect(0, 0, innerWidth, innerHeight);
    };
    const resize = () => {
      clear();
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = (now: number) => {
      frame = 0;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      points = points.filter((p) => now - p.time < 220);
      ctx.strokeStyle = ink;
      ctx.lineCap = "round";
      ctx.lineWidth = 1.2;
      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1];
        const b = points[i];
        ctx.globalAlpha = Math.max(0, 1 - (now - a.time) / 220) * 0.22;
        ctx.beginPath();
        ctx.moveTo(a.x + 3, a.y + 3);
        ctx.lineTo(b.x + 3, b.y + 3);
        ctx.stroke();
      }
      if (points.length) frame = requestAnimationFrame(draw);
    };
    const move = (event: PointerEvent) => {
      if (!fine.matches || motion.matches || event.pointerType !== "mouse" || document.hidden) return;
      const now = performance.now();
      const last = points.at(-1);
      if (last && (now - last.time > 80 || Math.hypot(event.clientX - last.x, event.clientY - last.y) > 80)) points = [];
      points.push({ x: event.clientX, y: event.clientY, time: now });
      points = points.slice(-18);
      if (!frame) {
        ink = getComputedStyle(document.documentElement).getPropertyValue("--foreground").trim();
        frame = requestAnimationFrame(draw);
      }
    };
    resize();
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("blur", clear);
    window.addEventListener("scroll", clear, { passive: true });
    document.documentElement.addEventListener("pointerleave", clear);
    document.addEventListener("visibilitychange", clear);
    motion.addEventListener("change", clear);
    fine.addEventListener("change", clear);
    return () => {
      clear();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("resize", resize);
      window.removeEventListener("blur", clear);
      window.removeEventListener("scroll", clear);
      document.documentElement.removeEventListener("pointerleave", clear);
      document.removeEventListener("visibilitychange", clear);
      motion.removeEventListener("change", clear);
      fine.removeEventListener("change", clear);
    };
  }, []);
  return <canvas ref={ref} className="pencil-cursor-canvas" aria-hidden="true" />;
}
