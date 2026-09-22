"use client";

import ProjectPageTemplate, { ProjectData } from "@/components/ProjectPageTemplate";

const data: ProjectData = {
  name: "ViralLab",
  tags: "AI · Social Media · Analytics",
  headingPlain: "Viral",
  headingAccent: "Lab",
  subtitle:
    "An AI-powered social media content analyzer. Upload a video or image, pick your platform, and get an instant virality score with metric breakdowns, smart suggestions, hashtag recommendations, and exportable PDF reports — all in seconds.",
  image: "/virallab.png",
  imageAlt: "ViralLab screenshot",
  githubUrl: "https://github.com/RhishaV/ViralLab",
  liveUrl: "#",
  metrics: [
    { value: "5+", label: "Platforms Supported" },
    { value: "< 3s", label: "Average Analysis Time" },
    { value: "PDF", label: "Exportable Reports" },
    { value: "100", label: "Max Virality Score" },
  ],
  aboutTitle: "What is ViralLab?",
  aboutParagraphs: [
    "ViralLab started as a personal frustration — I kept wondering why some posts blow up and others don't. Instead of guessing, I built a tool that gives you a data-backed answer.",
    "The platform uses Google Gemini's multimodal capabilities to analyze your media, then scores it across multiple virality signals: visual quality, emotional hook, caption strength, optimal posting time, and trend alignment.",
    "The result is a single score, detailed metric breakdowns, and a set of immediately actionable suggestions — all formatted into a clean report you can download or share.",
  ],
  techStack: [
    { label: "Next.js", color: "bg-zinc-800 text-zinc-100" },
    { label: "TypeScript", color: "bg-blue-900/60 text-blue-200" },
    { label: "Tailwind CSS", color: "bg-cyan-900/60 text-cyan-200" },
    { label: "Google Gemini", color: "bg-purple-900/60 text-purple-200" },
    { label: "FastAPI", color: "bg-green-900/60 text-green-200" },
    { label: "Python", color: "bg-yellow-900/60 text-yellow-200" },
    { label: "Shadcn/ui", color: "bg-orange-900/60 text-orange-200" },
  ],
  meta: { type: "Full-stack Web App", role: "Solo Developer", status: "Live" },
  features: [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "Media Upload",
      description: "Upload images or videos directly — no URL needed. Supports all major formats.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Virality Score",
      description: "Get an instant 0–100 virality score backed by platform-specific AI models.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      ),
      title: "Hashtag Engine",
      description: "Auto-generated trending hashtags tailored to your content and target platform.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI Suggestions",
      description: "Receive actionable caption tweaks, timing tips, and format recommendations.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      title: "Multi-Platform",
      description: "Optimized analysis for Instagram, TikTok, YouTube, Twitter/X, and LinkedIn.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Exportable Reports",
      description: "Download a full PDF report of your analysis to share with teams or clients.",
    },
  ],
  workflowSteps: [
    { step: "01", title: "Upload", desc: "Drop your image or video into the uploader." },
    { step: "02", title: "Choose Platform", desc: "Select the social network you're targeting." },
    { step: "03", title: "Analyze", desc: "Gemini AI processes your media in under 3 seconds." },
    { step: "04", title: "Act", desc: "Review your score, suggestions, and export a report." },
  ],
  ctaTitle: "Want to see the code?",
  ctaBody:
    "The full source is on GitHub. Feel free to explore, fork, or reach out if you want to chat about it.",
};

export default function ViralLabPage() {
  return <ProjectPageTemplate data={data} />;
}
