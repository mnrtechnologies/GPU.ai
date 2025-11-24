import React from "react";
import { Link } from "react-router-dom"; 

const features = [
  {
    icon: "🇮🇳",
    title: "India-First Approach",
    desc: "INR billing with transparent GST. Lower latency with Mumbai nodes. Built for Indian developers.",
  },
  {
    icon: "⏱️",
    title: "Minute-Level Billing",
    desc: "Pay only for what you use. No more paying for unused hours. Perfect for development and testing.",
  },
  {
    icon: "🚀",
    title: "Smart Spot Engine",
    desc: "Automatic fallback from spot to reserved when capacity is limited. Never lose your workload.",
  },
  {
    icon: "💡",
    title: "Startup Support",
    desc: "Dedicated support bundle with pre-pay credits, onboarding assistance, and optional infrastructure consulting.",
  },
  {
    icon: "💰",
    title: "No Hidden Costs",
    desc: "Transparent pricing with no egress fees or surprise charges. What you see is what you pay.",
  },
  {
    icon: "⚡",
    title: "Faster Provisioning",
    desc: "Unlike competitors with 20+ minute setup times, get your instances running in minutes, not hours.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto font-mono">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">
        🧭 Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span>{f.icon}</span>
              <span>{f.title}</span>
            </h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* ✅ CTA with Link */}
      <Link to="/contact">
        <div className="mt-10 cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-6 rounded-xl shadow-md hover:opacity-90 transition-opacity">
          <h3 className="text-xl font-semibold mb-1">Ready to Get Started?</h3>
          <p>
            Contact us to learn more about our competitive pricing and India-first GPU cloud solution
          </p>
        </div>
      </Link>
    </section>
  );
};

export default WhyChooseUs;
