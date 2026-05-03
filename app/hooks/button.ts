export const buttonStyles = {
  primary: "px-4 sm:px-6 py-2 sm:py-3 bg-amber-600 text-white font-poppins font-semibold rounded-lg hover:bg-amber-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95",
  secondary: "px-4 sm:px-6 py-2 sm:py-3 bg-white text-amber-600 font-poppins font-semibold rounded-lg border-2 border-amber-600 hover:bg-amber-50 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95",
  outline: "px-4 sm:px-6 py-2 sm:py-3 bg-transparent text-amber-600 font-poppins font-semibold rounded-lg border-2 border-amber-600 hover:bg-amber-50 transition-all duration-200 active:scale-95",
  dark: "px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white font-poppins font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95",
};

export type ButtonStyle = keyof typeof buttonStyles;

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonStyle;
  disabled?: boolean;
  className?: string;
}
