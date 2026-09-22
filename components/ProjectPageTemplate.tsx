"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/app/providers";
import { Navbar } from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";

/* ─── Types ──────────────────────────────────────────────── */

export interface TechTag {
  label: string;
  color: string; // Tailwind bg + text classes
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface WorkflowStep {
  step: string; // "01", "02" …
  title: string;
  desc: string;
}

export interface ProjectMeta {
  type: string;
  role: string;
  status: "Live" | "In Progress" | "Archived" | string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ProjectData {
  /** Display name — used in heading and footer */
  name: string;
  /** Short tag line shown above heading e.g. "AI · Health · Analytics" */
  tags: string;
  /** Hero heading — supports splitting into two parts for gradient accent */
  headingPlain: string;
  headingAccent: string;
  /** Hero subtitle paragraph */
  subtitle: string;
  /** Path to screenshot in /public */
  image: string;
  imageAlt: string;
  /** GitHub and live URLs — pass "#" if not available */
  githubUrl: string;
  liveUrl: string;
  /** Stats strip */
  metrics: Metric[];
  /** About section */
  aboutTitle: string;
  aboutParagraphs: string[];
  techStack: TechTag[];
  meta: ProjectMeta;
  /** Feature cards */
  features: Feature[];
  /** Workflow steps */
  workflowSteps: WorkflowStep[];
  /** CTA section */
  ctaTitle: string;
  ctaBody: string;
}

/* ─── GitHub icon ────────────────────────────────────────── */
const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.01-2.04-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.99.11-.77.41-1.29.75-1.59-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02.01 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const BackIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

/* ─── Template ───────────────────────────────────────────── */

export default function ProjectPageTemplate({ data }: { data: ProjectData }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const statusColor =
    data.meta.status === "Live"
      ? "text-green-400"
      : data.meta.status === "In Progress"
      ? "text-yellow-400"
      : "text-zinc-400";

  return (
    <div className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <AmbientBackground />
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#projects"
            className={`inline-flex items-center gap-2 text-sm mb-8 transition-colors duration-200 ${
              isDark ? "text-white/50 hover:text-orange-400" : "text-black/40 hover:text-orange-600"
            }`}
          >
            <BackIcon />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${isDark ? "bg-orange-500/20 text-orange-300" : "bg-orange-100 text-orange-700"}`}>
                {data.tags}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold font-syne leading-tight mb-4">
                {data.headingPlain}
                <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  {data.headingAccent}
                </span>
              </h1>
              <p className={`text-lg leading-relaxed mb-8 ${isDark ? "text-white/70" : "text-black/60"}`}>
                {data.subtitle}
              </p>

              <div className="flex flex-wrap gap-3">
                {data.githubUrl !== "#" && (
                  <a
                    href={data.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border transition-all duration-200 hover:scale-105 ${
                      isDark
                        ? "border-white/20 hover:border-orange-400 text-white hover:text-orange-300"
                        : "border-black/20 hover:border-orange-500 text-black hover:text-orange-600"
                    }`}
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                )}
                {data.liveUrl !== "#" && data.liveUrl ? (
                  <a
                    href={data.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-200"
                  >
                    <ExternalIcon />
                    Live Demo
                  </a>
                ) : (
                  <span className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm cursor-not-allowed opacity-50 ${
                    isDark ? "bg-white/10 text-white/60" : "bg-black/10 text-black/40"
                  }`}>
                    <ExternalIcon />
                    Live Demo
                  </span>
                )}
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative">
              <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-20 ${isDark ? "bg-orange-500" : "bg-orange-300"}`} />
              <div className={`relative rounded-2xl overflow-hidden border shadow-2xl ${isDark ? "border-white/10" : "border-orange-200"}`}>
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  width={700}
                  height={420}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics strip ─────────────────────────────────── */}
      <section className={`py-10 border-y ${isDark ? "border-white/10 bg-white/5" : "border-orange-100 bg-orange-50/50"}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {data.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-3xl font-bold font-syne bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                {m.value}
              </p>
              <p className={`text-sm mt-1 ${isDark ? "text-white/50" : "text-black/50"}`}>{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? "text-orange-400" : "text-orange-600"}`}>
                About the project
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-syne mb-6">{data.aboutTitle}</h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? "text-white/70" : "text-black/60"}`}>
                {data.aboutParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {/* Tech stack */}
              <div className={`rounded-2xl p-6 border ${isDark ? "bg-white/5 border-white/10" : "bg-orange-50 border-orange-100"}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? "text-orange-400" : "text-orange-600"}`}>
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.techStack.map((t) => (
                    <span key={t.label} className={`px-3 py-1 rounded-full text-xs font-medium ${t.color}`}>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div className={`rounded-2xl p-6 border ${isDark ? "bg-white/5 border-white/10" : "bg-orange-50 border-orange-100"}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? "text-orange-400" : "text-orange-600"}`}>
                  Details
                </p>
                <ul className={`space-y-2 text-sm ${isDark ? "text-white/70" : "text-black/60"}`}>
                  <li className="flex justify-between"><span className="font-medium">Type</span><span>{data.meta.type}</span></li>
                  <li className="flex justify-between"><span className="font-medium">Role</span><span>{data.meta.role}</span></li>
                  <li className="flex justify-between">
                    <span className="font-medium">Status</span>
                    <span className={`font-semibold ${statusColor}`}>{data.meta.status}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────── */}
      <section className={`py-20 px-4 md:px-8 ${isDark ? "bg-white/5" : "bg-orange-50/50"}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? "text-orange-400" : "text-orange-600"}`}>
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-syne">What it can do</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f) => (
              <div
                key={f.title}
                className={`group rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                  isDark
                    ? "bg-black/40 border-white/10 hover:border-orange-500/40 hover:shadow-orange-500/10"
                    : "bg-white/60 border-orange-100 hover:border-orange-400/40 hover:shadow-orange-200"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                  isDark
                    ? "bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30"
                    : "bg-orange-100 text-orange-600 group-hover:bg-orange-200"
                }`}>
                  {f.icon}
                </div>
                <h3 className="font-semibold font-syne text-lg mb-2">{f.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? "text-white/60" : "text-black/55"}`}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workflow ──────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? "text-orange-400" : "text-orange-600"}`}>
              Workflow
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-syne">How it works</h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
            <div className={`grid gap-8 ${data.workflowSteps.length === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-4"}`}>
              {data.workflowSteps.map((s) => (
                <div key={s.step} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold font-syne text-lg mb-4 shadow-lg shadow-orange-500/30 z-10">
                    {s.step}
                  </div>
                  <h3 className="font-semibold font-syne text-lg mb-2">{s.title}</h3>
                  <p className={`text-sm ${isDark ? "text-white/60" : "text-black/55"}`}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className={`py-20 px-4 md:px-8 ${isDark ? "bg-white/5" : "bg-orange-50/50"}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-4">{data.ctaTitle}</h2>
          <p className={`mb-8 ${isDark ? "text-white/60" : "text-black/55"}`}>{data.ctaBody}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {data.githubUrl !== "#" && (
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border transition-all duration-200 hover:scale-105 ${
                  isDark
                    ? "border-white/20 hover:border-orange-400 text-white"
                    : "border-black/20 hover:border-orange-500 text-black"
                }`}
              >
                View on GitHub
              </a>
            )}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-200"
            >
              See other projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className={`py-8 px-4 text-center text-sm border-t ${isDark ? "border-white/10 text-white/30" : "border-orange-100 text-black/30"}`}>
        © {new Date().getFullYear()} Rhishav Lamichhane · {data.name}
      </footer>
    </div>
  );
}
