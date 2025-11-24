import React from "react";

const services = [
  {
    icon: "fas fa-brain",
    title: "AI/ML Development",
    description:
      "Build and train models with high-performance GPU clusters optimized for deep learning",
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud Computing",
    description:
      "Scalable cloud infrastructure with dedicated GPU resources and low-latency networking",
  },
  {
    icon: "fas fa-microchip",
    title: "High Performance Computing",
    description:
      "Accelerate scientific research and simulations with our HPC solutions",
  },
  {
    icon: "fas fa-chart-line",
    title: "Data Analytics",
    description:
      "Process and analyze massive datasets with GPU-accelerated analytics tools",
  },
  {
    icon: "fas fa-sitemap",
    title: "Edge Computing",
    description:
      "Deploy AI models at the edge with optimized hardware and software solutions",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Enterprise Security",
    description:
      "Secure your GPU infrastructure with enterprise-grade security features",
  },
  {
    icon: "fas fa-code",
    title: "DevOps & MLOps",
    description:
      "Streamline your AI development pipeline with integrated DevOps tools",
  },
  {
    icon: "fas fa-industry",
    title: "Industrial AI",
    description:
      "Transform manufacturing with AI-powered automation and quality control",
  },
  {
    icon: "fas fa-rocket",
    title: "Startup Accelerator",
    description:
      "Get your AI startup running with tailored infrastructure and support",
  },
];

const ServicesGrid = () => {
  return (
    <div className="bg-white font-mono p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 rounded-xl p-6">
            <i className={`${service.icon} text-[#a349a4] text-2xl mb-3 block`}></i>
            <h3 className="font-extrabold text-black text-xl mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-md leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
