import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";


const topSpecs = [
  {
    label: "Models",
    value: "1000+",
    icon: Cpu,
  },
  {
    label: "Training",
    value: "Fast",
    icon: HardDrive,
  },
  {
    label: "Accuracy",
    value: "99%+",
    icon: Network,
  },
  {
    label: "99%+",
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
    label: "Faster",
    value: "2X",
    icon: HardDrive,
  },
  {
    label: "Accuracy",
    value: "99%+",
    icon: Network,
  },
];

const AI_ML = () => {
  return (
    <div>

      <FadeInWhenVisible>
        <Hero
          title="AI & Machine Learning"
          description="Accelerate model training with cutting-edge GPU clusters and distributed computing Optimize inference pipelines with dedicated hardware and automated scaling Access pre-configured environments for popular ML frameworks and tools"
          bgColor="bg-white"
          titleColor="text-black"
          descriptionColor="text-gray-500"
          buttons={[
            {
              label: "Explore",
              className:
                "bg-[#A800FF] text-white hover:bg-[rgb(162,0,138)] hover:text-white",
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
                hover:backdrop-blur-md`,
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
          bgColor="#A800FF"
          gridColor="rgba(255, 255, 255, 0.12)"
          titleColor="#ffffff"
          descriptionColor="#ffffff"
          btnColor="#ffffff"
          btnTextColor="#A800FF"
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>

    </div>
  );
};

export default AI_ML;
