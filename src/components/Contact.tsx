import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const links = [
  { label: "GitHub", href: "https://github.com/mohamed14-bm" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-bennamane-22402b264/" },
  { label: "Email", href: "mailto:mbennamane4@gmail.com" },
  { label: "Telegram", href: "https://t.me/MohamedBennamne" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-mono text-accent tracking-widest uppercase">03</span>
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-mono text-muted tracking-widest uppercase">Contact</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="text-center">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">
              Want to work together?
            </h2>
            <p className="text-lg text-muted max-w-md mx-auto mb-10">
              I&apos;m open to collaborations, internships, and interesting projects.
              Reach out through any of these.
            </p>

            <div className="flex items-center justify-center flex-wrap gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="px-5 py-2.5 rounded-xl border border-border bg-surface text-foreground/80 font-medium text-sm hover:border-border-hover hover:bg-surface-hover hover:text-foreground transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-6 mt-24 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted">
            Built by Mohamed Bennamane
          </span>
          <span className="text-xs text-muted/50 font-mono">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
}
