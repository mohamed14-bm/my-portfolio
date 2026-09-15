import ScrollReveal from "@/components/ScrollReveal";
import { RoboticsMotif } from "@/components/RoboticsMotifs";

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
    <section id="about" className="relative py-28 robotics-surface border-t border-line/60">
      {/* Robotics Background Motif */}
      <RoboticsMotif kind="team-network" className="section-network-motif" />
      <RoboticsMotif kind="connector" className="section-connector-motif" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 sm:gap-10 items-start">
          {/* Delta-style Technical Rail */}
          <div className="hidden md:flex flex-col items-start gap-3 text-orange font-mono text-xs font-semibold tracking-widest pt-2">
            <span>02</span>
            <div className="w-px h-64 bg-line" />
            <span className="text-[10px] text-muted rotate-90 origin-left translate-y-12 uppercase">
              SYS.PROFILE
            </span>
          </div>

          <div>
            {/* Section Header */}
            <ScrollReveal>
              <div className="mb-10">
                <div className="orange-bar" />
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
                  Engineering Profile &amp; <span className="text-orange">Background</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal delay={100}>
              <div className="space-y-4 mb-14 text-base sm:text-lg leading-relaxed text-muted max-w-3xl">
                <p>
                  I&apos;m a second-year preparatory student at{" "}
                  <span className="text-navy font-semibold">NHSAST</span>{" "}
                  (National Higher School of Autonomous Systems Technologies) in Sidi Abdellah, Algiers.
                </p>
                <p>
                  I teach Analysis 2 through{" "}
                  <span className="text-orange font-semibold">Epsilite</span>, a volunteer tutoring program
                  I co-manage. I&apos;ve built platforms used by hundreds of students, co-authored an
                  Analysis II textbook with Dr. Zeglaoui, wrote a solo Analysis I book, and
                  competed in robotics. I&apos;m currently part of{" "}
                  <span className="text-cyan font-semibold">Team Delta</span>, NHSAST&apos;s robotics
                  team competing at the AST Festival across 7 competition entries — from sumo robots to an all-terrain rover.
                </p>
                <p>
                  I&apos;m the <span className="text-navy font-semibold">AI Manager at IEEE NHSAST</span> and
                  the <span className="text-orange font-semibold">Event Manager at ASTCS</span> (the Scientific Club AST).
                  I organized events like Seed 2 and the AST Birthday celebration, and I&apos;m part of planning the next Festival.
                  I also created <span className="text-cyan font-semibold">Unfalables</span> — a philosophical debate
                  competition where teams argue opposing positions under timed rounds.
                </p>
                <p className="p-4 rounded-lg border border-line bg-card-bg text-navy text-sm font-medium">
                  &ldquo;Most of what I build comes from running into a problem and deciding to fix it —
                  misleading info about NHSAST led to NHSAST-Info,
                  students struggling with modules led to Epsilite,
                  parents calling the teacher every 5 minutes during trips led to the Trips Tracker.&rdquo;
                </p>
              </div>
            </ScrollReveal>

            {/* Technical Skills Grid */}
            <ScrollReveal delay={200}>
              <div className="mb-14">
                <h3 className="font-mono text-xs text-orange font-semibold tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                  Technical Competencies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {skillGroups.map((group) => (
                    <div
                      key={group.label}
                      className="delta-card p-5 rounded-xl border border-line"
                    >
                      <h4 className="font-mono text-xs text-muted tracking-wider uppercase mb-3 font-semibold">
                        {group.label}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs rounded-md border border-line bg-paper text-navy font-mono font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Languages */}
            <ScrollReveal delay={250}>
              <div>
                <h3 className="font-mono text-xs text-orange font-semibold tracking-widest uppercase mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                  Working Languages
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 text-sm rounded-lg border border-line bg-card-bg text-navy font-mono font-semibold"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
