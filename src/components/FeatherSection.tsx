// src/components/FeaturesSection.tsx
import React from "react";
import Button from "./Button";

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {/* Feature 1 */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-blue-600 mb-4">
            <svg
              className="h-10 w-10 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Setup</h3>
          <p className="text-gray-700 mb-4">
            Get started quickly with simple onboarding and clear documentation.
          </p>
          <Button variant="secondary">Learn More</Button>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-blue-600 mb-4">
            <svg
              className="h-10 w-10 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">AI Assistance</h3>
          <p className="text-gray-700 mb-4">
            Automate recurring payments, notifications, and subscriptions with
            AI.
          </p>
          <Button variant="secondary">Learn More</Button>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-blue-600 mb-4">
            <svg
              className="h-10 w-10 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Accessible Design</h3>
          <p className="text-gray-700 mb-4">
            Multilingual support, mobile responsiveness, and inclusive UI for
            everyone.
          </p>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
