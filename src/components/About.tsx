import ScrollReveal from "@/components/ScrollReveal";
import { RoboticsMotif } from "@/components/RoboticsMotifs";

const skillModules = [
  {
    serial: "MOD.01",
    label: "Web Architecture",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Supabase"],
  },
  {
    serial: "MOD.02",
    label: "Embedded Systems & Robotics",
    skills: ["ESP32", "Arduino", "Motor Control", "QTR Sensors", "Circuit Design", "L298N"],
  },
  {
    serial: "MOD.03",
    label: "CAD & Rapid Prototyping",
    skills: ["SolidWorks", "Fusion 360", "3D Printing", "Chassis Design", "Kinematics"],
  },
  {
    serial: "MOD.04",
    label: "LaTeX & Technical Authoring",
    skills: ["LaTeX", "TikZ", "Markdown Pipelines", "Pedagogical Layouts", "Book Publishing"],
  },
  {
    serial: "MOD.05",
    label: "Firmware & Systems Code",
    skills: ["C", "C++", "Python", "State Machines", "Low-Level Logic"],
  },
  {
    serial: "MOD.06",
    label: "AI Systems & Automation",
    skills: ["AI-Assisted Workflows", "Agent Fine-Tuning", "n8n Pipelines", "Prompt Architectures"],
  },
];

const languages = ["Arabic", "English", "French"];

export default function About() {
  return (
    <section id="about" className="relative py-24 robotics-surface border-t border-line/60">
      {/* Background Schematics */}
      <RoboticsMotif kind="team-network" className="section-network-motif" />
      <RoboticsMotif kind="connector" className="section-connector-motif" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10" id="profile">
        <div className="grid grid-cols-1 md:grid-cols-[50px_1fr] gap-6 sm:gap-8 items-start">
          {/* Technical Rail */}
          <div className="hidden md:flex flex-col items-start gap-2 text-cyan font-mono text-xs font-bold tracking-widest pt-2">
            <span>02</span>
            <div className="w-px h-64 bg-line" />
            <span className="text-[10px] text-muted rotate-90 origin-left translate-y-12 uppercase">
              SYS.PROFILE
            </span>
          </div>

          <div>
            {/* Header */}
            <ScrollReveal>
              <div className="mb-10">
                <div className="orange-bar" />
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
                  Engineering Profile &amp; <span className="text-orange">Background</span>
                </h2>
                <div className="font-mono text-xs text-muted mt-2 tracking-wider">
                  // OPERATIONAL BACKGROUND, LEADERSHIP &amp; SYSTEM COMPETENCIES
                </div>
              </div>
            </ScrollReveal>

            {/* Narrative Card */}
            <ScrollReveal delay={80}>
              <div className="delta-card p-6 sm:p-8 corner-tick border border-line mb-12">
                <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted max-w-3xl">
                  <p>
                    I&apos;m a second-year preparatory engineering student at{" "}
                    <span className="text-navy font-semibold">NHSAST</span>{" "}
                    (National Higher School of Autonomous Systems Technologies) in Sidi Abdellah, Algiers.
                  </p>
                  <p>
                    I teach Analysis 2 through{" "}
                    <span className="text-orange font-semibold">Epsilite</span>, a volunteer tutoring program
                    I co-manage. I&apos;ve built web platforms used by hundreds of students, co-authored an
                    Analysis II textbook with Dr. Zeglaoui, wrote a solo Analysis I book, and
                    competed in autonomous robotics. I&apos;m currently an active member of{" "}
                    <span className="text-cyan font-semibold">Team Delta</span>, NHSAST&apos;s robotics
                    team preparing for the AST Festival across 7 competition entries — from sumo robots to a multi-terrain rover.
                  </p>
                  <p>
                    Beyond hardware, I serve as the <span className="text-navy font-semibold">AI Manager at IEEE NHSAST</span> and
                    the <span className="text-orange font-semibold">Event Manager at ASTCS</span> (the Scientific Club AST).
                    I organized events like Seed 2 and the AST Birthday celebration, and I&apos;m part of planning the next Festival.
                    I also created <span className="text-cyan font-semibold">Unfalables</span> — a philosophical debate
                    competition where teams argue opposing positions under timed rounds.
                  </p>
                  <div className="pt-2">
                    <div className="p-3.5 rounded-[2px] border border-line bg-paper text-navy text-sm font-mono leading-relaxed">
                      <span className="text-orange font-bold mr-2">&gt;</span>
                      &ldquo;Most of what I build comes from running into a problem and deciding to fix it —
                      misleading info about NHSAST led to NHSAST-Info,
                      students struggling with modules led to Epsilite,
                      parents calling the teacher every 5 minutes during trips led to the Trips Tracker.&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Competency Modules Matrix */}
            <ScrollReveal delay={140}>
              <div className="mb-12">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-mono text-xs text-cyan font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan" />
                    TECHNICAL COMPETENCY MATRIX
                  </h3>
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                    06 VERIFIED MODULES
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skillModules.map((mod) => (
                    <div
                      key={mod.serial}
                      className="delta-card p-4 sm:p-5 corner-tick border border-line"
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="font-mono text-[10px] text-cyan font-semibold tracking-wider">
                          {mod.serial}
                        </span>
                        <span className="w-1 h-1 bg-muted rounded-full" />
                      </div>
                      <h4 className="font-display text-base font-semibold text-navy mb-3">
                        {mod.label}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-xs rounded-[2px] border border-line bg-paper text-muted font-mono font-medium"
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

            {/* Languages Panel */}
            <ScrollReveal delay={180}>
              <div className="delta-card p-5 border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-orange font-bold tracking-widest uppercase block mb-1">
                    WORKING LANGUAGES
                  </span>
                  <span className="text-xs text-muted font-mono">
                    // Multi-lingual academic and engineering collaboration
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3.5 py-1.5 text-xs rounded-[2px] border border-line bg-paper text-navy font-mono font-semibold"
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
