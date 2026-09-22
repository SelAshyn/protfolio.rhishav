"use client";

import ProjectPageTemplate, { ProjectData } from "@/components/ProjectPageTemplate";

const data: ProjectData = {
  name: "Personal Expense Tracker",
  tags: "Finance · Full-stack · Data Viz",
  headingPlain: "Expense",
  headingAccent: " Tracker",
  subtitle:
    "A full-stack web application for tracking, categorising, and visualising personal expenses and income — built with a Next.js frontend and a Flask REST API backend, with data stored in a lightweight CSV file.",
  image: "/tracker.png",
  imageAlt: "Personal Expense Tracker screenshot",
  githubUrl: "https://github.com/SelAshyn/Personal-Expenses-Tracker",
  liveUrl: "#",
  metrics: [
    { value: "CSV", label: "Zero-DB Storage" },
    { value: "Chart", label: "Visual Breakdowns" },
    { value: "REST", label: "API Architecture" },
    { value: "100%", label: "Self-hosted" },
  ],
  aboutTitle: "What is the Expense Tracker?",
  aboutParagraphs: [
    "Most expense trackers are either too simple or too bloated. This one sits in the sweet spot — a clean UI for day-to-day logging paired with just enough visualisation to actually understand your spending.",
    "The backend is a Flask REST API that reads and writes to a CSV file, making it trivially easy to self-host, inspect raw data, or export for further analysis in Excel or Python.",
    "The frontend renders interactive charts for monthly trends, category breakdowns, and income vs. expense comparisons — all updated in real time as you add or edit entries.",
  ],
  techStack: [
    { label: "Next.js", color: "bg-zinc-800 text-zinc-100" },
    { label: "TypeScript", color: "bg-blue-900/60 text-blue-200" },
    { label: "Tailwind CSS", color: "bg-cyan-900/60 text-cyan-200" },
    { label: "Flask", color: "bg-orange-900/60 text-orange-200" },
    { label: "Python", color: "bg-yellow-900/60 text-yellow-200" },
    { label: "Recharts", color: "bg-pink-900/60 text-pink-200" },
    { label: "CSV", color: "bg-green-900/60 text-green-200" },
  ],
  meta: { type: "Full-stack Web App", role: "Solo Developer", status: "Live" },
  features: [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
      title: "Add Transactions",
      description: "Quickly log expenses or income with a category, amount, date, and optional note.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: "Categories",
      description: "Organise spending into custom categories — food, rent, entertainment, and more.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: "Pie Charts",
      description: "Category breakdown charts show exactly where your money goes each month.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Trend Lines",
      description: "Monthly income vs. expense line charts help you spot saving patterns over time.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      title: "CSV Export",
      description: "Download your full transaction history as a CSV — ready for Excel or Python analysis.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "REST API",
      description: "Flask backend exposes clean endpoints — easy to extend or hook into other tools.",
    },
  ],
  workflowSteps: [
    { step: "01", title: "Log", desc: "Add an expense or income entry with category and amount." },
    { step: "02", title: "Organise", desc: "Entries are saved to CSV and grouped by category/month." },
    { step: "03", title: "Visualise", desc: "Charts update instantly to reflect your current data." },
    { step: "04", title: "Export", desc: "Download your data anytime for external analysis." },
  ],
  ctaTitle: "Want to see the code?",
  ctaBody:
    "The full source — Flask API and Next.js frontend — is on GitHub. Fork it, run it locally, and make it yours.",
};

export default function ExpenseTrackerPage() {
  return <ProjectPageTemplate data={data} />;
}
