import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import SpecsCards from "../../components/Product/SpecsCards";
import { Cpu, HardDrive, Network, Settings } from "lucide-react";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";


const topSpecs = [
  {
    label: "Teams",
    value: "Multi",
    icon: Cpu,
  },
  {
    label: "Access",
    value: "Secure",
    icon: HardDrive,
  },
  {
    label: "Sharing",
    value: "Easy",
    icon: Network,
  },
  {
    label: "Flow",
    value: "Smooth",
    icon: Settings,
  },
];

const bottomSpecs = [
  {
    label: "Teams",
    value: "Multi",
    icon: Cpu,
  },
  {
    label: "Secure",
    value: "100%",
    icon: HardDrive,
  },
  {
    label: "Sharing",
    value: "Easy",
    icon: Network,
  },
];

const CollaborationsTool = () => {
  return (
    <div>

      <FadeInWhenVisible>
        <Hero
          title="Collaboration Tools"
          description="Manage team access and resource allocation with role-based controls Track usage and share resources across projects with automated reporting Integrate with existing development and research workflows"
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

      <Footer />
    </div>
  );
};

export default CollaborationsTool;
