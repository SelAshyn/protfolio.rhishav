import React from 'react'
import Link from 'next/link'
import { useTheme } from '@/app/providers';

const projects = [
  {
    name: "ViralLab",
    slug: "ViralLab",
    liveUrl: "",
    description: "ViralLab is an AI-powered social media content analyzer. Upload a video or image, select your platform, and get an instant virality score with metric breakdowns, AI suggestions, hashtag recommendations, and exportable reports.",
  },
  {
    name: "Health Insight Agent",
    slug: "health-insight-agent",
    liveUrl: "https://health-insights-agent.vercel.app",
    description: "An AI-powered health report analysis platform. Upload a PDF health report, get a plain-language explanation of your results, and ask follow-up questions in a chat interface — no medical background required.",
  },
  {
    name: "EcoSpark",
    slug: "ecospark",
    liveUrl: "https://ecospark-eosin.vercel.app",
    description: "EcoSpark is a comprehensive sustainability platform that bridges the gap between agricultural waste, land restoration, and community-driven farming. Features include waste tracking, restoration planning, and more.",
  },
  {
    name: "Personal Expense Tracker",
    slug: "personal-expense-tracker",
    liveUrl: "",
    description: "A full-stack web application for tracking, categorizing, and visualizing personal expenses and income. Built with a Next.js frontend and a Flask REST API backend, with data stored in a simple CSV file.",
  },
  {
    name: "Unite",
    slug: "unite",
    liveUrl: "",
    description: "Unite is a comprehensive career guidance platform designed to help students discover their ideal career paths, connect with experienced mentors, and build actionable roadmaps for success. AI-powered matching and personalized recommendations.",
  },
  {
    name: "Novella",
    slug: "novella",
    liveUrl: "https://novella-library.vercel.app",
    description: "A personal reading companion to organise your book collection, track reading progress, write private notes, build a vocabulary list, and maintain reading streaks — all in one place.",
  },
];

const Project = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
  return (
    <div id="projects">
        <div className={`scroll-reveal w-full flex flex-col align-middle items-center justify-center px-4 md:px-8 py-16 md:py-24 min-h-[calc(100vh-64px)] mt-10 relative`}>
            <div>
                <center><p className={`mt-1 text-[14px] w-max px-2 mb-4 rounded-4xl bg-amber-700/30 ${isDark ? 'text-white' : 'text-black'}`}>Projects</p></center>
                <h1 className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-orange-600' : 'text-orange-400'}`}>Stuffs I Built</h1>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl text-center gap-10 justify-center lg:justify-start'>
                {projects.map((project) => (
                    <div key={project.name} className={`flex flex-col py-8 px-10 border-1 border-orange-600/20 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${isDark ? 'bg-black/40 text-white' : 'bg-white/30 text-black'}`}>
                        <h2 className="text-2xl font-semibold mb-6 text-orange-600">{project.name}</h2>
                        <p className="text-center flex-1 mb-6 text-sm">{project.description}</p>
                        <div className="flex gap-2 justify-center flex-wrap">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="rounded-sm text-orange-100 hover:scale-105 transition-all duration-300 bg-amber-800 px-4 py-1 inline-block text-sm"
                          >
                            View Details
                          </Link>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`rounded-sm hover:scale-105 transition-all duration-300 border border-orange-600/50 px-4 py-1 inline-flex items-center gap-1 text-sm ${isDark ? 'text-orange-300 hover:bg-orange-600/10' : 'text-orange-700 hover:bg-orange-100'}`}
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Project