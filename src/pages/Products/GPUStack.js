import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import BlackwellComponent from "../../components/common/BlackwellComponent";
import ArchitectureCompnenet from "../../components/common/ArchitectureCompnenet";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";


const topSpecs = [
  {
    label: "Integration",
    value: "Full",
    icon: Cpu,
  },
  {
    label: "Servers",
    value: "Custom",
    icon: HardDrive,
  },
  {
    label: "Management",
    value: "Cloud",
    icon: Network,
  },
  {
    label: "Security",
    value: "Enterprise",
    icon: Settings,
  },
];

const bottomSpecs = [
  {
    label: "Integration",
    value: "100%",
    icon: Cpu,
  },
  {
    label: "Hardware",
    value: "Custom",
    icon: HardDrive,
  },
  {
    label: "Management",
    value: "Cloud",
    icon: Network,
  },
];

const GPUStack = () => {
  return (
    <div>
      {/* Hero */}
      <FadeInWhenVisible>
        <Hero
          title="GPU Stack"
          description="Our full-stack GPU computing platform provides a complete ecosystem for enterprise AI deployment, from bare metal infrastructure to high-level development tools and applications. The integrated stack includes optimized drivers, containerization support, and advanced orchestration capabilities for seamless scalability. Features comprehensive monitoring, automated updates, and enterprise-grade security measures, all managed through a unified control plane for simplified operations."
          gradientRight="rgba(255,255,255,0.12)"
          gradientBottom="rgba(255,255,255,0.12)"
          buttons={[
            {
              label: "Explore",
              className:
                "bg-white text-[#A800FF] hover:bg-[rgb(162,0,138)] hover:text-white",
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

      {/* Specs Cards */}
      <FadeInWhenVisible>
        <SpecsCards topSpecs={topSpecs} bottomSpecs={bottomSpecs} />
      </FadeInWhenVisible>

      {/* Blackwell */}
      <FadeInWhenVisible>
        <BlackwellComponent />
      </FadeInWhenVisible>

      {/* Architecture */}

        <div className="space-y-12">
          <ArchitectureCompnenet />
        </div>
    

      {/* Onboarding */}
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

      <Footer />
    </div>
  );
};

export default GPUStack;
