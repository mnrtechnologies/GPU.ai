import React from "react";
import BigFeatureCard from "./BigFeatureCard";
import SmallFeatureCard from "./SmallFeatureCard";

const features = [
  {
    title: "Enterprise Security",
    description: "ISO 27001 certified infrastructure with end-to-end encryption",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2094&quot",
  },
  {
    title: "Instant Scaling",
    description: "Scale from 1 to 1000s of GPUs in seconds with automated cluster management",
    image: "https://images.unsplash.com/photo-1564457461758-8ff96e439e83?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&quot",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock expert support with 15-minute response time SLA",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&quot",
  },
  {
    title: "NVMe Storage",
    description: "High-performance storage with up to 100GB/s throughput per node",
    image: "https://images.pexels.com/photos/17489160/pexels-photo-17489160/free-photo-of-box-server-illuminated-on-blue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&quot",
  },
  {
    title: "Hybrid Cloud",
    description: "Seamlessly integrate with major cloud providers and on-premise infrastructure",
    image: "https://images.unsplash.com/photo-1667984390527-850f63192709?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&quot",
  },
  {
    title: "Cost Analytics",
    description: "Real-time cost tracking and optimization recommendations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&quot",
  },
  {
    title: "Developer Tools",
    description: "Comprehensive SDK and CLI tools for seamless integration",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&quot",
  },
  {
    title: "Container Orchestration",
    description: "Native Kubernetes support with custom GPU scheduling",
    image: "https://images.unsplash.com/photo-1667372459510-55b5e2087cd0?q=80&w=2070&quot",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 py-20 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Big Feature */}
        <div className="md:col-span-2">
          <BigFeatureCard />
        </div>

        {/* First two small features */}
        <div className="flex flex-col gap-6">
          {features.slice(0, 2).map((feature, index) => (
            <SmallFeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Next two small features */}
        <div className="flex flex-col gap-6">
          {features.slice(2, 4).map((feature, index) => (
            <SmallFeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Remaining small features full width */}
        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {features.slice(4).map((feature, index) => (
            <SmallFeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
