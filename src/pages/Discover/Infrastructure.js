import React from "react";
import Hero from "../../components/common/Hero";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import GpuArchitecture from "../../components/WhyNovacore/GpuArchitecture";
import PerformanceFeatures from "../../components/WhyNovacore/PerformanceFeatures";
import TechnicalSpecs from "../../components/Discover/TechnicalSpecs";
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
import MultiGPUComputing from "../../components/Discover/MultiGPUComputing";
import DeploymentOptions from "./DeploymentOptions";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";


const specsData1 = [
  {
    icon: "fas fa-microchip",
    value: "20+",
    label: "GPU Models",
    bg: "#ffd6d6",
  },
  {
    icon: "fas fa-memory",
    value: "141",
    suffix: "GB",
    label: "Max VRAM",
    bg: "#b9d7ff",
  },
  {
    icon: "fas fa-hdd",
    value: "900",
    label: "GB/s NVLink",
    bg: "#a6f0eb",
  },
  {
    icon: "fas fa-database",
    value: "8",
    label: "GPU/Node",
    bg: "#b9d7ff",
  },
  { icon: "fas fa-cube", value: "0.39",  suffix: "/hr", label: "Avg Cost", bg: "#a6f0eb" },
  {
    icon: "fas fa-users",
    value: "12",
    label: "User Roles",
     bg: "#ffd6d6",
  },

];

const performanceData = [
  { title: "Enterprise GPUs", value: "B200s, B200, H100", icon: MemoryStick },
  { title: "A Series", value: "A100 80GB, A100 40GB", icon: BarChart },
  { title: "Multi-GPU Tech", value: "NVLink, NVSwitch", icon: Zap },
  { title: "VRAM Range", value: "24GB - 141GB", icon: Cpu },
  { title: "Tensor Cores", value: "4th Gen", icon: CircuitBoard },
  { title: "NVLink", value: "900GB/s", icon: Network },
  { title: "Confidential AI", value: "Hopper", icon: ShieldCheck },
  { title: "Inference Latency", value: "-40%", icon: TimerReset },
  { title: "Architecture", value: "Hopper", icon: Layers3 },
  { title: "Power Efficiency", value: "3.5X", icon: BatteryCharging },
  { title: "LLM Training", value: "1.9X", icon: BrainCircuit },
];

const Infrastructure = () => {
  return (
    <div>

      {/* HERO With Animation */}
      <FadeInWhenVisible>
        <Hero
          title="Diverse GPU Infrastructure"
          description="Access our comprehensive fleet of NVIDIA GPUs, from the latest B200s, B200 enterprise accelerators to consumer-grade RTX cards. Powered by NVLink and NVSwitch technology for seamless multi-GPU workloads, enabling distributed training and inference at scale."
          gradientRight="rgba(0,0,0,0.05)"
          gradientBottom="rgba(0,0,0,0.05)"
          bgColor="bg-gray-100"
          titleColor="text-gray-800"
          descriptionColor="text-gray-500"
          buttons={[
            {
              label: "Laern More",
              className: "bg-white text-[#a349a4] hover:bg-[rgb(162,0,138)] hover:text-white",
              onClick: () => console.log("Explore clicked"),
            },
            {
              label: "Contact Us",
              className: `
                border border-white 
                bg-sky-800 
                backdrop-blur-md 
                text-white 
                px-6 py-3 
                rounded-md text-lg font-sans 
                transition 
                hover:bg-sky-700 
                hover:text-white
              `,
              onClick: () => console.log("Contact Us clicked"),
            },
          ]}
        />
      </FadeInWhenVisible>

      {/* SECTIONS With Animation */}
      <FadeInWhenVisible>
        <GpuArchitecture />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <PerformanceFeatures performanceData={performanceData} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <TechnicalSpecs
          title={`Technical Specs\nand\nBenchmarks`}
          description={`We use the latest B200s, B200s from NVIDIA giving the best performance per dollar for all your deep learning needs. Whether you're a researcher, a developer, or a business, we have the right hardware for you. Our B200s are the most powerful and efficient GPUs on the market.`}
          specs={specsData1}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <MultiGPUComputing />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <DeploymentOptions />
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

export default Infrastructure;

