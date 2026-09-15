"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";

const navItems = [
  { label: "01 // ABOUT", href: "#about" },
  { label: "02 // SYSTEMS", href: "#projects" },
  { label: "03 // PROFILE", href: "#profile" },
  { label: "04 // CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? "bg-paper/92 dark:bg-[#080e1a]/92 backdrop-blur-md border-line shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between h-16">
        {/* Machined Personal Brand (Zero Delta Logo) */}
        <Link
          href="#"
          className="group flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {/* Machined MB Monogram Badge */}
          <div className="w-8 h-8 border border-cyan bg-card-bg flex items-center justify-center relative shadow-[0_0_8px_rgba(0,216,246,0.25)] rounded-[2px] transition-transform duration-150 group-hover:scale-105">
            <span className="font-mono text-xs font-bold text-cyan tracking-tight">
              MB
            </span>
            <span className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-cyan" />
            <span className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-cyan" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm tracking-tight text-navy group-hover:text-cyan transition-colors">
                M. BENNAMANE
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.2 border border-cyan/40 bg-cyan/10 text-cyan font-mono text-[10px] tracking-wider rounded-[2px]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan mr-1 telemetry-pulse" />
                SYS.NOMINAL
              </span>
            </div>
            <span className="font-mono text-[10px] text-muted tracking-wider hidden sm:block">
              // NHSAST AUTONOMOUS_SYSTEMS
            </span>
          </div>
        </Link>

        {/* Central Nav Links + Theme Switcher */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-1 text-xs font-mono text-muted hover:text-navy hover:bg-card-bg rounded-[2px] transition-colors font-medium border border-transparent hover:border-line tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle Pill Button */}
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] border border-line bg-card-bg text-muted hover:text-cyan hover:border-cyan transition-colors text-xs font-mono font-medium"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              title="Toggle theme"
            >
              {isDark ? (
                <>
                  <Sun size={13} className="text-orange" />
                  <span className="text-[11px]">LIGHT</span>
                </>
              ) : (
                <>
                  <Moon size={13} className="text-navy" />
                  <span className="text-[11px]">DARK</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
