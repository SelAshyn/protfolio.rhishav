"use client";

import { Navbar } from "./components/Navbar";
import { ProjectImage } from "./components/ProjectImage";
import { useParallax } from "./hooks/useParallax";

export default function Home() {
  const { ref: heroRef, offset: heroOffset } = useParallax(0.5);
  const { ref: aboutRef, offset: aboutOffset } = useParallax(0.3);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      >
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute top-10 left-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"
            style={{ transform: `translateY(${heroOffset * 0.8}px)` }}
          />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"
            style={{ transform: `translateY(${heroOffset * 0.5}px)` }}
          />
        </div>

        <div
          className="max-w-4xl w-full text-center relative z-10"
          style={{ transform: `translateY(${heroOffset * 0.3}px)` }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm Rhishav
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Full Stack Developer & Designer. I build modern web applications with a focus on user experience.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-black dark:border-white rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="relative py-20 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden"
      >
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute -top-20 -left-20 w-80 h-80 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-3xl opacity-20"
            style={{ transform: `translateY(${aboutOffset * 0.6}px)` }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            I'm a passionate developer with expertise in React, Next.js, TypeScript, and modern web technologies. I love creating beautiful, functional applications that solve real-world problems.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the community.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6 overflow-hidden">
        {/* Decorative parallax elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute top-20 right-0 w-96 h-96 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-20"
            style={{ transform: `translateY(${-aboutOffset * 0.4}px)` }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition">
              <ProjectImage projectName="Project One" bgColor="bg-gradient-to-br from-blue-500 to-cyan-500" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Project One</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A modern web application built with React and Next.js featuring real-time data synchronization.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">TypeScript</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  View Project →
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition">
              <ProjectImage projectName="Project Two" bgColor="bg-gradient-to-br from-purple-500 to-pink-500" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Project Two</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A full-stack application with authentication, database integration, and responsive design.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Tailwind</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  View Project →
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition">
              <ProjectImage projectName="Project Three" bgColor="bg-gradient-to-br from-green-500 to-teal-500" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Project Three</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  An interactive dashboard with data visualization and analytics powered by modern tools.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">D3.js</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Firebase</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  View Project →
                </a>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition">
              <ProjectImage projectName="Project Four" bgColor="bg-gradient-to-br from-orange-500 to-red-500" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Project Four</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  An e-commerce platform with shopping cart, payment integration, and admin dashboard.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Stripe</span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">PostgreSQL</span>
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-100 dark:bg-pink-900/20 rounded-full blur-3xl opacity-20"
            style={{ transform: `translateY(${-aboutOffset * 0.5}px) translateX(-50%)` }}
          />
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 transition"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-black dark:border-white rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-black dark:border-white rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-300 dark:border-gray-700">
        <div className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Rhishav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
