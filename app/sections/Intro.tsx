"use client";

import Link from "next/link";

const introItems = [
  { label: "What I do?", text: "Backend that works, AI stuff, Python + Automation + AI, and sometimes Flutter or websites—depends on mood." },
  { label: "Prove Your Interest in Coding!", text: "I make videos about coding and what I am learning on my YouTube Channel. Here" },
  { label: "My passions?", text: "Creating things, solving problems, and chasing new ideas." },
  { label: "When not coding?", text: "Gaming, working out, joking around, talking ideas, or questioning life." },
  { label: "What I care about?", text: "Learning cool stuff and building things I can flex." },
  { label: "My coding philosophy?", text: "Make it work → make it right → make it fast → make it beautiful." },
  { label: "My weakness?", text: "Übermensch don't have weaknesses." },
  { label: "How I code?", text: "With music—rap, phonk, or whatever was last on reels." },
  { label: "Special stuff?", text: "Good humor, Creative, quick learner—this site is proof." },
];

const socials = [
  { label: "Github", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Intro() {
  return (
    <section className="w-full px-4 md:px-8 py-20 md:py-28 max-w-7xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-14 md:mb-20">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#F4581A] mb-4">
          🧑‍💻 The person behind the code
        </p>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-[#1A1208]"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Let&apos;s start with my name
        </h2>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#F4581A] via-[#FF7A3D] to-[#D94510] bg-clip-text text-transparent"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Rhishav Lamichhane
        </h1>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto mb-12 md:mb-12">
        {introItems.map(({ label, text }, i) => (
          <div
            key={i}
            className="group flex gap-4 bg-white border border-[#FFD9C2] rounded-2xl p-5 md:p-6 hover:border-[#F4581A] hover:shadow-xl hover:shadow-orange-100/50 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="flex-shrink-0 w-1 h-8 rounded-full bg-gradient-to-b from-[#F4581A] to-[#FF7A3D] group-hover:h-12 transition-all duration-300" />
            <p className="text-sm md:text-base text-[#1A1208] leading-relaxed">
              <strong className="bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] bg-clip-text text-transparent font-bold">{label}:</strong>{" "}
              <span className="text-[#7A6A5A]">{text}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Contact / Social bar */}
      <div
        id="contact"
        className="flex w-full sm:flex-row gap-6 sm:gap-10 bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] px-2 sm:px-2 py-4 sm:py-4 rounded-3xl justify-center items-center shadow-2xl shadow-orange-200/50"
      >
        <h3
          className="font-black text-xl sm:text-2xl text-white"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Find Me:
        </h3>
        {socials.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="font-bold text-base sm:text-lg text-white hover:text-white/80 underline-offset-4 hover:underline transition-all duration-200"
          >
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
