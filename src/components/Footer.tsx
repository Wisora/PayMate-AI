// src/components/Footer.tsx
import React from "react";
import Button from "./Button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-white">PayMate AI</h3>
          <p className="text-sm">
            © {new Date().getFullYear()} PayMate AI. Apache‑2.0 Licensed.
          </p>
        </div>
        <div className="flex space-x-4">
          <Button variant="secondary">Docs</Button>
          <Button variant="secondary">GitHub</Button>
          <Button variant="secondary">License</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
