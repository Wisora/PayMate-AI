// src/components/NavBar.tsx
import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-600 font-bold text-xl">PayMate AI</div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#features" className="text-gray-700 hover:text-blue-600">
            Features
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600">
            Pricing
          </a>
          <a href="#docs" className="text-gray-700 hover:text-blue-600">
            Docs
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
