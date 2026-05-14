'use client'

import { Hero } from "./sections/Hero";
import { Navbar } from "@/components/Navbar";
import LightRays from "@/components/LightRays";
import Intro from "./sections/Intro";
import Project from "./sections/Project";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LightRays
    raysOrigin="top-center"
    raysColor="#ed8c66"
    raysSpeed={1.5}
    lightSpread={1.2}
    rayLength={4}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0}
    distortion={0.1}
    className="custom-rays"
    pulsating={false}
    fadeDistance={1.8}
    saturation={1}
/>
      </div>
      <Navbar />
      <Hero />
      <Intro />
      <Project />
      <Skills />
    </>
  );
}
