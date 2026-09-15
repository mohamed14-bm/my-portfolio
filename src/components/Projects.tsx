"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface Project {
  id: string;
  number: string;
  title: string;
  hook: string;
  problem: string;
  what: string[];
  role: string;
  impact: string;
  tech: string[];
  links: { label: string; href: string }[];
  accent: "accent" | "warm" | "success" | "muted";
}

const projects: Project[] = [
  {
    id: "nhsast-info",
    number: "01",
    title: "NHSAST-Info",
    hook: "1,500+ visitors during specialty-choosing period. Students said this site is why they chose the school.",
    problem:
      "When I got my bac in 2025 and started looking into NHSAST, I ran into misleading information everywhere. There was no centralized, honest resource about the school, its programs, specializations, or what student life actually looks like.",
    what: [
      "Built a guided tour that walks prospective students through the school from scratch",
      "Added specialization pages with introductions written by students in each field — covering career paths, market outlook, and honest advice",
      "Included facility details (study room hours, library), official preparatory syllabus, club info with event photos and social links",
      "Created an Epsilite section, a FAQ page, and a Students' Opinion page with both positives and negatives",
      "Built an Ask Us page linking to a Telegram group with tagged NHSAST students ready to answer questions",
      "Added full Arabic support so parents can read about what their kids will study",
    ],
    role: "Solo. I wrote all the content, designed the interface, and built the site.",
    impact:
      "1,500+ visitors during the specialty-choosing period. Multiple students told me the information and clarity was their main reason for picking the school.",
    tech: ["Next.js", "Tailwind CSS", "i18n (EN/AR + RTL)", "Vercel"],
    links: [
      { label: "Live Site", href: "https://nhsast-info.vercel.app" },
      { label: "GitHub", href: "https://github.com/mohamed14-bm" },
    ],
    accent: "accent",
  },
  {
    id: "epsilite",
    number: "02",
    title: "Epsilite",
    hook: "Became the main exam-prep resource for NHSAST students. Sessions hit 35+ attendees.",
    problem:
      "NHSAST runs a 2-year general prep cycle followed by 3 years of specialization. The first two years pack in a lot of modules, and students struggle. There was no organized peer-to-peer academic support.",
    what: [
      "Co-founded a volunteer tutoring program where students who master a topic create exercise sets, re-explain hard parts, and produce summaries, cheat sheets, and exams at defined difficulty levels",
      "Taught Analysis 2 (calculus) alongside two other teachers, and managed the first-year side of the program",
      "Created exercise sets, exams, midterms, summaries, and cheat sheets in LaTeX",
      "Built markdown-to-LaTeX templates so other teachers could style their materials without learning LaTeX — they went on to produce resources across several modules",
      "Built the Epsilite web platform: teachers are admins who publish resources, students browse everything in one place, with per-document view tracking",
    ],
    role: "Co-founded and managed. Taught calculus. Built the entire platform and the LaTeX template system.",
    impact:
      "Main resource during exam periods. 35+ students per session. Planning expansion to other higher schools in Sidi Abdellah.",
    tech: ["Next.js", "Tailwind CSS", "LaTeX", "Vercel", "Analytics"],
    links: [
      { label: "Live Site", href: "https://epsilite.vercel.app" },
      { label: "GitHub", href: "https://github.com/mohamed14-bm" },
    ],
    accent: "warm",
  },
  {
    id: "analysis-2-book",
    number: "03",
    title: "Analysis II — Textbook",
    hook: "200+ page calculus textbook co-authored with Dr. Zeglaoui. 23+ revision rounds. Pending publication.",
    problem:
      "NHSAST prep students need rigorous, well-structured material for the Analysis II module. The existing professor's notes were dense and hard to study from independently.",
    what: [
      "Co-authored a full calculus textbook with Dr. Zeglaoui covering sequences, series, continuity, differentiability, and integration — with complete proofs, worked examples, and graded exercises",
      "The book is 200+ pages and went through 23+ revision rounds including mathematical audits, pedagogical consistency reviews, and visual styling passes",
      "Written entirely in LaTeX with custom styling: flowcharts explaining proof strategies, cheat sheets per chapter, and TikZ diagrams",
      "Used AI as a tool to help design the LaTeX templates and formatting — not to write the math",
    ],
    role: "Co-author with Dr. Zeglaoui. Full LaTeX production, styling, and revision management.",
    impact:
      "Currently pending publication. Used by students during exam preparation.",
    tech: ["LaTeX", "TikZ", "Custom Templates", "AI-Assisted Formatting"],
    links: [],
    accent: "accent",
  },
  {
    id: "analysis-1-book",
    number: "04",
    title: "Analysis I — Textbook",
    hook: "Wrote a complete Analysis I textbook as the sole author. Used by first-year students for exam prep.",
    problem:
      "First-semester Analysis is one of the hardest modules for new prep students. There was no single, well-organized resource covering the full curriculum with exercises and solutions.",
    what: [
      "Wrote a complete Analysis I textbook covering the first-semester curriculum — limits, continuity, derivatives, and foundational real analysis",
      "Structured with progressive difficulty: definitions, theorems with proofs, worked examples, then exercise sets",
      "Full LaTeX production with the same custom template system used for the Analysis II book",
    ],
    role: "Sole author. Wrote all content and produced the entire book in LaTeX.",
    impact:
      "Used by first-year NHSAST students as their main exam preparation resource.",
    tech: ["LaTeX", "TikZ", "Custom Templates"],
    links: [],
    accent: "warm",
  },
  {
    id: "polymaze",
    number: "05",
    title: "POLYMAZE Robot",
    hook: "ESP32 burned out 2 hours before the deadline. Rebuilt on a breadboard and still qualified.",
    problem:
      "POLYMAZE is a maze-solver competition organized by the VIC club. I needed to design, build, and program a robot that autonomously navigates a maze.",
    what: [
      "Designed a 3D-printed chassis in Fusion 360 with battery slide-in mounts and a PCB seat that frees up room for sensors",
      "Wired up the circuit with QTR line sensors and an ESP32-WROOM controlling an H-bridge motor driver",
      "Wrote the maze-solving algorithm in C++",
      "During testing, the ESP32 burned out — I had used solder directly as the conductor instead of actual wires",
      "The only replacement I could find was an ESP32-S3 from a friend's robot, but it didn't fit my custom mount",
      "Rebuilt the entire setup on a breadboard with an L298N motor driver in the final minutes, filmed the qualification video, and submitted",
    ],
    role: "Solo. Designed the chassis, wired the circuit, wrote the code, and did the panicked breadboard rebuild.",
    impact:
      "Qualified with the breadboard robot. Made it to Phase 2. A QTR sensor broke mid-competition — finished 3rd in my group. Not the ending I wanted, but I learned never to use solder as a wire again.",
    tech: ["ESP32", "L298N Motor Driver", "QTR Sensors", "C++", "Fusion 360", "3D Printing"],
    links: [],
    accent: "success",
  },
  {
    id: "delta-team",
    number: "06",
    title: "Team Delta — AST Festival",
    hook: "7 robot entries for the AST Festival. Dog robot, sumo, rocket league, all-terrain, and more.",
    problem:
      "NHSAST's Scientific Club AST is competing at the AST Festival. The team needed to build multiple robots across different competition categories and present a credible, organized front to festival visitors and potential sponsors.",
    what: [
      "Part of Team Delta at NHSAST, building robots for 7 competition entries: Dog Robot, Sumo Robot, Rocket League, All-Terrain (6-wheel rocker-bogie), Maze Solver, Line Follower, and an Innovation Project",
      "Working on CAD designs, PCB design, and embedded control across multiple entries",
      "Built the Team Delta showcase website to document the team's work — CAD renders, build photos, real specs — for festival visitors and sponsors",
      "The site is designed to show competence through the work itself, with no sponsorship pitch — credibility shown, not asked for",
    ],
    role: "Team member. Building robots and the team website.",
    impact:
      "Actively competing. Preparing for the AST Festival with 7 entries across different robotics categories.",
    tech: ["ESP32", "SolidWorks", "PCB Design", "React", "Tailwind CSS"],
    links: [],
    accent: "accent",
  },
  {
    id: "expand-trips",
    number: "07",
    title: "Expand Trips Tracker",
    hook: "Real-time school bus tracking for parents. Teacher broadcasts location via Telegram, parents watch on a map.",
    problem:
      "During school trips, parents repeatedly call the accompanying teacher to ask where the bus is. This creates constant interruption, and there's no self-serve way for parents to check the bus location.",
    what: [
      "Built a live bus tracking system: the teacher shares their Telegram Live Location, a webhook ingests the GPS coordinates, and parents open a private link to see the bus moving on a map",
      "Admin dashboard generates a unique teacher passkey and parent link per trip",
      "Parent page shows a Leaflet map with live/offline status, a 'Recenter on Bus' button, and a 'See in Google Maps' deep link for traffic and ETA",
      "Built-in battery protection: polling pauses when the phone is locked, and hard-stops when the trip completes",
      "Total cost: $0/month — runs entirely on Vercel free tier, Vercel KV, and Telegram Bot API",
    ],
    role: "Solo developer. Designed the system, built the webhook, admin dashboard, and parent tracking page.",
    impact:
      "Designed for real deployment during school trips. Runs at zero cost with privacy-by-default — location data auto-deletes after 2 hours.",
    tech: ["Next.js", "Telegram Bot API", "Vercel KV", "Leaflet.js", "TypeScript"],
    links: [],
    accent: "warm",
  },
];

