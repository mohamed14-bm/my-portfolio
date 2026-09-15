"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { RoboticsMotif } from "@/components/RoboticsMotifs";

interface Project {
  id: string;
  number: string;
  serial: string;
  status: "DEPLOYED" | "ONLINE" | "IN_REVIEW" | "COMPETED" | "VERIFIED";
  category: string;
  title: string;
  hook: string;
  problem: string;
  what: string[];
  role: string;
  impact: string;
  tech: string[];
  links: { label: string; href: string }[];
}

const projects: Project[] = [
  {
    id: "nhsast-info",
    number: "01",
    serial: "SYS.01 // INFO_PLATFORM",
    status: "DEPLOYED",
    category: "Full-Stack Web & Arabic i18n",
    title: "NHSAST-Info",
    hook: "1,500+ visitors during specialty-choosing period. Multiple students cited this platform as the decisive factor in choosing the school.",
    problem:
      "When I got my bac in 2025 and started looking into NHSAST, I ran into misleading information everywhere. There was no centralized, honest resource about the school, its programs, specializations, or what student life actually looks like.",
    what: [
      "Built a guided tour that walks prospective students through the school from scratch",
      "Added specialization pages with introductions written by students in each field — covering career paths, market outlook, and honest advice",
      "Included facility details (study room hours, library), official preparatory syllabus, club info with event photos and social links",
      "Created an Epsilite section, a FAQ page, and a Students' Opinion page with both positives and negatives",
      "Built an Ask Us page linking to a Telegram group with tagged NHSAST students ready to answer questions",
      "Added full Arabic support with seamless RTL rendering so parents can read about the curriculum",
    ],
    role: "Solo developer. Researched and authored all content, designed the interface, and built the application.",
    impact:
      "1,500+ visitors during the specialty-choosing period. Multiple incoming students confirmed it was their primary guide.",
    tech: ["Next.js", "Tailwind CSS", "i18n (EN/AR + RTL)", "Vercel"],
    links: [
      { label: "Live Site", href: "https://nhsast-info.vercel.app" },
      { label: "GitHub", href: "https://github.com/mohamed14-bm" },
    ],
  },
  {
    id: "epsilite",
    number: "02",
    serial: "SYS.02 // ACADEMIC_PORTAL",
    status: "ONLINE",
    category: "Peer Tutoring & LaTeX Pipeline",
    title: "Epsilite",
    hook: "Main academic preparation resource for NHSAST students. Study sessions reached 35+ active attendees.",
    problem:
      "NHSAST runs a 2-year general preparatory cycle followed by 3 years of specialization. The first two years pack in intense theoretical modules with little structured peer support.",
    what: [
      "Co-founded a volunteer tutoring program where students who master a topic create exercise sets, re-explain hard parts, and produce summaries, cheat sheets, and exams at defined difficulty levels",
      "Taught Analysis 2 (multivariable calculus) alongside two other teachers, and managed the first-year academic track",
      "Authored exercise sets, exams, midterms, summaries, and cheat sheets in LaTeX",
      "Built markdown-to-LaTeX templates enabling other teachers to style their materials without learning LaTeX from scratch",
      "Built the Epsilite web platform: instructors publish resources as admins, students browse and download with view analytics",
    ],
    role: "Co-founder & Manager. Taught calculus. Engineered the web platform and the LaTeX template pipeline.",
    impact:
      "Primary resource during exam periods across NHSAST. Planning expansion to other higher schools in Sidi Abdellah.",
    tech: ["Next.js", "Tailwind CSS", "LaTeX Engine", "Vercel", "Analytics"],
    links: [
      { label: "Live Site", href: "https://epsilite.vercel.app" },
      { label: "GitHub", href: "https://github.com/mohamed14-bm" },
    ],
  },
  {
    id: "analysis-2-book",
    number: "03",
    serial: "SYS.03 // TEXTBOOK_CALCULUS",
    status: "IN_REVIEW",
    category: "Formal Technical Authoring",
    title: "Analysis II — Textbook",
    hook: "200+ page calculus textbook co-authored with Dr. Zeglaoui. 23+ revision rounds. Pending publication.",
    problem:
      "NHSAST preparatory students need rigorous, pedagogical materials tailored to the school's specific curriculum. Available materials were fragmented across legacy PDFs.",
    what: [
      "Co-authored a comprehensive calculus textbook with Dr. Zeglaoui covering sequences, series, continuity, differentiability, and integration with complete mathematical proofs and graded exercises",
      "The textbook spans 200+ pages and underwent 23+ formal revision rounds, including mathematical consistency audits and pedagogical review passes",
      "Engineered in LaTeX with custom TikZ flowcharts illustrating proof mechanics and chapter cheat sheets",
      "Employed AI strictly as an assistant for LaTeX typesetting and layout styling — all mathematical proofs were verified manually",
    ],
    role: "Co-author with Dr. Zeglaoui. Responsible for LaTeX typesetting, diagram production, and document synthesis.",
    impact:
      "Completed and pending publication. Distributed to students as an exam review guide.",
    tech: ["LaTeX", "TikZ Diagrams", "Mathematical Auditing", "Custom Macros"],
    links: [],
  },
  {
    id: "analysis-1-book",
    number: "04",
    serial: "SYS.04 // TEXTBOOK_REAL_ANALYSIS",
    status: "ONLINE",
    category: "Textbook & Solved Problem Sets",
    title: "Analysis I — Textbook",
    hook: "Complete first-semester Analysis textbook authored solo. Engineered with progressive difficulty problem sets.",
    problem:
      "First-semester Analysis is one of the highest-friction modules for incoming preparatory students, with high failure rates without structured exercise progression.",
    what: [
      "Authored a complete first-semester real analysis book covering limits, topological continuity, differentiability, and introductory calculus",
      "Structured exercises with clear difficulty tiers: foundational definitions, proof-based exercises, and full solutions",
      "Typeset entirely in LaTeX with uniform pedagogical formatting",
    ],
    role: "Sole author. Wrote all explanations, designed all exercises, and produced the full book in LaTeX.",
    impact:
      "Adopted by first-year NHSAST students as their primary self-study and exam prep manual.",
    tech: ["LaTeX", "TikZ", "Pedagogical Design", "Mathematical Logic"],
    links: [],
  },
  {
    id: "polymaze",
    number: "05",
    serial: "SYS.05 // ROBOTICS_AMR",
    status: "COMPETED",
    category: "Autonomous Maze Navigation & CAD",
    title: "POLYMAZE Robot",
    hook: "ESP32 burned out 2 hours before the deadline. Rebuilt on a breadboard in the final minutes and qualified.",
    problem:
      "POLYMAZE is an autonomous maze-solver competition organized by the VIC club. Teams must design, machine, and program a robot that solves an unknown physical maze.",
    what: [
      "Designed a 3D-printed chassis in Fusion 360 with custom battery slide-in mounts and an elevated PCB seat for sensor routing",
      "Assembled the circuit with an ESP32-WROOM microcontroller, QTR infrared reflectance line sensors, and an H-bridge motor driver",
      "Wrote the autonomous maze traversal logic in C++",
      "During final testing 2 hours before deadline, the ESP32 shorted because solder traces were used directly as conductor paths",
      "Found an alternative ESP32-S3 from a peer's robot that did not fit the custom mount; rebuilt the complete circuit onto a breadboard with an L298N driver and filmed the qualifying run",
    ],
    role: "Solo builder. CAD chassis design, 3D printing, circuit wiring, C++ algorithmic logic, and crisis rebuild.",
    impact:
      "Successfully qualified for Phase 2 with the breadboard rebuild. Finished 3rd in group after an in-race sensor fault.",
    tech: ["ESP32", "L298N Driver", "QTR Sensors", "C++", "Fusion 360", "3D Printing"],
    links: [],
  },
  {
    id: "delta-team",
    number: "06",
    serial: "SYS.06 // COMPETITIVE_ROBOTICS",
    status: "VERIFIED",
    category: "AST Festival Multi-Robot Fleet",
    title: "Team Delta — AST Festival",
    hook: "7 robot competition entries for the AST Festival: Dog robot, sumo robot, rocket league rover, and all-terrain vehicle.",
    problem:
      "NHSAST's robotics competitors needed multi-disciplinary engineering across 7 distinct event categories while presenting technical credibility to sponsors and academic evaluators.",
    what: [
      "Active member of Team Delta at NHSAST, building robots for 7 competition entries: Dog Robot, Sumo Robot, Rocket League, All-Terrain (6-wheel rocker-bogie), Maze Solver, Line Follower, and an Innovation Project",
      "Contributed to CAD modeling, mechanical fabrication, and embedded logic across robot entries",
      "Developed the Team Delta showcase website to document technical build specs, CAD renders, and telemetry for festival sponsors",
    ],
    role: "Team member. Robotics fabrication, embedded hardware control, and web telemetry showcase development.",
    impact:
      "Actively competing. Preparing 7 entries for competition at the AST Festival.",
    tech: ["ESP32", "SolidWorks", "PCB Design", "Embedded C", "Next.js", "Tailwind CSS"],
    links: [],
  },
  {
    id: "expand-trips",
    number: "07",
    serial: "SYS.07 // TELEMETRY_INGESTION",
    status: "DEPLOYED",
    category: "Real-Time GPS Tracking & Serverless",
    title: "Expand Trips Tracker",
    hook: "Live school bus telemetry for parents. Teacher broadcasts location via Telegram, parents track on live map with zero operational cost.",
    problem:
      "During school trips, parents continuously contact teachers for location updates, disrupting trip logistics without providing parents a live estimated time of arrival.",
    what: [
      "Engineered an event-driven telemetry pipeline: the teacher shares a Telegram Live Location pin, a webhook ingests GPS coordinates into Vercel KV (Upstash Redis), and parents observe the bus moving in real time on a private web map",
      "Admin dashboard produces cryptographic one-time teacher passkeys and obfuscated parent viewing links per trip",
      "Parent UI includes a Leaflet map with online/offline ping indicators, recentering controls, and deep-links to Google Maps for ETA calculation",
      "Equipped with Page Visibility API listener to pause polling when parent phone screens turn off, preventing battery drain",
      "Runs at $0/month total infrastructure cost on Vercel free tier and Telegram Bot API",
    ],
    role: "Solo architect & developer. Designed the webhook ingestion flow, admin passkey generation, and parent map frontend.",
    impact:
      "Ready for real-world school trip deployment. Privacy-by-design with automated 2-hour telemetry TTL purges.",
    tech: ["Next.js", "Telegram Webhooks", "Vercel KV", "Leaflet.js", "TypeScript"],
    links: [],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="delta-card overflow-hidden border border-line corner-tick">
      <div className="p-5 sm:p-7">
        {/* Serial Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-cyan tracking-wider">
              {project.serial}
            </span>
            <span className="font-mono text-[10px] px-1.5 py-0.5 border border-line bg-paper text-orange uppercase tracking-wider rounded-[2px] font-semibold">
              {project.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-muted hover:text-navy hover:border-cyan transition-colors border border-line rounded-[2px] px-2.5 py-1 bg-paper"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={12} />
              </Link>
            ))}
          </div>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-2">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-orange font-medium leading-relaxed mb-4">
          {project.hook}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs font-mono rounded-[2px] border border-line bg-paper text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Case Study Toggle */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-mono uppercase tracking-wider text-muted hover:text-cyan transition-colors flex items-center gap-1.5 cursor-pointer font-bold pt-1"
        >
          <span>{expanded ? "Collapse case study [-]" : "Read technical case study [→]"}</span>
          <ChevronDown
            size={13}
            className={`transition-transform duration-200 ${expanded ? "rotate-180 text-cyan" : ""}`}
          />
        </button>
      </div>

      {/* Expanded Breakdown */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-7 pb-7 pt-4 border-t border-line space-y-5 bg-paper/40 font-sans">
            <div>
              <h4 className="text-[11px] font-mono text-cyan tracking-widest uppercase font-bold mb-1.5">
                // PROBLEM &amp; SYSTEM OBJECTIVE
              </h4>
              <p className="text-sm sm:text-base text-muted leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <h4 className="text-[11px] font-mono text-cyan tracking-widest uppercase font-bold mb-2">
                // ARCHITECTURE &amp; IMPLEMENTATION
              </h4>
              <ul className="space-y-1.5">
                {project.what.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm sm:text-base text-muted leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-mono text-cyan tracking-widest uppercase font-bold mb-1">
                // INDIVIDUAL CONTRIBUTION
              </h4>
              <p className="text-sm sm:text-base text-muted leading-relaxed">{project.role}</p>
            </div>

            <div>
              <h4 className="text-[11px] font-mono text-orange tracking-widest uppercase font-bold mb-1">
                // VERIFIED OUTCOME &amp; IMPACT
              </h4>
              <p className="text-sm sm:text-base text-navy font-semibold leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 robotics-surface border-t border-line/60">
      {/* Background Schematics */}
      <RoboticsMotif kind="signal-grid" className="section-signal-motif" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[50px_1fr] gap-6 sm:gap-8 items-start">
          {/* Technical Rail */}
          <div className="hidden md:flex flex-col items-start gap-2 text-cyan font-mono text-xs font-bold tracking-widest pt-2">
            <span>03</span>
            <div className="w-px h-80 bg-line" />
            <span className="text-[10px] text-muted rotate-90 origin-left translate-y-16 uppercase">
              SYS.BUILDS
            </span>
          </div>

          <div>
            {/* Header */}
            <ScrollReveal>
              <div className="mb-10">
                <div className="orange-bar" />
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
                  System Specifications &amp; <span className="text-orange">Builds</span>
                </h2>
                <div className="font-mono text-xs text-muted mt-2 tracking-wider">
                  // 07 VERIFIED ENGINEERING SYSTEMS &middot; HARDWARE, SOFTWARE &amp; PUBLICATIONS
                </div>
              </div>
            </ScrollReveal>

            {/* Project List */}
            <div className="space-y-4">
              {projects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 50}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
