// src/components/PricingTable.tsx
import React from "react";
import Button from "./Button";

const PricingTable: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="border rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold mb-4">Basic</h3>
          <p className="mb-6">$9/month</p>
          <Button variant="primary">Choose Plan</Button>
        </div>

        {/* Pro Plan */}
        <div className="border-2 border-blue-600 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Pro</h3>
          <p className="mb-6">$19/month</p>
          <Button variant="primary">Choose Plan</Button>
          <Button variant="secondary">Learn More</Button>
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
          <p className="mb-6">Custom Pricing</p>
          <Button variant="primary">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
