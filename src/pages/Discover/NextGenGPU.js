import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
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
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";


const performanceData = [
  { title: "HBM3e Memory", value: "141GB", icon: MemoryStick },
  { title: "Memory Bandwidth", value: "4.8TB/s", icon: BarChart },
  { title: "FP8 Performance", value: "2X", icon: Zap },
  { title: "PCIe Support", value: "Gen5", icon: Cpu },
  { title: "Tensor Cores", value: "4th Gen", icon: CircuitBoard },
  { title: "NVLink", value: "900GB/s", icon: Network },
  { title: "Confidential AI", value: "Hopper", icon: ShieldCheck },
  { title: "Inference Latency", value: "-40%", icon: TimerReset },
  { title: "Architecture", value: "Hopper", icon: Layers3 },
  { title: "Power Efficiency", value: "3.5X", icon: BatteryCharging },
  { title: "LLM Training", value: "1.9X", icon: BrainCircuit },
];

const specsData1 = [
  {
    icon: "fas fa-microchip",
    value: "18432",
    label: "Cuda Cores",
    bg: "#ffd6d6",
  },
  {
    icon: "fas fa-memory",
    value: "192",
    suffix: "GB",
    label: "VRAM",
    bg: "#b9d7ff",
  },
  { icon: "fas fa-microchip", value: "96", label: "CPU Cores", bg: "#c9f7d6" },
  {
    icon: "fas fa-hdd",
    value: "4",
    suffix: "TB",
    label: "Base Storage",
    bg: "#a6f0eb",
  },
  {
    icon: "fas fa-database",
    value: "1600",
    label: "GB/s Bandwidth",
    bg: "#b9d7ff",
  },
  { icon: "fas fa-cube", value: "B200", label: "GPU Model", bg: "#a6f0eb" },
  {
    icon: "fas fa-users",
    value: "20",
    label: "Tensor Cores",
     bg: "#ffd6d6",
  },

];

const specsData2 = [
  {
    icon: "fas fa-microchip",
    value: "2000",
    label: "Cuda Cores",
    bg: "#ffd6d6",
  },
  {
    icon: "fas fa-memory",
    value: "144",
    suffix: "GB",
    label: "VRAM",
    bg: "#b9d7ff",
  },
  { icon: "fas fa-microchip", value: "64", label: "CPU Cores", bg: "#c9f7d6" },
  {
    icon: "fas fa-hdd",
    value: "2",
    suffix: "TB",
    label: "Base Storage",
    bg: "#a6f0eb",
  },
  {
    icon: "fas fa-database",
    value: "500",
    label: "Connections",
    bg: "#b9d7ff",
  },
  { icon: "fas fa-cube", value: "B200", label: "GPU", bg: "#a6f0eb" },
  {
    icon: "fas fa-dollar-sign",
    value: "$4",
    suffix: "/hr",
    label: "Avg Cost",
    bg: "#c9f7d6",
  },
  { icon: "fas fa-users", value: "12", label: "User Roles", bg: "#ffd6d6" },
];

const NextGenGPU = () => {
  return (
    <div>

      <FadeInWhenVisible>
        <Hero
          title="B200s at your Fingertips"
          description="Introducing our latest B200 GPU, built on the revolutionary Hopper architecture. Designed to deliver unprecedented performance for AI and high-performance computing workloads, featuring advanced Tensor Cores and transformative memory technology."
          gradientRight="rgba(255,255,255,0.12)"
          gradientBottom="rgba(255,255,255,0.12)"
          buttons={[
            {
              label: "Explore",
              className: "bg-white text-[#A800FF] hover:bg-[rgb(162,0,138)] hover:text-white",
              onClick: () => console.log("Explore clicked"),
            },
            {
              label: "Contact Us",
              className: `
                bg-blue-900
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
        <GpuArchitecture />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <PerformanceFeatures performanceData={performanceData} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <TechnicalSpecs
          title={`Technical Specs\nand\nBenefits`}
          description={`The NVIDIA B200 GPUs provide industry-leading performance for AI workloads. With next-gen tensor cores, ultra-fast memory, and optimized efficiency, the B200 is the best choice for researchers, developers, and enterprises.`}
          specs={specsData1}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <TechnicalSpecs
          title={`Technical Specs\nand\nBenchmarks`}
          description={`We use the latest B200s from NVIDIA giving the best performance per dollar for all your deep learning needs. Whether you're a researcher, a developer, or a business, we have the right hardware for you. Our B200s are the most powerful and efficient GPUs on the market.`}
          specs={specsData2}
        />
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

      <Footer />

    </div>
  );
};

export default NextGenGPU;
