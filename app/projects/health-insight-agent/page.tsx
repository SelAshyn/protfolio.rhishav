"use client";

import ProjectPageTemplate, { ProjectData } from "@/components/ProjectPageTemplate";

const data: ProjectData = {
  name: "Health Insight Agent",
  tags: "AI · Health · PDF Analysis",
  headingPlain: "Health Insight",
  headingAccent: " Agent",
  subtitle:
    "An AI-powered health report analysis platform. Upload a PDF health report, get a plain-language explanation of your results, and ask follow-up questions in a conversational chat interface — no medical background required.",
  image: "/health.png",
  imageAlt: "Health Insight Agent screenshot",
  githubUrl: "https://github.com/RhishaV/health-insight-agent",
  liveUrl: "https://health-insights-agent.vercel.app",
  metrics: [
    { value: "PDF", label: "Upload Format" },
    { value: "Chat", label: "Follow-up Interface" },
    { value: "AI", label: "Powered by Gemini" },
    { value: "0", label: "Medical Jargon" },
  ],
  aboutTitle: "What is Health Insight Agent?",
  aboutParagraphs: [
    "Reading a blood test or health report can feel like decoding a foreign language. Health Insight Agent bridges that gap — you upload your PDF report and the AI breaks down every value in plain, approachable language.",
    "Powered by Google Gemini's document understanding capabilities, the platform extracts key metrics, flags anything outside normal ranges, and gives you a clear summary you can actually act on.",
    "The built-in chat interface lets you ask follow-up questions about specific results, understand what lifestyle changes might help, or simply get more context — all without leaving the page.",
  ],
  techStack: [
    { label: "Next.js", color: "bg-zinc-800 text-zinc-100" },
    { label: "TypeScript", color: "bg-blue-900/60 text-blue-200" },
    { label: "Tailwind CSS", color: "bg-cyan-900/60 text-cyan-200" },
    { label: "Google Gemini", color: "bg-purple-900/60 text-purple-200" },
    { label: "FastAPI", color: "bg-green-900/60 text-green-200" },
    { label: "Python", color: "bg-yellow-900/60 text-yellow-200" },
  ],
  meta: { type: "Full-stack Web App", role: "Solo Developer", status: "Live" },
  features: [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "PDF Upload",
      description: "Drag and drop any health report PDF — lab results, blood panels, imaging summaries.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Plain-Language Summary",
      description: "Every metric explained in simple terms — what it means, what's normal, what to watch.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Flag Abnormalities",
      description: "Out-of-range values are automatically highlighted so nothing slips through.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Conversational Chat",
      description: "Ask follow-up questions about any result — the AI responds with context from your report.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Privacy First",
      description: "Your data is processed in-session only — nothing is stored or shared.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Instant Results",
      description: "Analysis completes in seconds regardless of report length or complexity.",
    },
  ],
  workflowSteps: [
    { step: "01", title: "Upload", desc: "Drop your PDF health report into the uploader." },
    { step: "02", title: "Analyze", desc: "Gemini reads and interprets every value in the document." },
    { step: "03", title: "Review", desc: "Read the plain-language summary with flagged items." },
    { step: "04", title: "Ask", desc: "Use the chat to dig deeper into anything that concerns you." },
  ],
  ctaTitle: "Want to see the code?",
  ctaBody:
    "The full source is on GitHub. Feel free to explore, fork, or reach out if you want to collaborate.",
};

export default function HealthInsightAgentPage() {
  return <ProjectPageTemplate data={data} />;
}
