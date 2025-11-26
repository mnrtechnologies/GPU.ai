import React from "react";
import Hero from "../../components/common/Hero";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import GpuArchitecture from "../../components/WhyNovacore/GpuArchitecture";
import PerformanceFeatures from "../../components/WhyNovacore/PerformanceFeatures";
import ServicesGrid from "../../components/WhyNovacore/ServicesGrid";
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
import WhyChooseUs from "../../components/WhyNovacore/WhyChooseUs";
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

const Why = () => {
  return (
    <div>
      <FadeInWhenVisible>
        <Hero
          title="Why GPU.ai"
          description="GPU.ai offers ultra-competitive pricing for large-scale deep learning, providing unrivaled access to GPUs and high-speed, adaptable infrastructure through premier data centers in the United States and India. Effortlessly deploy containers or virtual machines with the latest NVIDIA GPUs, delivering the computational power needed for AI training, fine-tuning, and inference. Our infrastructure ensures high performance and scalability to support your most demanding AI workloads. Deploy your models using Docker, Kubernetes, or RESTful APIs. A dedicated engineer will work with you to identify the best solution for your needs. Operate on any machine learning framework. Choose from an extensive collection of pre-built templates, or bring your own configuration."
          gradientRight="rgba(255,255,255,0.12)"
          gradientBottom="rgba(255,255,255,0.12)"
          buttons={[
            {
              label: "Explore",
              className: "bg-white text-[#A800FF] hover:bg-blue-100",
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
        <WhyChooseUs />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <GpuArchitecture />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <PerformanceFeatures performanceData={performanceData} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <ServicesGrid />
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

export default Why;
