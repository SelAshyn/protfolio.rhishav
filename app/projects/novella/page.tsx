"use client";

import ProjectPageTemplate, { ProjectData } from "@/components/ProjectPageTemplate";

const data: ProjectData = {
  name: "Novella",
  tags: "Reading · Productivity · Full-stack",
  headingPlain: "Nov",
  headingAccent: "ella",
  subtitle:
    "A personal reading companion to organise your book collection, track reading progress, write private notes, build a vocabulary list, and maintain reading streaks — all in one place.",
  image: "/novella.png",
  imageAlt: "Novella app screenshot",
  githubUrl: "https://github.com/SelAshyn/book-library",
  liveUrl: "https://novella-library.vercel.app",
  metrics: [
    { value: "Full", label: "Stack App" },
    { value: "OAuth", label: "Google + Email Auth" },
    { value: "REST", label: "Django API" },
    { value: "Live", label: "on Vercel + Render" },
  ],
  aboutTitle: "What is Novella?",
  aboutParagraphs: [
    "Novella started as a simple question: why is tracking what you read still so clunky? Goodreads is social when you just want something personal. Notion is too manual. Novella is the middle ground — a focused, private reading companion.",
    "The app lets you manage a full book library with cover images, track reading status, write per-book notes, and save vocabulary words you encounter along the way. Reading stats and streaks give you a gentle nudge to keep going.",
    "The stack is Next.js 16 on the frontend with Firebase Auth for identity, and a Django REST Framework API on the backend that verifies Firebase ID tokens — no sessions, no JWT gymnastics. Cover images are uploaded to Cloudinary and feedback is handled via Formspree.",
  ],
  techStack: [
    { label: "Next.js 16", color: "bg-zinc-800 text-zinc-100" },
    { label: "React 19", color: "bg-sky-900/60 text-sky-200" },
    { label: "Tailwind CSS v4", color: "bg-cyan-900/60 text-cyan-200" },
    { label: "Firebase Auth", color: "bg-yellow-900/60 text-yellow-200" },
    { label: "Django 6", color: "bg-green-900/60 text-green-200" },
    { label: "Django REST Framework", color: "bg-emerald-900/60 text-emerald-200" },
    { label: "PostgreSQL", color: "bg-blue-900/60 text-blue-200" },
    { label: "Cloudinary", color: "bg-purple-900/60 text-purple-200" },
    { label: "Axios", color: "bg-indigo-900/60 text-indigo-200" },
    { label: "Vercel + Render", color: "bg-orange-900/60 text-orange-200" },
  ],
  meta: { type: "Full-stack Web App", role: "Solo Developer", status: "Live" },
  features: [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Book Library",
      description: "Add books with title, author, page count, cover image, and status — Reading, Completed, or Want to Read.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Quick Status Actions",
      description: "One-tap 'Start Reading' and 'Mark as Completed' buttons on every book card.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Private Notes",
      description: "Write per-book notes with live word count tracking — visible only to you.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      ),
      title: "Vocabulary Builder",
      description: "Save words discovered while reading with optional meaning, example sentence, and source book link.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Reading Stats & Streaks",
      description: "Total books, pages read, current streak, and more — gamified enough to keep you reading.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Cover Image Upload",
      description: "Paste a URL, browse from device, or take a photo — uploaded instantly to Cloudinary.",
    },
  ],
  workflowSteps: [
    { step: "01", title: "Sign Up", desc: "Create an account with email/password or Google OAuth." },
    { step: "02", title: "Add Books", desc: "Build your library with covers, authors, and page counts." },
    { step: "03", title: "Track", desc: "Update reading status and log notes as you go." },
    { step: "04", title: "Grow", desc: "Save vocabulary, hit streaks, and watch your stats climb." },
  ],
  ctaTitle: "Try it live or read the code",
  ctaBody:
    "Novella is live at novella-library.vercel.app. The full source — Next.js frontend and Django backend — is on GitHub.",
};

export default function NovellaPage() {
  return <ProjectPageTemplate data={data} />;
}
