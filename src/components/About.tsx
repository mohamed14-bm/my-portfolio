import ScrollReveal from "@/components/ScrollReveal";
import WavyDivider from "@/components/WavyDivider";
import { RoboticsMotif } from "@/components/RoboticsMotifs";
import { SketchCard, SketchBadge } from "@/components/HandDrawnUI";

const skillGroups = [
  {
    label: "Robotics & Embedded",
    skills: ["ESP32", "Arduino", "Motor Control", "Sensor Integration", "Circuit Design", "PID Control"],
  },
  {
    label: "AI & Automation",
    skills: ["Agents Fine Tuning", "AI Assisted Development", "n8n Workflows"],
  },
  {
    label: "Programming",
    skills: ["C", "C++", "Python", "Embedded Logic"],
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
    label: "Leadership & Social Skills",
    skills: [
      "Leadership",
      "Project Management",
      "Public Speaking",
      "Event Organization",
      "Team Coordination",
      "Debate & Communication",
    ],
  },
];

const languages = ["Arabic", "English", "French"];

export default function About() {
  return (
    <section id="about" className="relative py-24 robotics-surface border-t-2 border-dashed border-border/70">
      <WavyDivider />
      {/* Background Sketched Motifs */}
      <RoboticsMotif kind="team-network" className="section-network-motif" />
      <RoboticsMotif kind="connector" className="section-connector-motif" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="header">
          <div className="mb-12">
            <div className="orange-bar" />
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              About Me
            </h2>
          </div>
        </ScrollReveal>

        {/* Narrative Notebook Sheet with Tape */}
        <ScrollReveal delay={80}>
          <SketchCard decoration="tape" rotation="slight-left" className="p-7 sm:p-10 mb-16 shadow-sketch-lg">
            <div className="space-y-5 font-body text-xl sm:text-2xl leading-relaxed text-muted">
              <p>
                I&apos;m a second year preparatory engineering student at{" "}
                <span className="text-foreground font-bold underline decoration-wavy decoration-accent underline-offset-4">
                  NHSAST
                </span>{" "}
                (National Higher School of Autonomous Systems Technologies) in Sidi Abdellah, Algiers.
              </p>
              <p>
                I teach Analysis 2 through{" "}
                <span className="text-accent font-bold">Epsilite</span>, a volunteer tutoring program
                I co-manage. I&apos;ve built web platforms used by hundreds of students, co-authored an
                Analysis II textbook with Dr. Zeglaoui (200+ pages), authored the solo 219 page Analysis I Companion Book, and
                competed in robotics.
              </p>
              <p>
                Currently, I&apos;m an active member of{" "}
                <span className="text-secondary-accent font-bold">Team Delta</span>, NHSAST&apos;s robotics
                team preparing for the AST Festival across 7 competition entries, from sumo robots to an all-terrain rover.
              </p>
              <p>
                I&apos;m also the <span className="text-foreground font-bold">AI Manager at IEEE NHSAST</span> and
                the <span className="text-accent font-bold">Event Manager at ASTCS</span>.
                I organized events like Seed 2 and the AST Birthday celebration, and I&apos;m part of planning the next Festival.
                I also created <span className="text-secondary-accent font-bold">Unfalables</span>, a philosophical debate
                competition where teams argue opposing positions under timed rounds.
              </p>

              {/* Taped Quote Note */}
              <div className="pt-4">
                <div
                  className="relative p-6 bg-[#fff9c4] text-[#2d2d2d] dark:bg-[#2d3642] dark:text-[#f4f0ea] border-2 border-border shadow-sketch rotate-1 transition-transform hover:rotate-0"
                  style={{
                    borderRadius: "20px 255px 20px 255px / 255px 20px 255px 20px",
                  }}
                >
                  <div className="thumbtack-pin" aria-hidden="true" />
                  <blockquote className="font-heading text-lg sm:text-xl font-bold leading-snug">
                    &ldquo;Most of what I build comes from running into a problem and deciding to fix it:
                    misleading info about NHSAST led to NHSAST-Info,
                    students struggling with modules led to Epsilite,
                    parents calling the teacher every 5 minutes during trips led to the Trips Tracker.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </SketchCard>
        </ScrollReveal>

        {/* Technical Skills Section */}
        <div id="skills" className="mb-16">
          <ScrollReveal>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-8">
              Skills &amp; Technologies
            </h3>
          </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((group, idx) => {
                const tilts = ["rotate-1", "-rotate-1", "rotate-0.5", "-rotate-0.5", "rotate-1", "-rotate-1"];
                return (
                  <ScrollReveal key={group.label} variant="wobble" delay={(idx % 3) * 80}>
                    <div
                      className={`h-full wobbly-card p-6 bg-paper-bright border-2 border-border shadow-sketch hover:shadow-sketch-lg transition-all duration-150 ${tilts[idx % tilts.length]}`}
                      style={{
                        borderRadius: "20px 255px 20px 255px / 255px 20px 255px 20px",
                      }}
                    >
                      <h4 className="font-heading text-xl text-foreground font-bold mb-4 pb-2 border-b-2 border-dashed border-border/40">
                        {group.label}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <SketchBadge
                            key={skill}
                            variant="muted"
                            className="text-sm py-0.5 px-2.5 font-bold"
                          >
                            {skill}
                          </SketchBadge>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

        {/* Languages */}
        <ScrollReveal delay={160}>
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Languages Spoken
            </h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, idx) => (
                <SketchBadge
                  key={lang}
                  variant={idx === 0 ? "accent" : idx === 1 ? "secondary" : "post-it"}
                  rotate={idx % 2 === 1}
                  className="text-lg px-4 py-1.5"
                >
                  {lang}
                </SketchBadge>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
