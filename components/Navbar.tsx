"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/app/providers";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = ["Home", "Projects", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isDark = theme === 'dark';

  return (
    <nav>
      <div className="fixed left-0 right-0 mx-auto top-0 px-4 sm:px-6 pt-4 z-50 w-full">
        <div style={{
          backdropFilter: "blur(8px) saturate(180%)",
          WebkitBackdropFilter: "blur(8px) saturate(180%)",
          backgroundColor: isDark
            ? (scrolled ? "rgba(5,0,10,0.6)" : "rgba(20,0,40,0.35)")
            : (scrolled ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.5)"),
          border: isDark
            ? "1px solid rgba(255,255,255,0.12)"
            : "1px solid rgba(244,88,26,0.2)",

          transition: "background-color 0.4s ease",
        }}
        className="mx-auto flex max-w-6xl items-center justify-between rounded-4xl px-3 py-2">

          {/* Logo + Name */}
          <div className="flex items-center gap-1">
            <img
              src="/logo2.png"
              width={40}
              height={40}
              alt="Rhishav Lamichhane"
              className="md:w-[30px] md:h-[30px] rounded-xl transition-transform duration-300 ease-out will-change-transform hover:scale-110"
            />
            <h1
              className={`text-lg md:text-lg font-bold font-syne bg-gradient-to-r bg-clip-text text-transparent ${
                isDark
                  ? "from-[#FFD9C2] to-[#FF7A3D]"
                  : "from-[#1A1208] to-[#F4581A]"
              }`}
            >
              Rhishav Lamichhane
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className={`nav-underline text-[14px] font-poppins font-bold tracking-[0px] transition-colors duration-250 ${
                  isDark ? "text-[#F5EDE4] hover:text-[#F4581A]" : "text-[#1A1208] hover:text-[#F4581A]"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Theme Toggle + Resume */}
          <div className="hidden md:flex gap-4 items-center">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-yellow-300"
                  : "bg-orange-100 hover:bg-orange-200 text-orange-600"
              }`}
              aria-label="Toggle theme"
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? (
                <svg id="Layer_1" className="w-5 h-5" data-name="Layer 1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><path d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z"/></svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Resume Button */}
            <a
              href=""
              className="px-6 py-2 font-bold tracking-wide rounded-[100px] bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] text-white hover:shadow-[0_0px_10px_rgba(244,88,26,0.3)] hover:shadow-orange-300 transition-all duration-100 shadow-md text-sm md:text-base hover:scale-105 active:scale-95"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-yellow-300"
                  : "bg-orange-100 hover:bg-orange-200 text-orange-600"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.464 14.536l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zm-.707-2.121a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM3 11a1 1 0 100-2H2a1 1 0 100 2h1z" />
                 </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 z-50"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isDark ? "bg-white" : "bg-[#1A1208]"
                } ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isDark ? "bg-white" : "bg-[#1A1208]"
                } ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isDark ? "bg-white" : "bg-[#1A1208]"
                } ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`absolute top-20 left-4 right-4 backdrop-blur-xl rounded-2xl shadow-xl p-6 md:hidden animate-in fade-in slide-in-from-top-2 duration-300 ${
            isDark
              ? "bg-white/10 border border-white/20"
              : "bg-white/90 border border-[#FFD9C2]"
          }`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-playwrite-gb-s hover:text-[#F4581A] transition-all duration-300 relative group py-2 ${isDark ? "text-[#F5EDE4]" : "text-[#1A1208]"}`}
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <div className={`pt-4 mt-2 ${isDark ? "border-t border-white/20" : "border-t border-[#FFD9C2]"}`}>
                <a
                  href=""
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 font-bold tracking-wide rounded-xl bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] text-white text-center hover:shadow-lg hover:shadow-orange-300 transition-all duration-300 shadow-md text-base"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
