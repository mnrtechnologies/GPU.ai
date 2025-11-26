import React from "react";
import Hero from "../../components/common/Hero";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import {
  MemoryStick,
  BarChart,
  Zap,
  Cpu,
  CircuitBoard,
  Network,
  ShieldCheck,
  TimerReset,
  Layers3,
  BatteryCharging,
  BrainCircuit,
} from "lucide-react";
import PerformanceFeatures from "../../components/WhyNovacore/PerformanceFeatures";
import GpuArchitecture from "../../components/WhyNovacore/GpuArchitecture";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

const performanceData = [
  { title: "Server Type", value: "DGX H100", icon: MemoryStick },
  { title: "GPU Config", value: "8x B200", icon: BarChart },
  { title: "System Memory", value: "2TB", icon: Zap },
  { title: "NVMe Storage", value: "60TB", icon: Cpu },
  { title: "Network", value: "400GbE", icon: CircuitBoard },
  { title: "Power Supply", value: "6.5kW", icon: Network },
  { title: "Cooling", value: "Liquid", icon: ShieldCheck },
  { title: "Form Factor", value: "5U", icon: TimerReset },
  { title: "OS Support", value: "Linux", icon: Layers3 },
  { title: "OS Support", value: "BMC", icon: BatteryCharging },
  { title: "Warranty", value: "3 Years", icon: BrainCircuit },
  { title: "Support", value: "24/7", icon: Network }
];

const HardwareSolutions = () => {
  return (
    <div>

      <FadeInWhenVisible>
        <Hero
          title="Enterprise Hardware Solutions"
          description="High-performance computing infrastructure designed for enterprise-scale AI workloads. From H100 to B200s, B200, our clusters are optimized for GenAI workloads and powered by NvLink."
          gradientRight="rgba(0,0,0,0.05)"
          gradientBottom="rgba(0,0,0,0.05)"
          bgColor="bg-gray-100"
          titleColor="text-gray-800"
          descriptionColor="text-gray-500"
          buttons={[
            {
              label: "Explore Solutions",
              className: "bg-[#A800FF] text-white hover:bg-[rgb(162,0,138)]",
              onClick: () => console.log("Explore clicked"),
            },
            {
              label: "Contact Us",
              className: `
              border border-white 
              bg-white
              backdrop-blur-md 
              text-black 
              px-6 py-3 
              rounded-md text-lg font-sans 
              transition 
              hover:bg-sky-600 
              hover:text-white
            `,
              onClick: () => console.log("Contact Us clicked"),
            },
          ]}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <PerformanceFeatures
          performanceData={performanceData}
          title="Hardware Specifications"
          description="Enterprise-grade hardware solutions optimized for AI and high-performance computing workloads"
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <GpuArchitecture
          img="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Onboarding />
      </FadeInWhenVisible>

      <Footer />
    </div>
  );
};

export default HardwareSolutions;
