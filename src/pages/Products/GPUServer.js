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
    label: "GPU Type",
    value: "B200",
    icon: Cpu,
  },
  {
    label: "Memory",
    value: "144GB",
    icon: HardDrive,
  },
  {
    label: "Network",
    value: "400G",
    icon: Network,
  },
  {
    label: "Management",
    value: "Auto",
    icon: Settings,
  },
];

const bottomSpecs = [
  {
    label: "GPU",
    value: "B200",
    icon: Cpu,
  },
  {
    label: "VRAM",
    value: "144GB",
    icon: HardDrive,
  },
  {
    label: "Network",
    value: "400G",
    icon: Network,
  },
];

const GPUServer = () => {
  return (
    <div>
      {/* Hero Section */}
      <FadeInWhenVisible>
        <Hero
          title="GPU Servers"
          description="Engineered for unprecedented AI performance, our enterprise GPU servers combine the latest NVIDIA A100 Tensor Core GPUs with optimized system architecture and advanced cooling solutions. Featuring high-bandwidth NVLink interconnects, PCIe Gen4 connectivity, and enterprise-grade reliability with redundant power supplies and hot-swappable components. Our servers deliver up to 312 TFLOPS of AI performance per system, with support for multi-instance GPU virtualization and dynamic tensor core partitioning for optimal resource utilization."
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

      {/* Specs Section */}
      <FadeInWhenVisible>
        <SpecsCards topSpecs={topSpecs} bottomSpecs={bottomSpecs} />
      </FadeInWhenVisible>

      {/* Blackwell Section */}
      <FadeInWhenVisible>
        <BlackwellComponent />
      </FadeInWhenVisible>

      {/* Architecture Section */}
      <FadeInWhenVisible>
        <div className="space-y-12">
          <ArchitectureCompnenet />
        </div>
      </FadeInWhenVisible>

      {/* Onboarding Section */}
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

      {/* Footer (no animation required) */}
      <Footer />
    </div>
  );
};

export default GPUServer;
