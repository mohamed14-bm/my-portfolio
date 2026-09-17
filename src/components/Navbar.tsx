"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const emptySubscribe = () => () => {};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        scrolled
          ? "bg-paper/95 border-b-2 border-border shadow-sketch-sm"
          : "bg-transparent border-b-2 border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 flex items-center justify-between h-18">
        {/* Brand */}
        <Link
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
          }}
        >
          {/* Hand-stamped wobbly monogram badge */}
          <span
            className="w-10 h-10 border-2 border-border bg-paper-bright text-foreground group-hover:bg-accent group-hover:text-white flex items-center justify-center font-heading text-lg font-bold shadow-sketch-sm -rotate-2 group-hover:rotate-1 transition-all duration-100"
            style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
          >
            MB
          </span>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl tracking-tight text-foreground leading-none">
              Mohamed Bennamane
            </span>
            <span className="font-body text-sm text-muted hidden sm:block leading-tight">
              NHSAST &middot; Autonomous Systems &amp; Robotics
            </span>
          </div>
        </Link>

        {/* Nav Links + Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-6">
          <nav className="hidden sm:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-1 font-body text-lg font-bold text-muted hover:text-foreground wavy-hover transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Hand-drawn Theme Toggle Button */}
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-border bg-paper-bright text-foreground shadow-sketch-sm font-body text-base font-bold transition-all duration-100 cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-sketch-none"
              style={{ borderRadius: "120px 15px 100px 12px / 12px 100px 12px 120px" }}
              aria-label={`Switch to ${isDark ? "Warm Paper" : "Chalkboard"} mode`}
            >
              {isDark ? (
                <>
                  <Sun size={16} className="text-accent stroke-[2.5]" />
                  <span className="hidden xs:inline">Paper</span>
                </>
              ) : (
                <>
                  <Moon size={16} className="text-secondary-accent stroke-[2.5]" />
                  <span className="hidden xs:inline">Chalkboard</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
