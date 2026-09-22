'use client'

import { Hero } from "./sections/Hero";
import { Navbar } from "@/components/Navbar";
import Intro from "./sections/Intro";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Project />
        <Skills />
        <Contact />
      </main>
      <footer className="py-6 text-center text-xs text-black/30 dark:text-white/30 border-t border-orange-100 dark:border-white/10">
        © {new Date().getFullYear()} Rhishav Lamichhane · Built with Next.js
      </footer>
    </>
  );
}
