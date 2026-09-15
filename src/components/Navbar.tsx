"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-paper/85 dark:bg-[#080f1d]/85 backdrop-blur-md border-b border-line shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <Link
          href="#"
          className="flex items-center gap-2.5"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="w-7 h-7 rounded-md bg-navy text-paper dark:bg-cyan dark:text-[#080f1d] flex items-center justify-center font-mono text-xs font-bold">
            MB
          </span>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-navy">
              Mohamed Bennamane
            </span>
            <span className="text-[11px] text-muted hidden sm:block">
              NHSAST &middot; Autonomous Systems
            </span>
          </div>
        </Link>

        {/* Nav Links + Theme Toggle */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden sm:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-1 text-xs text-muted hover:text-navy hover:bg-paper-wash rounded-md transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Clean Theme Toggle Button */}
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-line bg-card-bg text-muted hover:text-navy hover:border-muted transition-colors text-xs font-medium cursor-pointer"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? (
                <>
                  <Sun size={14} className="text-orange" />
                  <span className="text-xs">Light</span>
                </>
              ) : (
                <>
                  <Moon size={14} className="text-navy" />
                  <span className="text-xs">Dark</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
