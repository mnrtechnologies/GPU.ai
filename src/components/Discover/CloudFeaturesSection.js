import React from "react";

const features = [
  {
    icon: "fas fa-cloud",
    title: "Multi-Cloud Support",
    description: "Deploy across AWS, Google Cloud, and Azure with unified management",
  },
  {
    icon: "fas fa-server",
    title: "Auto-Scaling",
    description: "Dynamically scale resources based on workload demands",
  },
  {
    icon: "fas fa-sitemap",
    title: "Global Network",
    description: "High-performance network with global edge locations",
  },
];

const CloudFeatureCard = ({ icon, title, description }) => (
    <div className="flex items-start gap-2 sm:gap-3 max-w-xs sm:max-w-[220px]">
      <i className={`${icon} text-[#a349a4] text-lg sm:text-xl mt-1`} />
      <div>
        <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
        <p className="text-sm sm:text-base font-mono text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

const CloudFeaturesSection = () => (
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12">
    <div className="flex flex-col sm:flex-row justify-between max-w-5xl mx-auto gap-10 sm:gap-0">
      {features.map((f, idx) => (
        <CloudFeatureCard key={idx} {...f} />
      ))}
    </div>
  </div>
);

export default CloudFeaturesSection;
