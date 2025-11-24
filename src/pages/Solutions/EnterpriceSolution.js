import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";

const topSpecs = [
  {
    label: "Scale",
    value: "Enterprise",
    icon: Cpu,
  },
  {
    label: "SLA",
    value: "99.99%",
    icon: HardDrive,
  },
  {
    label: "Support",
    value: "24/7",
    icon: Network,
  },
  {
    label: "Integration",
    value: "Full",
    icon: Settings,
  },
];

const bottomSpecs = [
  {
    label: "Deployments",
    value: "10K+",
    icon: Cpu,
  },
  {
    label: "Uptime",
    value: "99.99%",
    icon: HardDrive,
  },
  {
    label: "Support",
    value: "24/7",
    icon: Network,
  },
];

const EnterpriceSolution = () => {
  return (
    <div>
      <Hero
        title="Enterprise Solutions"
        description="Enterprise solutions are comprehensive software and technology systems designed to meet the complex needs of large organizations. These solutions integrate various business processes, ensuring seamless communication, efficiency, and scalability."
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

export default EnterpriceSolution
