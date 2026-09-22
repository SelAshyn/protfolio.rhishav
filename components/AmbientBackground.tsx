"use client";

/**
 * AmbientBackground
 *
 * Two soft, blurred orbs that drift slowly around the viewport.
 * Light theme: very pale peach/amber tones, barely visible.
 * Dark theme: slightly more visible warm glow.
 * No canvas, no WebGL — pure CSS keyframe animation.
 */

import { useTheme } from "@/app/providers";

export default function AmbientBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <style>{`
        @keyframes orb-drift-a {
          0%   { transform: translate(0px,   0px)   scale(1);    }
          25%  { transform: translate(120px, -80px) scale(1.08); }
          50%  { transform: translate(60px,  140px) scale(0.96); }
          75%  { transform: translate(-90px, 60px)  scale(1.04); }
          100% { transform: translate(0px,   0px)   scale(1);    }
        }
        @keyframes orb-drift-b {
          0%   { transform: translate(0px,    0px)   scale(1);    }
          25%  { transform: translate(-100px, 90px)  scale(1.06); }
          50%  { transform: translate(-50px, -120px) scale(0.98); }
          75%  { transform: translate(80px,  -50px)  scale(1.03); }
          100% { transform: translate(0px,    0px)   scale(1);    }
        }
        @keyframes orb-drift-c {
          0%   { transform: translate(0px,  0px)   scale(1);    }
          33%  { transform: translate(70px, 100px) scale(1.05); }
          66%  { transform: translate(-80px, 60px) scale(0.97); }
          100% { transform: translate(0px,  0px)   scale(1);    }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      >
        {/* Orb A — top-left area */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "10%",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(244,88,26,0.32) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(253,186,116,0.45) 0%, transparent 70%)",
            filter: "blur(48px)",
            animation: "orb-drift-a 22s ease-in-out infinite",
            willChange: "transform",
          }}
        />

        {/* Orb B — bottom-right area */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "8%",
            width: "580px",
            height: "580px",
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(255,122,61,0.26) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(251,146,60,0.38) 0%, transparent 70%)",
            filter: "blur(52px)",
            animation: "orb-drift-b 28s ease-in-out infinite",
            willChange: "transform",
          }}
        />

        {/* Orb C — center, slow */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "45%",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(217,69,16,0.20) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(254,215,170,0.50) 0%, transparent 70%)",
            filter: "blur(56px)",
            animation: "orb-drift-c 35s ease-in-out infinite",
            willChange: "transform",
          }}
        />
      </div>
    </>
  );
}
