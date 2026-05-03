import Link from "next/link";
import { Button } from "../components/Button";
import { link } from "fs";

const projects = [
  { id: 1, title: "Unite", description: "Unite is a comprehensive career guidance platform designed to help students discover their ideal career paths, connect with experienced mentors, and build actionable roadmaps for success. Powered by AI and real human expertise, we make career planning accessible, personalized, and engaging.", tag: "Full Stack Development", image: "/unite.png", link: "https://github.com/SelAshyn/the_nights" },
  { id: 2, title: "Ecospark", description: "Ecospark is a comprehensive sustainability platform that bridges the gap between agricultural waste, land restoration, and community-driven farming in Nepal. We combine AI-powered insights, peer-to-peer resource sharing, and gamified missions to create a circular economy where waste becomes wealth and barren land becomes productive.", tag: "Sustainability", image: "/ecospark.png", link: "https://github.com/SelAshyn/CCL-100-bits" },
  { id: 3, title: "Personal Expense Tracker", description: "A full-stack web application for tracking, categorizing, and visualizing personal expenses and income. Built with a Next.js frontend and a Flask REST API backend, with data stored in a simple CSV file. ", tag: "Web Development | Python", image: "/tracker.png", link: "https://github.com/SelAshyn/Personal-Expenses-Tracker"},
  { id: 4, title: "Nepal Transparency Portal", description: "A mobile app built with React Native (Expo) for monitoring Nepal's government infrastructure projects, budgets, and public procurement tenders. It promotes transparency and accountability through real-time data, AI-powered insights, and citizen reporting.", tag: "Flutter", image: "/protal.png", link: "https://github.com/RR-SM/CodeFest_Povincial"},
  { id: 5, title: "Project 5", description: "Description of Project 5.", tag: "Python", image: "/project5.png" },
  { id: 6, title: "Project 6", description: "Description of Project 6.", tag: "Web", image: "/project6.png" },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-4 md:px-8 py-20 md:py-28 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-14 md:mb-20">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#F4581A] mb-4">
          🚀 What I&apos;ve built
        </p>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#F4581A] via-[#FF7A3D] to-[#D94510] bg-clip-text text-transparent mb-6"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Projects
        </h2>
        <p className="text-base sm:text-lg text-[#7A6A5A] max-w-2xl mx-auto leading-relaxed">
          Here are some of my notable projects showcasing my skills and expertise.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group w-full flex flex-col bg-white border border-[#FFD9C2] rounded-2xl overflow-hidden hover:border-[#F4581A] hover:scale-105 hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-300"
          >
            {/* Top color bar / image placeholder */}
            <div className="w-full h-48 bg-gradient-to-br from-[#FFF4EE] via-[#FFE8D6] to-[#FFD9C2] flex items-center justify-center relative overflow-hidden group-hover:from-[#FF7A3D] group-hover:via-[#FF6B1A] group-hover:to-[#F4581A] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-white/10 group-hover:to-transparent transition-all duration-300" />
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              {/* Tag */}
              <span className="absolute top-4 right-4 text-xs font-bold px-3 py-2 rounded-full bg-white border-2 border-[#F4581A] text-[#F4581A] group-hover:bg-[#F4581A] group-hover:text-white transition-all duration-300">
                {project.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-7 md:p-8 flex flex-col flex-1 bg-white">
              <h3
                className="text-lg md:text-xl font-bold mb-3 text-[#1A1208] group-hover:text-[#F4581A] transition-colors duration-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {project.title}
              </h3>
              <p className="text-sm md:text-sm mb-6 text-[#7A6A5A] flex-1 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              {project.link ? (
                <Button
                  variant="secondary"
                  className="mt-auto text-sm font-bold w-full group-hover:scale-105"
                >
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project →
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  className="mt-auto text-sm font-bold w-full opacity-50 cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
