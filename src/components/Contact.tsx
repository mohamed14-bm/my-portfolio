import Link from "next/link";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { RoboticsMotif } from "@/components/RoboticsMotifs";

const channels = [
  {
    label: "GitHub",
    value: "mohamed14-bm",
    href: "https://github.com/mohamed14-bm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "mohamed-bennamane",
    href: "https://www.linkedin.com/in/mohamed-bennamane-22402b264/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "mbennamane4@gmail.com",
    href: "mailto:mbennamane4@gmail.com",
    icon: <Mail size={16} />,
  },
  {
    label: "Telegram",
    value: "@MohamedBennamne",
    href: "https://t.me/MohamedBennamne",
    icon: <Send size={16} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 robotics-surface border-t border-line/60">
      {/* Background Schematics */}
      <RoboticsMotif kind="connector" className="section-connector-motif" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[50px_1fr] gap-6 sm:gap-8 items-start">
          {/* Technical Rail */}
          <div className="hidden md:flex flex-col items-start gap-2 text-cyan font-mono text-xs font-bold tracking-widest pt-2">
            <span>04</span>
            <div className="w-px h-56 bg-line" />
            <span className="text-[10px] text-muted rotate-90 origin-left translate-y-12 uppercase">
              SYS.DOWNLINK
            </span>
          </div>

          <div>
            {/* Header */}
            <ScrollReveal>
              <div className="mb-10">
                <div className="orange-bar" />
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
                  Telemetry Downlink &amp; <span className="text-orange">Contact</span>
                </h2>
                <p className="text-base sm:text-lg text-muted mt-2 max-w-xl leading-relaxed">
                  Open to engineering collaborations, robotics competitions, research initiatives, and internships.
                </p>
              </div>
            </ScrollReveal>

            {/* Communication Ports Grid */}
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mb-16">
                {channels.map((ch) => (
                  <Link
                    key={ch.label}
                    href={ch.href}
                    target={ch.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={ch.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="delta-card p-4 sm:p-5 flex items-center justify-between group border border-line corner-tick"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-[2px] border border-line bg-paper flex items-center justify-center text-cyan group-hover:text-orange group-hover:border-orange transition-colors">
                        {ch.icon}
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-muted tracking-wider uppercase font-semibold">
                          {ch.label}
                        </div>
                        <div className="font-mono text-xs sm:text-sm text-navy font-bold">
                          {ch.value}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-muted group-hover:text-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Technical Footer */}
        <div className="mt-16 pt-8 border-t border-line/60 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-muted">
          <div>
            MOHAMED BENNAMANE &middot; NHSAST SIDI ABDELLAH &middot; <span className="text-cyan">36.7525° N, 3.0420° E</span>
          </div>
          <div className="text-orange font-bold tracking-wider">
            BUILD &middot; TEST &middot; LEARN &middot; INNOVATE
          </div>
        </div>
      </div>
    </section>
  );
}
