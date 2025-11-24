import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";

const topSpecs = [
  {
    label: "Automation",
    value: "Full",
    icon: Cpu,
  },
  {
    label: "Integration",
    value: "API",
    icon: HardDrive,
  },
  {
    label: "Teams",
    value: "Multi",
    icon: Network,
  },
  {
    label: "Scale",
    value: "Auto",
    icon: Settings,
  },
];

const bottomSpecs = [
  {
    label: "Automated",
    value: "100%",
    icon: Cpu,
  },
  {
    label: "Ready",
    value: "API",
    icon: HardDrive,
  },
  {
    label: "Team",
    value: "Multi",
    icon: Network,
  },
];

const WorkAutomation = () => {
  return (
    <div>
      <Hero
        title="Workflow Automation"
        description="Automate resource allocation and job scheduling across GPU clusters Streamline deployment with CI/CD integration and container orchestration Monitor and optimize workflow performance with real-time analytics"
        bgColor="bg-white"
        titleColor="text-black"
        descriptionColor="text-gray-500"
        buttons={[
          {
            label: "Explore",
            className: "bg-[#a349a4] text-white hover:bg-[rgb(162,0,138)] hover:text-white",
            onClick: () => console.log("Explore clicked"),
          },
          {
            label: "Contact Us",
            className: `
    border border-gray-300 
    bg-white/10 
    text-sky-600
    px-6 py-3 
    rounded-md text-lg font-mono 
    transition 
    hover:bg-sky-500 
    hover:text-white
    hover:backdrop-blur-md 
  `,
            onClick: () => console.log("Contact Us clicked"),
          },
        ]}
      />

      <SpecsCards topSpecs={topSpecs} bottomSpecs={bottomSpecs} />

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

export default WorkAutomation
