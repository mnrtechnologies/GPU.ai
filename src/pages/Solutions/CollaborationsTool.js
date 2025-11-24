import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";

const topSpecs = [
  {
    label: "Teams",
    value: "Multi",
    icon: Cpu,
  },
  {
    label: "Access",
    value: "Secure",
    icon: HardDrive,
  },
  {
    label: "Sharing",
    value: "Easy",
    icon: Network,
  },
  {
    label: "Flow",
    value: "Smooth",
    icon: Settings,
  },
];

const bottomSpecs = [
  {
    label: "Teams",
    value: "Multi",
    icon: Cpu,
  },
  {
    label: "Secure",
    value: "100%",
    icon: HardDrive,
  },
  {
    label: "Sharing",
    value: "Easy",
    icon: Network,
  },
];

const CollaborationsTool = () => {
  return (
    <div>
      <Hero
        title="Collaboration Tools"
        description="Manage team access and resource allocation with role-based controls Track usage and share resources across projects with automated reporting Integrate with existing development and research workflows"
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

export default CollaborationsTool
