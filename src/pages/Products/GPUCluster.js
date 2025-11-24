import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import BlackwellComponent from "../../components/common/BlackwellComponent";
import ArchitectureCompnenet from "../../components/common/ArchitectureCompnenet";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";

const topSpecs = [
  {
    label: "GPU Count",
    value: "256+",
    icon: Cpu,
  },
  {
    label: "Interconnet",
    value: "400Gbps",
    icon: HardDrive,
  },
  {
    label: "Memory Pool",
    value: "32TB",
    icon: Network,
  },
  {
    label: "Power",
    value: "Efficient",
    icon: Settings,
  },
];

const bottomSpecs = [
  {
    label: "GPUs",
    value: "256+",
    icon: Cpu,
  },
  {
    label: "Memory",
    value: "32TB",
    icon: HardDrive,
  },
  {
    label: "Efficiency",
    value: "90%",
    icon: Network,
  },
];

const GPUCluster = () => {
  return (
    <div>
      <Hero
        title="GPU Cluster"
        description="Our scalable GPU cluster management solution enables seamless orchestration of distributed AI training across thousands of GPUs with automated workload balancing and fault tolerance. The system features intelligent job scheduling, dynamic resource allocation, and advanced monitoring capabilities for cluster-wide performance optimization. Built-in support for popular distributed training frameworks, coupled with automated model checkpointing and recovery, ensures maximum reliability and efficiency for large-scale AI workloads."
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
    border border-white 
    bg-white/10 
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

      <SpecsCards topSpecs={topSpecs} bottomSpecs={bottomSpecs} />

      <BlackwellComponent />

      <div className="space-y-12">
        <ArchitectureCompnenet />
      </div>

      <Onboarding
        bgColor="#a349a4" // Sky-600 color value
        gridColor="rgba(255, 255, 255, 0.05)" // RGBA for grid lines
        titleColor="#ffffff" // White for title
        descriptionColor="#ffffff" // White for description
        btnColor="#ffffff" // Custom color for the button
        btnTextColor="#a349a4" // White for button text
      />
      <Footer />
    </div>
  );
};

export default GPUCluster;
