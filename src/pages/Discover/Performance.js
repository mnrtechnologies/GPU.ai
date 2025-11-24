import React from "react";
import Hero from "../../components/common/Hero";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import BlackwellComponent from "../../components/common/BlackwellComponent";
import ArchitectureCompnenet from "../../components/common/ArchitectureCompnenet";

const PerformanceCard = ({
  icon,
  title,
  description,
  labelStart,
  labelEnd,
  progress,
}) => (
  <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 transition-colors duration-300">
    <div className="text-blue-600 text-2xl mb-3">
      <i className={`fas ${icon}`} />
    </div>
    <h3 className="font-bold text-lg mb-3">{title}</h3>
    <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
    <div className="flex justify-between text-gray-600 text-sm mb-1">
      <span>{labelStart}</span>
      <span>{labelEnd}</span>
    </div>
    <div className="w-full h-2 rounded-full bg-gray-300 overflow-hidden">
      <div
        className="h-2 bg-blue-600 rounded-full transition-all duration-500"
        style={{ width: progress }}
      />
    </div>
  </div>
);

const data = [
  {
    icon: "fa-rocket",
    title: "Training Speed",
    description:
      "Up to 1.9x faster training for large language models compared to previous generation.",
    labelStart: "Previous Gen",
    labelEnd: "Current Gen",
    progress: "75%",
  },
  {
    icon: "fa-clock",
    title: "Inference Latency",
    description:
      "40% reduction in inference latency with optimized runtime and hardware acceleration.",
    labelStart: "Previous",
    labelEnd: "Optimized",
    progress: "65%",
  },
  {
    icon: "fa-bolt",
    title: "Power Efficiency",
    description:
      "3.5x improvement in performance per watt with latest GPU architecture.",
    labelStart: "Standard",
    labelEnd: "Optimized",
    progress: "75%",
  },
];

const Performance = () => {
  return (
    <div>
      <Hero
        title="Unmatched Performance"
        description="Experience industry-leading GPU performance with our optimized infrastructure. From high-throughput training to low-latency inference, we deliver exceptional results."
        gradientRight="rgba(0,0,0,0.05)"
        gradientBottom="rgba(0,0,0,0.05)"
        bgColor="bg-gray-100"
        titleColor="text-gray-800"
        descriptionColor="text-gray-500"
      />

      <div className=" font-mono">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <PerformanceCard key={index} {...item} />
          ))}
        </div>
      </div>

      <Hero
        title="Pricing"
        description="Introducing our latest B200 GPU, built on the revolutionary Hopper architecture. Designed to deliver unprecedented performance for AI and high-performance computing workloads, featuring advanced Tensor Cores and transformative memory technology."
        gradientRight="rgba(255,255,255,0.05)"
        gradientBottom="rgba(255,255,255,0.05)"
        buttons={[
          {
            label: "Explore",
            className: "bg-white text-[#a349a4] hover:bg-[rgb(162,0,138)] hover:text-white",
            onClick: () => console.log("Explore clicked"),
          },
          {
            label: "Contact Us",
            className: `
     
    bg-blue-900
    backdrop-blur-md 
    text-white 
    px-6 py-3 
    rounded-md text-lg font-mono 
    transition 
    hover:bg-white/5 
    hover:text-white
  `,
            onClick: () => console.log("Contact Us clicked"),
          },
        ]}
      />

      <BlackwellComponent />

      <ArchitectureCompnenet />

      <Onboarding />

      <Footer />
    </div>
  );
};

export default Performance;
