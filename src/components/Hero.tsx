import Link from "next/link";
import { ArrowDown, ArrowRight, Mail, Send } from "lucide-react";
import { RoboticsMotif } from "@/components/RoboticsMotifs";
import { SketchButton, SketchBadge, SketchArrow } from "@/components/HandDrawnUI";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/mohamed14-bm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-bennamane-22402b264/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:mbennamane4@gmail.com",
    icon: <Mail size={18} className="stroke-[2.5]" />,
  },
  {
    label: "Telegram",
    href: "https://t.me/MohamedBennamne",
    icon: <Send size={18} className="stroke-[2.5]" />,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center robotics-surface overflow-hidden pt-28 pb-16">
      {/* Background Sketched Robotics Motifs */}
      <RoboticsMotif kind="microcontroller" className="home-controller-motif" />
      <RoboticsMotif kind="signal-grid" className="home-trace-motif" />
      <RoboticsMotif kind="robot-arm" className="home-arm-motif" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <div className="max-w-3xl">
          {/* Handwritten Status Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <SketchBadge variant="accent" rotate={true}>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              NHSAST &middot; 2nd Year Prep
            </SketchBadge>
            <SketchBadge variant="post-it">
              Autonomous Systems &amp; Robotics
            </SketchBadge>
            <SketchBadge variant="default">
              Team Delta Robotics
            </SketchBadge>
          </div>

          {/* Sketched Marker Indicator Bar */}
          <div className="orange-bar" />

          {/* Heading in Kalam */}
          <h1 className="font-heading text-5xl sm:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-4">
            Mohamed Bennamane
          </h1>

          <p className="font-heading text-2xl sm:text-3xl font-semibold text-secondary-accent mb-6 leading-tight">
            Competing in robotics, building platforms, and helping other students.
          </p>

          {/* Grounded Bio Prose in Patrick Hand */}
          <p className="font-body text-xl sm:text-2xl text-muted leading-relaxed mb-8 max-w-2xl">
            I&apos;m an engineering student at NHSAST in Sidi Abdellah, Algiers.
            Most of what I build comes from running into a problem and deciding to fix it, from
            school information sites and bus tracking platforms to competitive robotics and published calculus textbooks.
          </p>

          {/* Actions with Hand-Drawn Arrow */}
          <div className="relative flex flex-wrap items-center gap-4 mb-10">
            <SketchButton href="#projects" variant="primary" icon={<ArrowDown size={18} className="stroke-[2.5]" />}>
              View Projects
            </SketchButton>

            <SketchButton href="#contact" variant="secondary" icon={<ArrowRight size={18} className="stroke-[2.5]" />}>
              Get in Touch
            </SketchButton>

            {/* Hand-drawn arrow pointing to CTA (desktop only) */}
            <div className="hidden md:flex items-center gap-2 ml-4 -rotate-6 pointer-events-none select-none">
              <SketchArrow direction="right" className="w-10 h-6 stroke-accent" />
              <span className="font-heading text-base font-bold text-accent">
                take a look!
              </span>
            </div>
          </div>

          {/* Social Stamp Links */}
          <div className="flex items-center gap-3 pt-6 border-t-2 border-dashed border-border/60">
            <span className="font-body text-lg font-bold text-muted mr-1">
              Connect:
            </span>
            {socials.map((s, idx) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`flex items-center justify-center w-11 h-11 border-2 border-border bg-paper-bright text-foreground hover:bg-accent hover:text-white shadow-sketch-sm transition-all duration-100 cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-sketch-none ${
                  idx % 2 === 0 ? "rotate-1 hover:-rotate-1" : "-rotate-1 hover:rotate-2"
                }`}
                style={{
                  borderRadius: "120px 15px 100px 12px / 12px 100px 12px 120px",
                }}
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
