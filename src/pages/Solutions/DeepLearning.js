import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";


const topSpecs = [
  {
    label: "Layers",
    value: "Deep",
    icon: Cpu,
  },
  {
    label: "Networks",
    value: "Custom",
    icon: HardDrive,
  },
  {
    label: "Training",
    value: "Fast",
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
    label: "Models",
    value: "1000+",
    icon: Cpu,
  },
  {
    label: "Networks",
    value: "Custom",
    icon: HardDrive,
  },
  {
    label: "Training",
    value: "Fast",
    icon: Network,
  },
];

const DeepLearning = () => {
  return (
    <div>

      <FadeInWhenVisible>
        <Hero
          title="Deep Learning"
          description="Purpose-built infrastructure for training large neural networks and transformers Optimize resource allocation with dynamic GPU partitioning and scheduling Access specialized hardware configurations for different model architectures"
          gradientRight="rgba(255,255,255,0.05)"
          gradientBottom="rgba(255,255,255,0.05)"
          buttons={[
            {
              label: "Explore",
              className:
                "bg-white text-[#a349a4] hover:bg-[rgb(162,0,138)] hover:text-white",
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
                rounded-md text-lg font-sans 
                transition 
                hover:bg-white/5 
                hover:text-white
              `,
              onClick: () => console.log("Contact Us clicked"),
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

export default DeepLearning;
