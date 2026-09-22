"use client";

import ProjectPageTemplate, { ProjectData } from "@/components/ProjectPageTemplate";

const data: ProjectData = {
  name: "EcoSpark",
  tags: "Sustainability · Agriculture · Community",
  headingPlain: "Eco",
  headingAccent: "Spark",
  subtitle:
    "A comprehensive sustainability platform that bridges the gap between agricultural waste, land restoration, and community-driven farming — featuring waste tracking, restoration planning, and a marketplace to connect farmers and restorers.",
  image: "/ecospark.png",
  imageAlt: "EcoSpark screenshot",
  githubUrl: "https://github.com/SelAshyn/Ecospark",
  liveUrl: "https://ecospark-eosin.vercel.app",
  metrics: [
    { value: "3", label: "Core Modules" },
    { value: "360°", label: "Sustainability View" },
    { value: "Map", label: "Restoration Planner" },
    { value: "0", label: "Waste Unaccounted" },
  ],
  aboutTitle: "What is EcoSpark?",
  aboutParagraphs: [
    "EcoSpark was born out of a simple observation: agricultural waste is everywhere, and so is degraded land that needs restoration — yet the two rarely connect. EcoSpark is the bridge.",
    "The platform has three interlocking modules: a waste tracking dashboard for farmers to log and categorise their byproducts, a restoration planner that maps land parcels and tracks recovery progress, and a community marketplace where waste and restoration resources can be exchanged.",
    "The goal is to create a closed-loop sustainability ecosystem where one farm's waste becomes another plot's fertiliser, and every hectare of degraded land has a plan for recovery.",
  ],
  techStack: [
    { label: "Next.js", color: "bg-zinc-800 text-zinc-100" },
    { label: "TypeScript", color: "bg-blue-900/60 text-blue-200" },
    { label: "Tailwind CSS", color: "bg-cyan-900/60 text-cyan-200" },
    { label: "Mapbox GL", color: "bg-indigo-900/60 text-indigo-200" },
    { label: "Supabase", color: "bg-green-900/60 text-green-200" },
    { label: "PostgreSQL", color: "bg-sky-900/60 text-sky-200" },
  ],
  meta: { type: "Full-stack Web App", role: "Solo Developer", status: "In Progress" },
  features: [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Waste Tracking",
      description: "Log agricultural byproducts by type, volume, and location with a clean dashboard.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "Restoration Planner",
      description: "Map land parcels, assign restoration activities, and track recovery over time.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community Marketplace",
      description: "Exchange waste materials and restoration resources with nearby farms and projects.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Farmer Profiles",
      description: "Build a public profile showcasing your sustainability practices and available resources.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: "Impact Dashboard",
      description: "Visualise your environmental contributions — waste diverted, land restored, CO₂ offset.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "Activity Alerts",
      description: "Get notified when nearby farms post waste offers or restoration opportunities.",
    },
  ],
  workflowSteps: [
    { step: "01", title: "Register", desc: "Create a farm or restoration project profile." },
    { step: "02", title: "Log", desc: "Track waste output or land parcels needing attention." },
    { step: "03", title: "Connect", desc: "Browse the marketplace to exchange resources with others." },
    { step: "04", title: "Restore", desc: "Execute plans and watch your impact metrics grow." },
  ],
  ctaTitle: "Interested in the project?",
  ctaBody:
    "EcoSpark is actively being developed. Check the repo for the latest progress or get in touch if you'd like to contribute.",
};

export default function EcoSparkPage() {
  return <ProjectPageTemplate data={data} />;
}
