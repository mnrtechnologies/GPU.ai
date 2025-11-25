import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

const topSpecs = [
  {
    label: "Scale",
    value: "Enterprise",
    icon: Cpu,
  },
  {
    label: "SLA",
    value: "99.99%",
    icon: HardDrive,
  },
  {
    label: "Support",
    value: "24/7",
    icon: Network,
  },
  {
    label: "Integration",
    value: "Full",
    icon: Settings,
  },
];

const bottomSpecs = [
  {
    label: "Deployments",
    value: "10K+",
    icon: Cpu,
  },
  {
    label: "Uptime",
    value: "99.99%",
    icon: HardDrive,
  },
  {
    label: "Support",
    value: "24/7",
    icon: Network,
  },
];

const EnterpriceSolution = () => {
  return (
    <div>

      <FadeInWhenVisible>
        <Hero
          title="Enterprise Solutions"
          description="Enterprise solutions are comprehensive software and technology systems designed to meet the complex needs of large organizations. These solutions integrate various business processes, ensuring seamless communication, efficiency, and scalability."
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

export default EnterpriceSolution;
