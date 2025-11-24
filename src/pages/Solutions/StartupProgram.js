import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";

const topSpecs = [
  {
    label: "Growth",
    value: "Fast",
    icon: Cpu,
  },
  {
    label: "Support",
    value: "24/7",
    icon: HardDrive,
  },
  {
    label: "Scale",
    value: "Auto",
    icon: Network,
  },
  {
    label: "Team",
    value: "Focus",
    icon: Settings,
  },
];

const bottomSpecs = [
  {
    label: "Startups",
    value: "500+",
    icon: Cpu,
  },
  {
    label: "Support",
    value: "24/7",
    icon: HardDrive,
  },
  {
    label: "Scaling",
    value: "Auto",
    icon: Network,
  },
];

const StartupProgram = () => {
  return (
    <div>
      <Hero
        title="Startup Program"
        description="Access enterprise-grade GPU infrastructure at startup-friendly pricing Scale resources flexibly as your computing needs grow Get technical support and guidance from our expert team"
        gradientRight="rgba(255,255,255,0.05)"
        gradientBottom="rgba(255,255,255,0.05)"
        buttons={[
          {
            label: "Explore",
            className: "bg-white  text-[#a349a4] hover:bg-[rgb(162,0,138)] hover:text-white",
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

export default StartupProgram