const accentColors = {
  accent: {
    text: "text-accent",
    border: "border-accent/20",
    bg: "bg-accent/5",
    dot: "bg-accent",
  },
  warm: {
    text: "text-warm",
    border: "border-warm/20",
    bg: "bg-warm/5",
    dot: "bg-warm",
  },
  success: {
    text: "text-success",
    border: "border-success/20",
    bg: "bg-success/5",
    dot: "bg-success",
  },
  muted: {
    text: "text-muted",
    border: "border-muted/20",
    bg: "bg-muted/5",
    dot: "bg-muted",
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const colors = accentColors[project.accent];

  return (
    <ScrollReveal delay={index * 80}>
      <article
        className="group relative rounded-2xl border border-border bg-surface/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-border-hover card-glow"
      >
        {/* Header — always visible */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-mono ${colors.text} tracking-widest`}>
                {project.number}
              </span>
              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
            </div>
            <div className="flex gap-2">
              {project.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-muted hover:text-foreground transition-colors border border-border rounded-lg px-3 py-1.5 hover:border-border-hover"
                >
                  {link.label} ↗
                </Link>
              ))}
            </div>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-3">
            {project.title}
          </h3>

          <p className={`text-sm sm:text-base ${colors.text} font-medium leading-relaxed mb-4`}>
            {project.hook}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs font-mono rounded-md border border-border bg-background text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Expand/Collapse */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-mono text-muted hover:text-foreground transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>{expanded ? "Less" : "Read more"}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Expanded detail */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-border space-y-6">
              {/* Problem */}
              <div>
                <h4 className="text-xs font-mono text-muted tracking-widest uppercase mb-2">
                  Problem
                </h4>
                <p className="text-foreground/80 leading-relaxed">{project.problem}</p>
              </div>

              {/* What I built */}
              <div>
                <h4 className="text-xs font-mono text-muted tracking-widest uppercase mb-2">
                  What I built
                </h4>
                <ul className="space-y-2">
                  {project.what.map((item, i) => (
                    <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
                      <span className={`mt-2 w-1 h-1 rounded-full ${colors.dot} shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Role */}
              <div>
                <h4 className="text-xs font-mono text-muted tracking-widest uppercase mb-2">
                  My role
                </h4>
                <p className="text-foreground/80 leading-relaxed">{project.role}</p>
              </div>

              {/* Impact */}
              <div>
                <h4 className="text-xs font-mono text-muted tracking-widest uppercase mb-2">
                  Impact
                </h4>
                <p className={`${colors.text} font-medium leading-relaxed`}>{project.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-mono text-accent tracking-widest uppercase">02</span>
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-mono text-muted tracking-widest uppercase">Projects</span>
          </div>
        </ScrollReveal>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
