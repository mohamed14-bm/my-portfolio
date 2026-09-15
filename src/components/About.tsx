import ScrollReveal from "@/components/ScrollReveal";

const skillGroups = [
  {
    label: "Web Development",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Supabase"],
  },
  {
    label: "Robotics & Embedded",
    skills: ["ESP32", "Arduino", "Motor Control", "QTR Sensors", "Circuit Design", "L298N"],
  },
  {
    label: "CAD & Fabrication",
    skills: ["SolidWorks", "Fusion 360", "3D Printing", "Chassis Design"],
  },
  {
    label: "Technical Writing",
    skills: ["LaTeX", "Markdown Templates", "Course Materials", "Textbook Authoring"],
  },
  {
    label: "Programming",
    skills: ["C", "C++", "Python", "Embedded Logic"],
  },
  {
    label: "AI & Automation",
    skills: ["AI-Assisted Development", "Agents Fine-Tuning", "n8n Workflows"],
  },
];

const languages = ["Arabic", "English", "French"];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-mono text-accent tracking-widest uppercase">01</span>
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-mono text-muted tracking-widest uppercase">About</span>
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={100}>
          <div className="space-y-5 mb-16">
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
              I&apos;m a second-year preparatory student at{" "}
              <span className="text-accent font-medium">NHSAST</span>{" "}
              (National Higher School of Autonomous Systems Technologies) in Sidi Abdellah, Algiers.
            </p>
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
              I teach Analysis 2 through{" "}
              <span className="text-warm font-medium">Epsilite</span>, a volunteer tutoring program
              I co-manage. I&apos;ve built platforms used by hundreds of students, co-authored an
              Analysis II textbook with Dr. Zeglaoui, wrote a solo Analysis I review book, and
              competed in robotics. I&apos;m currently part of{" "}
              <span className="text-accent font-medium">Team Delta</span>, NHSAST&apos;s robotics
              team competing at the AST Festival with 7 entries — from sumo robots to a dog robot.
            </p>
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
              I&apos;m the <span className="text-accent font-medium">AI Manager at IEEE NHSAST</span> and
              the <span className="text-warm font-medium">Event Manager at ASTCS</span> (the Scientific Club AST).
              I organized events like Seed 2 and the AST Birthday
              celebration, and I&apos;m part of planning the next Festival.
              I also created{" "}
              <span className="text-accent font-medium">Unfalables</span> — a philosophical
              debate competition where teams argue opposing positions under timed rounds.
            </p>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Most of what I build comes from running into a problem and deciding to fix it —
              misleading info about NHSAST led to NHSAST-Info,
              students struggling with modules led to Epsilite,
              parents calling the teacher every 5 minutes during trips led to the Trips Tracker.
            </p>
          </div>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-mono text-muted tracking-widest uppercase mb-3">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg border border-border bg-surface text-foreground/80 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Languages */}
        <ScrollReveal delay={300}>
          <div>
            <h3 className="text-xs font-mono text-muted tracking-widest uppercase mb-3">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1.5 text-sm rounded-lg border border-border bg-surface text-foreground/80 font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
