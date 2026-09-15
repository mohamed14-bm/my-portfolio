import Link from "next/link";
import { ArrowRight, Mail, Send } from "lucide-react";
import { RoboticsMotif } from "@/components/RoboticsMotifs";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/mohamed14-bm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-bennamane-22402b264/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:mbennamane4@gmail.com",
    icon: <Mail size={16} />,
  },
  {
    label: "Telegram",
    href: "https://t.me/MohamedBennamne",
    icon: <Send size={16} />,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center robotics-surface overflow-hidden pt-24 pb-16 blueprint-grid">
      {/* Background Robotics & Circuit Motifs */}
      <RoboticsMotif kind="microcontroller" className="home-controller-motif" />
      <RoboticsMotif kind="signal-grid" className="home-trace-motif" />
      <RoboticsMotif kind="robot-arm" className="home-arm-motif" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[50px_1fr] gap-6 sm:gap-8 items-start">
          {/* Technical Vertical Rail */}
          <div className="hidden md:flex flex-col items-start gap-2 text-cyan font-mono text-xs font-bold tracking-widest pt-2">
            <span>01</span>
            <div className="w-px h-52 bg-line" />
            <span className="text-[10px] text-muted rotate-90 origin-left translate-y-10 uppercase">
              SYS.AUTON
            </span>
          </div>

          {/* Main Hero Card with Corner Ticks */}
          <div className="delta-card p-6 sm:p-10 corner-tick relative border border-line">
            {/* Top Status Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-2.5 py-1 bg-paper border border-line font-mono text-[11px] text-cyan tracking-wider font-semibold rounded-[2px]">
                NHSAST PREP CYCLE
              </span>
              <span className="px-2.5 py-1 bg-paper border border-line font-mono text-[11px] text-orange tracking-wider font-semibold rounded-[2px]">
                ROBOTICS &amp; CONTROL
              </span>
              <span className="px-2.5 py-1 bg-paper border border-line font-mono text-[11px] text-muted tracking-wider rounded-[2px]">
                TEAM DELTA COMPETITOR
              </span>
              <span className="px-2.5 py-1 bg-paper border border-line font-mono text-[11px] text-muted tracking-wider rounded-[2px]">
                C / C++ / EMBEDDED
              </span>
            </div>

            {/* Registration Marker */}
            <div className="orange-bar" />

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.05] mb-2">
              Mohamed Bennamane
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-orange tracking-tight mb-6">
              Autonomous Systems &amp; Robotics Engineer
            </div>

            {/* Engineering Mission Prose */}
            <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed mb-6">
              Second-year preparatory student at NHSAST (National Higher School of Autonomous Systems Technologies).
              I build tools that solve real problems — from autonomous maze-solving robots and school bus tracking
              telemetry to university calculus textbooks.
            </p>

            {/* Key Telemetry Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 px-4 my-6 border border-line bg-paper/60 rounded-[2px] max-w-2xl">
              <div>
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">
                  DEPLOYED SYSTEMS
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-navy">
                  07 BUILDS
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">
                  STUDENT IMPACT
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-cyan">
                  1,500+ USERS
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">
                  COMPETITIONS
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-orange">
                  AST FESTIVAL
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">
                  CORE FIRMWARE
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-navy">
                  C / C++ / ESP32
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 mb-8">
              <Link
                href="#projects"
                className="chamfer-btn inline-flex items-center gap-2 px-5 py-2.5 bg-cyan hover:bg-white text-paper font-mono text-xs font-bold tracking-wider uppercase transition-colors shadow-[0_0_12px_rgba(0,216,246,0.3)]"
              >
                <span>Inspect Systems [→]</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-line hover:border-cyan text-muted hover:text-navy font-mono text-xs font-semibold tracking-wider uppercase transition-colors rounded-[2px] bg-card-bg"
              >
                <span>Telemetry Downlink [↗]</span>
              </Link>
            </div>

            {/* Direct Connect Ports */}
            <div className="flex items-center gap-2 pt-4 border-t border-line/60">
              <span className="font-mono text-[11px] text-muted uppercase tracking-wider mr-2">
                PORTS:
              </span>
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-8 h-8 rounded-[2px] border border-line bg-paper text-muted hover:text-cyan hover:border-cyan transition-colors"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
