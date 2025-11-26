import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import BlackwellComponent from "../../components/common/BlackwellComponent";
import ArchitectureCompnenet from "../../components/common/ArchitectureCompnenet";
import Hero from "../../components/common/Hero";
import GPUPricing from "../../components/Pricing/GPUPricing";

import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

const Pricing = () => {
  return (
    <div>
      <FadeInWhenVisible>
        <Hero
          title="Pricing"
          description="Introducing our latest B200 GPU, built on the revolutionary Hopper architecture. Designed to deliver unprecedented performance for AI and high-performance computing workloads, featuring advanced Tensor Cores and transformative memory technology."
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
        <GPUPricing />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <BlackwellComponent />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="space-y-12">
          <ArchitectureCompnenet />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Onboarding />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </div>
  );
};

export default Pricing;
