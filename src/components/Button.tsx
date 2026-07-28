// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode; // text or icon + text
  variant?: "primary" | "secondary"; // choose style
  onClick?: () => void; // optional click handler
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
}) => {
  const baseStyles =
    "px-6 py-3 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-900 font-medium hover:bg-gray-300 focus:ring-gray-400",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
