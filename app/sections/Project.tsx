import React from 'react'
import { useTheme } from '@/app/providers';


const Project = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
  return (
    <div>
        <div className={`scroll-reveal w-full flex flex-col align-middle items-center justify-center px-4 md:px-8 py-16 md:py-24 min-h-[calc(100vh-64px)] relative`}>
            <div>
                <center><p className={`mt-1 text-[14px] w-max px-2 mb-4 rounded-4xl bg-amber-700/30 ${isDark ? 'text-white' : 'text-black'}`}>Projects</p></center>
                <h1 className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-orange-600' : 'text-orange-800'}`}>Stuffs I Built</h1>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl text-center gap-10 justify-center lg:justify-start'>
                {[
                    { name: "ViralLab", description: "ViralLab is an AI-powered social media content analyzer. Upload a video or image, select your platform, and get an instant virality score with metric breakdowns, AI suggestions, hashtag recommendations, and exportable reports." },
                    { name: "Health Insight Agent", description: "An AI-powered health report analysis platform. Upload a PDF health report, get a plain-language explanation of your results, and ask follow-up questions in a chat interface — no medical background required. " },
                    { name: "EcoSpark", description: "Ecospark is a comprehensive sustainability platform that bridges the gap between agricultural waste, land restoration, and community-driven farming. Features include waste tracking, restoration planning, and so on." },
                    { name: "Personal Expense Tracker", description: "A full-stack web application for tracking, categorizing, and visualizing personal expenses and income. Built with a Next.js frontend and a Flask REST API backend, with data stored in a simple CSV file." },
                    { name: "Unite", description: "Unite is a comprehensive career guidance platform designed to help students discover their ideal career paths, connect with experienced mentors, and build actionable roadmaps for success. AI-powered matching and personalized recommendations." },
                    { name: "ALCC", description: "Modern, clean website for the SXC A Levels Computer Club (ALCC) — a student-led tech community at St. Xavier's College, Kathmandu. Built as a personal side project by a club member to give the club a proper digital home." },
                ].map((project) => (

                    <div key={project.name} className={`flex flex-col py-8 px-10 border-1 border-orange-600/20 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${isDark ? 'bg-black/40 text-white' : 'bg-white/30 text-black'}`}>
                        <h2 className="text-2xl font-semibold mb-6 text-orange-600">{project.name}</h2>
                        <p className="text-center flex-1 mb-6 text-sm">{project.description}</p>
                        <button className="rounded-sm text-orange-100 hover:scale-105 transition-all duration-300 bg-amber-800 m-auto px-4 py-1"><a href={`../projects/${project.name}`} rel="noopener noreferrer">View Details</a></button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Project
