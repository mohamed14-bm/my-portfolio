"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 dark:bg-[#0b1730]/90 backdrop-blur-md border-b border-line shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <Link
          href="#"
          className="group flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="relative w-7 h-6 flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5">
            <Image
              src="/images/delta-logo-dark.svg"
              alt="Delta mark"
              fill
              className="object-contain hidden dark:block"
            />
            <Image
              src="/images/delta-logo-light.svg"
              alt="Delta mark"
              fill
              className="object-contain block dark:hidden"
            />
          </div>
          <span className="font-display font-semibold text-sm tracking-wider uppercase text-navy group-hover:text-orange transition-colors">
            MOHAMED <span className="text-orange">BENNAMANE</span>
          </span>
        </Link>

        {/* Nav links + Theme toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-muted hover:text-navy hover:bg-card-bg rounded-md transition-colors font-medium border border-transparent hover:border-line"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Delta-style Theme Toggle Button */}
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-line bg-card-bg text-navy hover:border-orange hover:text-orange transition-all text-xs font-mono font-semibold"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? (
                <>
                  <Sun size={14} className="text-orange animate-spin-slow" />
                  <span className="hidden xs:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon size={14} className="text-navy" />
                  <span className="hidden xs:inline">Dark</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
