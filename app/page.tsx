'use client'

import { Hero } from "./sections/Hero";
import { Navbar } from "@/components/Navbar";
import Intro from "./sections/Intro";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import AmbientBackground from "@/components/AmbientBackground";
 
export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <Hero />
      <Intro />
      <Project />
      <Skills />
    </>
  );
}
