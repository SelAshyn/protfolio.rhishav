"use client";

import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Projects", "Contact"];

  return (
    <nav>
      <div className="fixed left-0 right-0 mx-auto top-0 px-4 sm:px-6 pt-4 z-50 w-full">
        <div className="bg-white/80 max-w-[1300px] mx-auto h-[64px] flex items-center justify-between px-4 sm:px-6 rounded-2xl backdrop-blur-xl border border-[#FFD9C2] shadow-lg shadow-orange-100/50">

          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src="/logo2.png"
              width={40}
              height={40}
              alt="Rhishav Lamichhane"
              className="md:w-[46px] md:h-[46px] rounded-xl hover:scale-110 transition-transform"
            />
            <h1
              className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#1A1208] to-[#F4581A] bg-clip-text text-transparent"
              style={{ fontFamily: "'Syne', sans-serif" }}
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
                className="text-sm md:text-base font-bold text-[#1A1208] hover:text-[#F4581A] transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2.5px] bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <a
              href=""
              className="px-6 py-2 font-bold tracking-wide rounded-xl bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] text-white hover:shadow-lg hover:shadow-orange-300 transition-all duration-300 shadow-md text-sm md:text-base hover:scale-105 active:scale-95"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#1A1208] rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#1A1208] rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#1A1208] rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#FFD9C2] shadow-xl p-6 md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-bold text-[#1A1208] hover:text-[#F4581A] transition-all duration-300 relative group py-2"
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <div className="border-t border-[#FFD9C2] pt-4 mt-2">
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
