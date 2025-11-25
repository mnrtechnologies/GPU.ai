import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

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
      {/* Hero */}
      <FadeInWhenVisible>
        <Hero
          title="Workflow Automation"
          description="Automate resource allocation and job scheduling across GPU clusters Streamline deployment with CI/CD integration and container orchestration Monitor and optimize workflow performance with real-time analytics"
          bgColor="bg-white"
          titleColor="text-black"
          descriptionColor="text-gray-500"
          buttons={[
            {
              label: "Explore",
              className:
                "bg-[#a349a4] text-white hover:bg-[rgb(162,0,138)] hover:text-white",
              onClick: () => console.log("Explore clicked"),
            },
            {
              label: "Contact Us",
              className: `
                border border-gray-300 
                bg-white/10 
                text-sky-600
                px-6 py-3 
                rounded-md text-lg font-sans 
                transition 
                hover:bg-sky-500 
                hover:text-white
                hover:backdrop-blur-md 
              `,
              onClick: () => console.log("Contact Us clicked"),
            },
          ]}
        />
      </FadeInWhenVisible>

      {/* Specs Cards */}
      <FadeInWhenVisible>
        <SpecsCards topSpecs={topSpecs} bottomSpecs={bottomSpecs} />
      </FadeInWhenVisible>

      {/* Onboarding CTA */}
      <FadeInWhenVisible>
        <Onboarding
          bgColor="#a349a4"
          gridColor="rgba(255, 255, 255, 0.05)"
          titleColor="#ffffff"
          descriptionColor="#ffffff"
          btnColor="#ffffff"
          btnTextColor="#a349a4"
        />
      </FadeInWhenVisible>

      {/* Footer - static */}
      <Footer />
    </div>
  );
};

export default WorkAutomation;
