// src/components/HeroSection.tsx
import React from "react";
import Button from "./Button";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to PayMate AI</h1>
      <p className="text-lg mb-8">
        Simplify your payments, subscriptions, and notifications with AI-powered
        assistance.
      </p>
      <div className="flex justify-center space-x-4">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </section>
  );
};

export default HeroSection;
