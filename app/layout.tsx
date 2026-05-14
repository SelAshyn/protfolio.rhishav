import React from "react";
import type { Metadata } from "next";
import { Syne, DM_Sans, Poppins, JetBrains_Mono, Playwrite_GB_S } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});



const playwriteGBS = Playwrite_GB_S({
  variable: "--font-playwrite-gb-s",
  weight: ["400"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rhishav Lamichhane",
  description: "Portfolio of Rhishav Lamichhane",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
          ${syne.variable}
          ${dmSans.variable}
          ${poppins.variable}
          ${playwriteGBS.variable}
          ${jetbrainsMono.variable}
          font-dm-sans antialiased relative overflow-x-hidden
        `}
      >
        <ThemeProvider>
          {/* Background blobs — isolated on their own GPU layer */}
          <div className="fixed top-0 -left-40 w-80 h-80 bg-orange-400 rounded-full blur-3xl opacity-20 animate-blob pointer-events-none translate-z-0" />
          <div className="fixed top-40 -right-40 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none translate-z-0" />
          <div className="fixed -bottom-8 left-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl opacity-15 animate-blob animation-delay-4000 pointer-events-none translate-z-0" />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
