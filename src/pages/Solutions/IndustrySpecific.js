import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

const topSpecs = [
  {
    label: "Focus",
    value: "Industry",
    icon: Cpu,
  },
  {
    label: "Solutions",
    value: "Custom",
    icon: HardDrive,
  },
  {
    label: "Support",
    value: "24/7",
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
    label: "Industries",
    value: "10+",
    icon: Cpu,
  },
  {
    label: "Solutions",
    value: "Custom",
    icon: HardDrive,
  },
  {
    label: "Support",
    value: "24/7",
    icon: Network,
  },
];

const IndustrySpecific = () => {
  return (
    <div>
      <FadeInWhenVisible>
        <Hero
          title="Industry Specific"
          description="Custom solutions for finance, healthcare, automotive, and research sectors Industry-optimized hardware configurations and compliance frameworks Dedicated support teams with domain expertise in your industry"
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
              onClick: () =>
                console.log("Contact Us clicked"),
            },
          ]}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <SpecsCards topSpecs={topSpecs} bottomSpecs={bottomSpecs} />
      </FadeInWhenVisible>

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

      <Footer />
    </div>
  );
};

export default IndustrySpecific;