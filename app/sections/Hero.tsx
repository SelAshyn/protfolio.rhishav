"use client";

import { Button } from "@/components/ui/Button";
import { useRef, useState } from "react";
import { useTheme } from "@/app/providers";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export function Hero() {
  const { theme } = useTheme();
  const [cardMousePos, setCardMousePos] = useState({ x: 0, y: 0 });
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const animationFrameRefs = useRef<(number | null)[]>([]);
  const sectionRef = useScrollAnimation();
  const isDark = theme === "dark";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    // Cancel previous frame if it exists
    if (animationFrameRefs.current[index] !== null) {
      cancelAnimationFrame(animationFrameRefs.current[index]!);
    }

    const el = statsRefs.current[index];
    if (!el) return;

    // Use requestAnimationFrame to batch transform updates
    animationFrameRefs.current[index] = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 22;
      const rotateY = (rect.width / 2 - x) / 22;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
  };

  const handleMouseLeave = (index: number) => {
    const el = statsRefs.current[index];
    if (el) {
      // Cancel pending animation frame
      if (animationFrameRefs.current[index] !== null) {
        cancelAnimationFrame(animationFrameRefs.current[index]!);
      }
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCardMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const stats = [
    { label: "Total Experience", value: "24 months" },
    { label: "Projects",         value: "24" },
    { label: "GitHub Stars",     value: "24" },
  ];

  return (
    <section
      ref={sectionRef}
      className="scroll-reveal align-middle w-full flex items-center justify-center px-4 md:px-8 py-16 md:py-24 min-h-[calc(100vh-64px)] relative"
    >
      <div className="grid w-full max-w-[1400px] grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

        {/* ── LEFT CONTENT ── */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <span className="inline-block mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] bg-clip-text text-transparent border-l-2 border-[#F4581A] pl-3 w-fit mx-auto lg:mx-0">
            💼 Available for hire
          </span>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight mb-2 font-syne"
          >
            <span className={isDark ? "text-[#F5EDE4]" : "text-[#1A1208]"}>Hi, I&apos;m </span>
            <span className="block bg-gradient-to-r from-[#F4581A] via-[#FF7A3D] to-[#D94510] bg-clip-text text-transparent">
              Rhishav
            </span>
          </h1>

          <p className={`mt-2 text-sm font-medium uppercase tracking-widest ${isDark ? "text-[#ff0000]" : "text-[#490d0d]"}`}>
            Creative Developer &amp; Builder
          </p>

          <p className={`mt-8 md:mt-10 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 ${isDark ? "text-[#A89880]" : "text-[#3d2105]"}`}>
            I can do whatever you need, as long as I&apos;m learning something or getting paid well enough for my time — preferably both.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 sm:justify-center lg:justify-start">
            <Button variant="primary"   className="w-full sm:w-auto text-base font-bold px-8 py-3">→ Hire Me</Button>
            <Button variant="secondary" className="w-full sm:w-auto text-base font-bold px-8 py-3">View Resume</Button>
          </div>
        </div>

        {/* ── RIGHT CARD ── */}
        <div className="flex justify-center lg:justify-end">
          <div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={() => setCardMousePos({ x: 0, y: 0 })}
            className={`w-full max-w-md rounded-3xl p-8 md:p-10 space-y-6 relative overflow-hidden group
              transition-[box-shadow,border-color] duration-300
              ${isDark
                ? "bg-[#1a1208]/60 border border-white/10 shadow-xl shadow-black/40 backdrop-blur-sm"
                : "bg-[#FFF4EE]/60 border border-[#FFD9C2] shadow-xl"
              }`}
          >
            {/* Mouse-follow glow */}
            <div
              className="absolute w-48 h-48 opacity-0 group-hover:opacity-100 pointer-events-none rounded-full blur-xl"
              style={{
                background: "radial-gradient(circle, rgba(244,88,26,0.25) 0%, transparent 70%)",
                transform: `translate(calc(${cardMousePos.x}px - 50%), calc(${cardMousePos.y}px - 50%))`,
                transition: "opacity 0.4s ease",
              }}
            />

            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#F4581A] to-[#FF7A3D] rounded-full opacity-5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-[#F4581A] to-[#FFD9C2] rounded-full opacity-5 blur-3xl pointer-events-none" />

            {/* Profile header */}
            <div className="flex items-center gap-4 relative z-10">
              <img
                src="/logo1.png"
                width={56}
                height={56}
                alt="Rhishav Lamichhane"
                className="rounded-2xl w-16 h-16 object-cover border-2 border-[#F4581A]/20"
              />
              <div>
                <h2 className={`text-lg font-syne font-bold ${isDark ? "text-[#F5EDE4]" : "text-[#1A1208]"}`}>
                  Rhishav Lamichhane
                </h2>
                <p className="text-xs font-playwrite-gb-s tracking-widest text-[#F4581A] mt-0.5">Quick Stats</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px relative z-10 bg-gradient-to-r from-transparent via-[#ff6200] to-transparent"/>

            {/* Stats */}
            <div className="space-y-3 relative z-10">
              {stats.map(({ label, value }, index) => (
                <div
                  key={label}
                  ref={(el) => { statsRefs.current[index] = el; }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className={`stat-row p-4 rounded-xl border cursor-pointer group/stat will-change-transform
                    ${isDark
                      ? "bg-white/5 border-white/10 hover:border-[#F4581A] transition-[border-color,box-shadow,background-color] duration-250 hover:bg-white/10 hover:shadow-lg hover:shadow-black/30"
                      : "bg-white/30 transition-[border-color,box-shadow,background-color] duration-250 to-white border-[#FFD9C2] hover:border-[#F4581A]"
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-dm-sans font-medium tracking-wide transition-colors duration-250 ${isDark ? "text-[#A89880] group-hover/stat:text-[#F5EDE4]" : "text-[#7A6A5A] group-hover/stat:text-[#1A1208]"}`}>
                      {label}
                    </span>
                    <span className="font-jetbrains-mono font-bold text-[#F4581A] text-lg tabular-nums tracking-tight">
                      {value}
                    </span>
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
