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
    skills: ["LaTeX", "TikZ", "Markdown", "Pedagogical Templates", "Textbook Authoring"],
  },
  {
    label: "Programming",
    skills: ["C", "C++", "Python", "Embedded Logic"],
  },
  {
    label: "AI & Automation",
    skills: ["Agents Fine-Tuning", "AI-Assisted Development", "n8n Workflows"],
  },
];

const languages = ["Arabic", "English", "French"];

export default function About() {
  return (
    <section id="about" className="relative py-20 robotics-surface border-t border-line/60">
      {/* Background Motifs */}
      <RoboticsMotif kind="team-network" className="section-network-motif" />
      <RoboticsMotif kind="connector" className="section-connector-motif" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-10">
            <div className="orange-bar" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy">
              About Me
            </h2>
          </div>
        </ScrollReveal>

        {/* Narrative Card */}
        <ScrollReveal delay={80}>
          <div className="clean-card p-6 sm:p-8 mb-14">
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted">
              <p>
                I&apos;m a second-year preparatory engineering student at{" "}
                <span className="text-navy font-semibold">NHSAST</span>{" "}
                (National Higher School of Autonomous Systems Technologies) in Sidi Abdellah, Algiers.
              </p>
              <p>
                I teach Analysis 2 through{" "}
                <span className="text-orange font-semibold">Epsilite</span>, a volunteer tutoring program
                I co-manage. I&apos;ve built web platforms used by hundreds of students, co-authored an
                Analysis II textbook with Dr. Zeglaoui (200+ pages), wrote a solo Analysis I book, and
                competed in robotics.
              </p>
              <p>
                Currently, I&apos;m an active member of{" "}
                <span className="text-cyan font-semibold">Team Delta</span>, NHSAST&apos;s robotics
                team preparing for the AST Festival across 7 competition entries — from sumo robots to an all-terrain rover.
              </p>
              <p>
                I&apos;m also the <span className="text-navy font-semibold">AI Manager at IEEE NHSAST</span> and
                the <span className="text-orange font-semibold">Event Manager at ASTCS</span> (the Scientific Club AST).
                I organized events like Seed 2 and the AST Birthday celebration, and I&apos;m part of planning the next Festival.
                I also created <span className="text-cyan font-semibold">Unfalables</span> — a philosophical debate
                competition where teams argue opposing positions under timed rounds.
              </p>
              <div className="pt-2">
                <blockquote className="p-4 rounded-lg border border-line bg-paper-wash/60 text-navy text-sm font-medium leading-relaxed italic">
                  &ldquo;Most of what I build comes from running into a problem and deciding to fix it —
                  misleading info about NHSAST led to NHSAST-Info,
                  students struggling with modules led to Epsilite,
                  parents calling the teacher every 5 minutes during trips led to the Trips Tracker.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Technical Skills Section */}
        <ScrollReveal delay={120}>
          <div id="skills" className="mb-14">
            <h3 className="font-display text-2xl font-bold text-navy mb-6">
              Skills &amp; Technologies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillGroups.map((group) => (
                <div key={group.label} className="clean-card p-5">
                  <h4 className="font-mono text-xs text-muted uppercase tracking-wider mb-3 font-semibold">
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-md border border-line bg-paper text-navy font-medium"
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
        <ScrollReveal delay={160}>
          <div>
            <h3 className="font-mono text-xs text-muted tracking-widest uppercase mb-3 font-semibold">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3.5 py-1.5 text-sm rounded-lg border border-line bg-card-bg text-navy font-medium"
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
