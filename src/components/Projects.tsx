"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import WavyDivider from "@/components/WavyDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { RoboticsMotif } from "@/components/RoboticsMotifs";

interface Project {
  id: string;
  number: string;
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
    category: "Web Platform · Arabic i18n",
    title: "NHSAST-Info",
    hook: "1,500+ visitors during specialty-choosing period. Multiple incoming students cited this site as the primary reason they chose the school.",
    problem:
      "When I got my bac in 2025 and started looking into NHSAST, I ran into misleading information everywhere. There was no centralized, honest resource about the school, its programs, specializations, or what student life actually looks like.",
    what: [
      "Built a guided tour that walks prospective students through the school from scratch",
      "Added specialization pages with introductions written by students in each field, covering career paths, market outlook, and honest advice",
      "Included facility details (study room hours, library), official preparatory syllabus, club info with event photos and social links",
      "Created an Epsilite section, a FAQ page, and a Students' Opinion page with both positives and negatives",
      "Built an Ask Us page linking to a Telegram group with tagged NHSAST students ready to answer questions",
      "Added full Arabic support with seamless RTL rendering so parents can read about what their kids will study",
    ],
    role: "Solo. I wrote all the content, designed the interface, and built the site.",
    impact:
      "1,500+ visitors during the specialty-choosing period. Multiple students confirmed the information and clarity was their main reason for picking the school.",
    tech: ["Next.js", "Tailwind CSS", "i18n (EN/AR + RTL)", "Vercel"],
    links: [
      { label: "Live Site", href: "https://nhsast-info.vercel.app" },
      { label: "GitHub", href: "https://github.com/mohamed14-bm" },
    ],
  },
  {
    id: "epsilite",
    number: "02",
    category: "Academic Platform & LaTeX",
    title: "Epsilite",
    hook: "Main exam prep resource for NHSAST students. Reached 1,300+ visits during the catch up exams period, with study sessions reaching 35+ attendees.",
    problem:
      "NHSAST runs a 2-year general prep cycle followed by 3 years of specialization. The first two years pack in a lot of modules, and students struggle. There was no organized peer-to-peer academic support.",
    what: [
      "Co-founded a volunteer tutoring program where students who master a topic create exercise sets, re-explain hard parts, and produce summaries, cheat sheets, and exams at defined difficulty levels",
      "Taught Analysis 2 (calculus) alongside two other teachers, and managed the first-year side of the program",
      "Created exercise sets, exams, midterms, summaries, and cheat sheets in LaTeX",
      "Built markdown-to-LaTeX templates so other teachers could style their materials without learning LaTeX, enabling them to produce resources across several modules",
      "Built the Epsilite web platform: teachers are admins who publish resources, students browse everything in one place, with per-document view tracking",
    ],
    role: "Co-founded and managed. Taught calculus. Built the entire platform and the LaTeX template system.",
    impact:
      "Main resource during exam periods. Reached over 1,300 visits during the catch up exams period, with 35+ students per study session. Planning expansion to other higher schools in Sidi Abdellah.",
    tech: ["Next.js", "Tailwind CSS", "LaTeX", "Vercel", "Analytics"],
    links: [
      { label: "Live Site", href: "https://epsilite.vercel.app" },
      { label: "GitHub", href: "https://github.com/mohamed14-bm" },
    ],
  },
  {
    id: "analysis-2-book",
    number: "03",
    category: "Textbook · Co-Author",
    title: "Analysis II Textbook",
    hook: "200+ page calculus textbook co-authored with Dr. Zeglaoui. 23+ revision rounds. Pending publication.",
    problem:
      "NHSAST prep students need rigorous, well-structured material for the Analysis II module. The existing professor's notes were dense and hard to study from independently.",
    what: [
      "Co-authored a full calculus textbook with Dr. Zeglaoui covering sequences, series, continuity, differentiability, and integration, complete with proofs, worked examples, and graded exercises",
      "The book is 200+ pages and went through 23+ revision rounds including mathematical audits, pedagogical consistency reviews, and visual styling passes",
      "Written entirely in LaTeX with custom styling: flowcharts explaining proof strategies, cheat sheets per chapter, and TikZ diagrams",
      "Used AI as a tool to help design the LaTeX templates and formatting, not to write the math",
    ],
    role: "Co-author with Dr. Zeglaoui. Full LaTeX production, styling, and revision management.",
    impact:
      "Currently pending publication. Used by students during exam preparation.",
    tech: ["LaTeX", "TikZ", "Pedagogical Design", "Mathematical Auditing"],
    links: [],
  },
  {
    id: "analysis-1-book",
    number: "04",
    category: "Textbook · Sole Author",
    title: "Analysis I Companion Book",
    hook: "219 page real analysis textbook authored solo for NHSAST prep students. Blends rigorous theory, autonomous systems engineering models, and three tier problem sets.",
    problem:
      "First semester Analysis is one of the steepest hurdles for new engineering students. Available course materials often treat analysis as detached abstract formalism without showing how it directly governs autonomous systems, signal quantization, and feedback dynamics.",
    what: [
      "Wrote a 219 page companion textbook spanning the real number system, sequence convergence, functional continuity, differentiability, and asymptotic analysis",
      "Embedded real autonomous systems applications into the mathematical theory, including ADC quantization, discrete proportional control errors, scalar Kalman filter variance updates, and attitude angle estimation",
      "Curated three tier progressive problem sets combining foundational checks with advanced problems drawn from French CPGE Math Sup/Spe, Algerian national competitions, and MIT OpenCourseWare",
      "Designed pedagogical tools including a Proof Strategy Menu, Cross Chapter Logical Traps with counterexamples, full mock midterms and final exams, and comprehensive step by step corrections",
      "Engineered the full LaTeX and TikZ production with custom architectural layouts, vector cover art, and rigorous mathematical typesetting",
    ],
    role: "Sole author and typesetter. Researched, drafted, curated problems, and produced the entire 219 page book in LaTeX.",
    impact:
      "Primary reference and exam preparation companion for first year NHSAST students, bridging pure mathematical rigor with autonomous engineering intuition.",
    tech: ["LaTeX", "TikZ", "Pedagogical Design", "Mathematical Auditing", "CPGE & MIT OCW Curricula"],
    links: [],
  },
  {
    id: "polymaze",
    number: "05",
    category: "Robotics Competition · CAD",
    title: "POLYMAZE Robot",
    hook: "ESP32 burned out 2 hours before deadline. Rebuilt on a breadboard and still qualified.",
    problem:
      "POLYMAZE is a maze-solver competition organized by the VIC club. I needed to design, build, and program a robot that autonomously navigates a maze.",
    what: [
      "Designed a 3D-printed chassis in SolidWorks with battery slide-in mounts and a PCB seat that frees up room for sensors",
      "Wired up the circuit with QTR line sensors and an ESP32-WROOM controlling an H-bridge motor driver",
      "Wrote the maze-solving algorithm in C++",
      "During testing, the ESP32 burned out because I had used solder directly as the conductor instead of actual wires",
      "The only replacement I could find was an ESP32-S3 from a friend's robot, but it didn't fit my custom mount",
      "Rebuilt the entire setup on a breadboard with an L298N motor driver in the final minutes, filmed the qualification video, and submitted",
    ],
    role: "Solo. Designed the chassis, wired the circuit, wrote the code, and did the panicked breadboard rebuild.",
    impact:
      "Qualified with the breadboard robot. Made it to Phase 2. A QTR sensor broke mid-competition, and I finished 3rd in my group. Not the ending I wanted, but I learned never to use solder as a wire again.",
    tech: ["ESP32", "L298N Driver", "QTR Sensors", "C++", "SolidWorks", "3D Printing"],
    links: [],
  },
  {
    id: "delta-team",
    number: "06",
    category: "Competitive Robotics Team",
    title: "Team Delta: AST Festival",
    hook: "7 robot entries for the AST Festival: dog robot, sumo, rocket league, all-terrain, and more.",
    problem:
      "NHSAST's Scientific Club AST is competing at the AST Festival. The team needed to build multiple robots across different competition categories and present a credible, organized front to festival visitors and potential sponsors.",
    what: [
      "Part of Team Delta at NHSAST, building robots for 7 competition entries: Dog Robot, Sumo Robot, Rocket League, All-Terrain (6-wheel rocker-bogie), Maze Solver, Line Follower, and an Innovation Project",
      "Working on CAD designs, mechanical fabrication, and embedded control across multiple entries",
      "Built the Team Delta showcase website to document the team's work (CAD renders, build photos, and real specs) for festival visitors and sponsors",
    ],
    role: "Team member. Building robots and developing the team website.",
    impact:
      "Actively competing. Preparing for the AST Festival with 7 entries across different robotics categories.",
    tech: ["ESP32", "SolidWorks", "PCB Design", "Embedded C", "Next.js", "Tailwind CSS"],
    links: [],
  },
  {
    id: "expand-trips",
    number: "07",
    category: "Telemetry & Live Tracking",
    title: "Expand Trips Tracker",
    hook: "Real-time school bus tracking for parents. Teacher broadcasts location via Telegram, parents watch on a map.",
    problem:
      "During school trips, parents repeatedly call the accompanying teacher to ask where the bus is. This creates constant interruption, and there's no self-serve way for parents to check the bus location.",
    what: [
      "Built a live bus tracking system: the teacher shares their Telegram Live Location, a webhook ingests the GPS coordinates, and parents open a private link to see the bus moving on a map",
      "Admin dashboard generates a unique teacher passkey and parent link per trip",
      "Parent page shows a Leaflet map with live/offline status, a 'Recenter on Bus' button, and a 'See in Google Maps' deep link for traffic and ETA",
      "Built-in battery protection: polling pauses when the phone is locked, and hard-stops when the trip completes",
      "Total cost: $0/month, running entirely on Vercel free tier, Vercel KV, and Telegram Bot API",
    ],
    role: "Solo developer. Designed the system, built the webhook, admin dashboard, and parent tracking page.",
    impact:
      "Designed for real deployment during school trips. Runs at zero cost with privacy by default, and location data auto-deletes after 2 hours.",
    tech: ["Next.js", "Telegram Bot API", "Vercel KV", "Leaflet.js", "TypeScript"],
    links: [],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const isPostIt = project.id === "epsilite";
  const hasTape = project.id === "analysis-2-book";
  const tilts = ["rotate-0.5", "-rotate-0.5", "rotate-0", "-rotate-1", "rotate-1", "-rotate-0.5", "rotate-0.5"];
  const tilt = tilts[index % tilts.length];

  return (
    <article
      className={`relative wobbly-card transition-all duration-150 border-2 border-border ${
        isPostIt
          ? "bg-[#fff9c4] text-[#2d2d2d] dark:bg-[#2b3340] dark:text-[#f4f0ea]"
          : "bg-paper-bright text-foreground"
      } shadow-sketch hover:shadow-sketch-lg ${tilt}`}
      style={{
        borderRadius: "20px 255px 20px 255px / 255px 20px 255px 20px",
      }}
    >
      {/* Authentic Tape or Tack Decorations */}
      {hasTape && <div className="tape-strip" aria-hidden="true" />}
      {isPostIt && <div className="thumbtack-pin" aria-hidden="true" />}

      <div className="p-6 sm:p-8">
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {/* Hand-sketched circled number */}
            <span
              className="w-8 h-8 border-2 border-border bg-paper flex items-center justify-center font-heading font-bold text-base text-accent shadow-sketch-sm -rotate-2"
              style={{
                borderRadius: "120px 15px 100px 12px / 12px 100px 12px 120px",
              }}
            >
              {project.number}
            </span>
            <span
              className="px-3 py-0.5 border-2 border-border bg-paper text-foreground font-body text-base font-bold shadow-sketch-sm"
              style={{
                borderRadius: "120px 15px 100px 12px / 12px 100px 12px 120px",
              }}
            >
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-base font-bold px-3 py-1 border-2 border-border bg-paper-bright text-foreground hover:bg-accent hover:text-white shadow-sketch-sm transition-all duration-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-sketch-none"
                style={{
                  borderRadius: "120px 15px 100px 12px / 12px 100px 12px 120px",
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={15} className="stroke-[2.5]" />
              </Link>
            ))}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
          {project.title}
        </h3>

        {/* Catchy Hook */}
        <p className="font-body text-lg sm:text-xl font-bold text-secondary-accent leading-relaxed mb-4">
          {project.hook}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 font-mono text-xs font-bold border-2 border-border/80 bg-paper/80 text-foreground"
              style={{
                borderRadius: "120px 12px 100px 10px / 10px 100px 10px 120px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`notes-${project.id}`}
          className="inline-flex items-center gap-2 font-body text-lg font-bold text-muted hover:text-accent wavy-hover transition-colors cursor-pointer select-none pt-1"
        >
          <span>{expanded ? "Fold case notes" : "Read handwritten notes"}</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 stroke-[2.5] ${expanded ? "rotate-180 text-accent" : ""}`}
          />
        </button>
      </div>

      {/* Expanded detail: notebook fold */}
      <div
        id={`notes-${project.id}`}
        data-expanded={expanded}
        aria-hidden={!expanded}
        inert={!expanded}
        className={`notebook-fold grid ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="case-notes px-6 sm:px-8 pb-8 pt-5 border-t-2 border-dashed border-border/60 space-y-6 bg-paper-wash/50">
            <div>
              <h4 className="font-heading text-lg text-accent font-bold mb-1">
                The Problem
              </h4>
              <p className="font-body text-xl text-muted leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <h4 className="font-heading text-lg text-accent font-bold mb-2">
                What I Built
              </h4>
              <ul className="space-y-2">
                {project.what.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-body text-xl text-muted leading-relaxed">
                    <span className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg text-accent font-bold mb-1">
                My Role
              </h4>
              <p className="font-body text-xl text-muted leading-relaxed">{project.role}</p>
            </div>

            <div className="p-4 bg-paper border-2 border-border/80 shadow-sketch-sm rounded-lg">
              <h4 className="font-heading text-lg text-secondary-accent font-bold mb-1">
                Impact &amp; Outcome
              </h4>
              <p className="font-body text-xl text-foreground font-bold leading-relaxed">
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
    <section id="projects" className="relative py-24 robotics-surface border-t-2 border-dashed border-border/70">
      <WavyDivider />
      {/* Background Sketched Motif */}
      <RoboticsMotif kind="signal-grid" className="section-signal-motif" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="header">
          <div className="mb-12">
            <div className="orange-bar" />
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Projects &amp; Builds
            </h2>
            <p className="font-body text-xl sm:text-2xl text-muted mt-2 max-w-xl">
              Authentic projects spanning autonomous robotics, web platforms, and academic publications.
            </p>
          </div>
        </ScrollReveal>

        {/* Project cards stack */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} variant={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 60}>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
