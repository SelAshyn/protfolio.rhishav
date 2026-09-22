"use client";

import ProjectPageTemplate, { ProjectData } from "@/components/ProjectPageTemplate";

const data: ProjectData = {
  name: "Unite",
  tags: "Career · Mentorship · AI",
  headingPlain: "Uni",
  headingAccent: "te",
  subtitle:
    "A comprehensive career guidance platform designed to help students discover their ideal career paths, connect with experienced mentors, and build actionable roadmaps for success — powered by AI matching and personalised recommendations.",
  image: "/unite.png",
  imageAlt: "Unite screenshot",
  githubUrl: "https://github.com/SelAshyn/the_nights",
  liveUrl: "#",
  metrics: [
    { value: "AI", label: "Mentor Matching" },
    { value: "Road", label: "map Builder" },
    { value: "1:1", label: "Mentor Sessions" },
    { value: "∞", label: "Career Paths" },
  ],
  aboutTitle: "What is Unite?",
  aboutParagraphs: [
    "Choosing a career is one of the most consequential decisions a student makes, yet most make it with minimal guidance. Unite exists to change that by pairing every student with the right mentor and a clear, personalised roadmap.",
    "The AI matching engine analyses a student's interests, skills, academic background, and goals, then surfaces mentors whose trajectories align most closely. Mentors can offer async advice or schedule live sessions directly through the platform.",
    "The roadmap builder turns abstract career goals into concrete, week-by-week action plans — courses to take, projects to build, communities to join — all tailored to where the student is right now.",
  ],
  techStack: [
    { label: "Next.js", color: "bg-zinc-800 text-zinc-100" },
    { label: "TypeScript", color: "bg-blue-900/60 text-blue-200" },
    { label: "Tailwind CSS", color: "bg-cyan-900/60 text-cyan-200" },
    { label: "Google Gemini", color: "bg-purple-900/60 text-purple-200" },
    { label: "Supabase", color: "bg-green-900/60 text-green-200" },
    { label: "PostgreSQL", color: "bg-sky-900/60 text-sky-200" },
  ],
  meta: { type: "Full-stack Web App", role: "Solo Developer", status: "In Progress" },
  features: [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI Career Matching",
      description: "Get matched to career paths that align with your skills, interests, and goals.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Mentor Network",
      description: "Browse verified mentors filtered by industry, role, and availability.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Roadmap Builder",
      description: "Auto-generate a week-by-week action plan tailored to your specific career goal.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Session Scheduling",
      description: "Book 1:1 mentor sessions with integrated calendar and reminder notifications.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Async Messaging",
      description: "Exchange messages with mentors at your own pace — no scheduling required.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Progress Tracking",
      description: "Mark milestones complete and watch your roadmap progress update in real time.",
    },
  ],
  workflowSteps: [
    { step: "01", title: "Profile", desc: "Tell Unite about your background, interests, and goals." },
    { step: "02", title: "Match", desc: "AI surfaces the best-fit career paths and mentors for you." },
    { step: "03", title: "Plan", desc: "Generate a personalised roadmap with concrete next steps." },
    { step: "04", title: "Grow", desc: "Work with your mentor, hit milestones, and track progress." },
  ],
  ctaTitle: "Want to follow the build?",
  ctaBody:
    "Unite is actively being developed. Star the repo on GitHub to follow progress, or reach out if you'd like to collaborate.",
};

export default function UnitePage() {
  return <ProjectPageTemplate data={data} />;
}
