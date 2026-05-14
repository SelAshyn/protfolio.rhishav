import React from "react";

export const buttonStyles = {
  primary:
    "px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#F4581A] to-[#FF7A3D] text-white font-bold rounded-xl " +
    "shadow-md hover:shadow-[0_8px_24px_rgba(244,88,26,0.35)] " +
    "transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] " +
    "hover:scale-105 active:scale-95 will-change-transform",

  secondary:
    "px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-xl border-2 border-[#F4581A] text-[#F4581A] bg-transparent " +
    "hover:bg-[#F4581A] hover:text-white hover:shadow-[0_8px_24px_rgba(244,88,26,0.25)] " +
    "transition-[transform,background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] " +
    "hover:scale-105 active:scale-95 will-change-transform",

  outline:
    "px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-[#F4581A] font-bold rounded-xl border-2 border-[#F4581A] " +
    "hover:bg-[#F4581A]/10 hover:border-[#FF7A3D] " +
    "transition-[transform,background-color,border-color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] " +
    "hover:scale-105 active:scale-95 will-change-transform",

  dark:
    "px-6 sm:px-8 py-3 sm:py-4 bg-[#1A1208] text-white font-bold rounded-xl " +
    "hover:bg-[#2d2010] hover:shadow-[0_8px_24px_rgba(244,88,26,0.2)] " +
    "transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] " +
    "hover:scale-105 active:scale-95 will-change-transform",
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
