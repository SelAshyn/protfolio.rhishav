import React from "react";

export const buttonStyles = {
  primary:
    "px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-orange-300 active:scale-95 transition-all duration-300 font-['DM_Sans'] transform hover:scale-105",
  secondary:
    "px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#F4581A] font-bold rounded-xl border-2 border-[#F4581A] hover:bg-[#FFF4EE] hover:border-[#FF7A3D] hover:shadow-lg hover:shadow-orange-200/50 transition-all duration-300 font-['DM_Sans'] transform hover:scale-105 active:scale-95",
  outline:
    "px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-[#F4581A] font-bold rounded-xl border-2 border-[#F4581A] hover:bg-[#FFF4EE] hover:border-[#FF7A3D] transition-all duration-300 font-['DM_Sans'] transform hover:scale-105 active:scale-95",
  dark:
    "px-6 sm:px-8 py-3 sm:py-4 bg-[#1A1208] text-white font-bold rounded-xl hover:bg-[#2d2010] hover:shadow-lg hover:shadow-orange-200/30 transition-all duration-300 font-['DM_Sans'] transform hover:scale-105 active:scale-95",
};

export type ButtonStyle = keyof typeof buttonStyles;

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonStyle;
  disabled?: boolean;
  className?: string;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${buttonStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
