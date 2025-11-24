import React from "react";
import Onboarding from "../../components/common/Onboarding";
import ServicesGrid from "../../components/Home/ServicesGrid";
import Footer from "../../components/common/Footer";
import HighlightSection from "../../components/Home/HighlightSection ";
import {
  FaBrain,
  FaCloud,
  FaMicrochip,
  FaChartLine,
  FaSitemap,
  FaShieldAlt,
  FaCode,
  FaIndustry,
  FaRocket
} from "react-icons/fa";
import BlackwellComponent from "../../components/common/BlackwellComponent";
import ArchitectureCompnenet from "../../components/common/ArchitectureCompnenet";
import AIComputing from "../../components/Home/AiComputing";
import FeatureCard from "../../components/Home/FeatureCard";
import HeroSection from "../../components/Home/HeroSection";
import FeaturesGrid from "../../components/Home/FeaturesGrid";

const services = [
  {
    title: "AI/ML Development",
    icon: <FaBrain />,
    description:
      "Build and train models with high-performance GPU clusters optimized for deep learning",
    gradient: true,
  },
  {
    title: "Cloud Computing",
    icon: <FaCloud />,
    description:
      "Scalable cloud infrastructure with dedicated GPU resources and low-latency networking",
  },
  {
    title: "High Performance Computing",
    icon: <FaMicrochip />,
    description:
      "Accelerate scientific research and simulations with our HPC solutions",
  },
  {
    title: "Data Analytics",
    icon: <FaChartLine />,
    description:
      "Process and analyze massive datasets with GPU-accelerated analytics tools",
  },
  {
    title: "Edge Computing",
    icon: <FaSitemap />,
    description:
      "Deploy AI models at the edge with optimized hardware and software solutions",
  },
  {
    title: "Enterprise Security",
    icon: <FaShieldAlt />,
    description:
      "Secure your GPU infrastructure with enterprise-grade security features",
  },
    {
    icon: <FaCode />,
    title: "DevOps & MLOps",
    description:
      "Streamline your AI development pipeline with integrated DevOps tools",
  },
  {
    icon: <FaIndustry/> ,
    title: "Industrial AI",
    description:
      "Transform manufacturing with AI-powered automation and quality control",
  },
  {
    icon: <FaRocket />,
    title: "Startup Accelerator",
    description:
      "Get your AI startup running with tailored infrastructure and support",
  },
];

const CardData = [
  {
    title: "Build",
    description:
      "Create from scratch and optimize your training processes of any scale with our H100 or B200s, B200 GPU clusters, powered by InfiniBand.",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
  },
  {
    title: "Tune",
    description:
      "Equip yourself with a comprehensive fine-tuning ecosystem that features on-demand GPUs and tools to process datasets.",
    imageUrl:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Run",
    description:
      "Achieve smooth AI inference with our resilient and cost-effective infrastructure, optimized for running GenAI applications.",
    imageUrl:
      "https://images.unsplash.com/photo-1551033541-2075d8363c66?q=80&w=1974&auto=format&fit=crop",
  },
];

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Onboarding />
      <FeaturesGrid />
      <HighlightSection
        heading={`Solutions for\nEvery Scale`}
        description="From startups to enterprises, our GPU infrastructure powers innovation across industries and empowers businesses to unlock the full potential of AI."
      />

      <ServicesGrid services={services} />

      <HighlightSection
        heading={`Accelerate Your\nAI Journey`}
        description="From development to deployment, our platform provides everything you need to succeed in the world of AI. Whether you're a startup or an enterprise, we've got you covered."
      />
      <div className="flex flex-col sm:flex-row gap-8 justify-center flex-wrap px-4 max-w-screen-sm sm:max-w-none mx-auto">
        {CardData.map((card, index) => (
          <FeatureCard
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>

      <AIComputing />
      <BlackwellComponent />
      <ArchitectureCompnenet />
      <Footer />
    </div>
  );
};

export default Home;
