import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

const topSpecs = [
  {
    label: "Research",
    value: "Focus",
    icon: Cpu,
  },
  {
    label: "Tools",
    value: "Custom",
    icon: HardDrive,
  },
  {
    label: "Integration",
    value: "Full",
    icon: Network,
  },
  {
    label: "Support",
    value: "24/7",
    icon: Settings,
  },
];

const bottomSpecs = [
  {
    label: "Tools",
    value: "100+",
    icon: Cpu,
  },
  {
    label: "Support",
    value: "Custom",
    icon: HardDrive,
  },
  {
    label: "Integration",
    value: "Full",
    icon: Network,
  },
];

const ResearchSolution = () => {
  return (
    <div>
      {/* Hero Animation */}
      <FadeInWhenVisible>
        <Hero
          title="Research Solutions"
          description="Access high-performance computing resources for scientific computing and simulation Collaborate seamlessly with integrated version control and experiment tracking Scale computational resources on-demand for research workloads"
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

      {/* Specs Animation */}
      <FadeInWhenVisible>
        <SpecsCards topSpecs={topSpecs} bottomSpecs={bottomSpecs} />
      </FadeInWhenVisible>

      {/* CTA Animation */}
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

      {/* Footer always visible */}
      <Footer />
    </div>
  );
};

export default ResearchSolution;
