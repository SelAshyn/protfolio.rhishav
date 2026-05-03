"use client";

import { Button } from "@/app/components/Button";
import { useState, useRef } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cardMousePos, setCardMousePos] = useState({ x: 0, y: 0 });
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const element = statsRefs.current[index];
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY)/ 15;
    const rotateY = (centerX - x) / 15;

    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  };

  const handleMouseLeave = (index: number) => {
    const element = statsRefs.current[index];
    if (element) {
      element.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
    setHoveredIndex(null);
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCardMousePos({ x, y });
  };

  const stats = [
    { label: "Total Experience", value: "24 months" },
    { label: "Projects", value: "24" },
    { label: "GitHub Stars", value: "24" },
  ];
  return (
    <section className="w-full flex items-center justify-center px-4 md:px-8 py-16 md:py-24 min-h-[calc(100vh-64px)] relative">
      <div className="grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <span
            className="inline-block mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] bg-clip-text text-transparent border-l-2 border-[#F4581A] pl-3 w-fit mx-auto lg:mx-0"
          >
            💼 Available for hire
          </span>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight mb-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="text-[#1A1208]">Hi, I&apos;m </span>
            <span className="block bg-gradient-to-r from-[#F4581A] via-[#FF7A3D] to-[#D94510] bg-clip-text text-transparent">
              Rhishav
            </span>
          </h1>

          <p className="mt-2 text-sm md:text-sm text-[#C4B8AD] font-medium uppercase tracking-widest">
            Creative Developer & Builder
          </p>

          <p className="mt-8 md:mt-10 text-base sm:text-lg md:text-lg text-[#7A6A5A] leading-relaxed max-w-lg mx-auto lg:mx-0">
            I can do whatever you need, as long as I&apos;m learning something or getting paid well enough for my time — preferably both.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
            <Button variant="primary" className="w-full sm:w-auto text-base font-bold px-8 py-3">
              → Hire Me
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto text-base font-bold px-8 py-3">
              View Resume
            </Button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center lg:justify-end">
          <div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={() => setCardMousePos({ x: 0, y: 0 })}
            className="w-full max-w-md rounded-3xl bg-white border border-[#FFD9C2] p-8 md:p-10 space-y-6 shadow-2xl shadow-orange-200/50 relative overflow-hidden group"
          >
            {/* Corner glow effects */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full blur-2xl"
              style={{
                background: "radial-gradient(circle, rgba(244,88,26,0.3) 0%, transparent 70%)",
                transform: `translate(calc(${cardMousePos.x}px - 50%), calc(${cardMousePos.y}px - 50%))`
              }}
            />
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full blur-2xl"
              style={{
                background: "radial-gradient(circle, rgba(255,122,61,0.3) 0%, transparent 70%)",
                transform: `translate(calc(${cardMousePos.x}px - 50%), calc(${cardMousePos.y}px - 50%))`
              }}
            />

            {/* Decorative gradients */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#F4581A] to-[#FF7A3D] rounded-full opacity-5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-[#F4581A] to-[#FFD9C2] rounded-full opacity-5 blur-3xl pointer-events-none" />

            {/* PROFILE HEADER */}
            <div className="flex items-center gap-4 relative z-10">
              <img
                src="/logo1.png"
                width={56}
                height={56}
                alt="Rhishav Lamichhane"
                className="rounded-2xl w-16 h-16 border-3 border-[#F4581A]/20 object-cover"
              />
              <div>
                <h2
                  className="text-lg font-bold text-[#1A1208]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Rhishav Lamichhane
                </h2>
                <p className="text-xs uppercase font-bold tracking-widest text-[#F4581A]">Quick Stats</p>
              </div>
            </div>

            {/* Divider with gradient */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#FFD9C2] to-transparent relative z-10" />

            {/* STATS */}
            <div className="space-y-3 relative z-10">
              {stats.map(({ label, value }, index) => (
                <div
                  key={label}
                  ref={(el) => {
                    statsRefs.current[index] = el;
                  }}
                  onMouseMove={(e) => {
                    setHoveredIndex(index);
                    handleMouseMove(e, index);
                  }}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className="p-4 rounded-xl bg-gradient-to-br from-[#FFF4EE] to-white border border-[#FFD9C2] hover:border-[#F4581A] hover:shadow-lg hover:shadow-orange-100 transition-all duration-100 group cursor-pointer"
                  style={{ willChange: "transform" }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#7A6A5A] font-semibold group-hover:text-[#1A1208]">{label}</span>
                    <span className="font-black text-[#F4581A] text-lg">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
