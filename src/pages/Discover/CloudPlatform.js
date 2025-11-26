import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import BlackwellComponent from "../../components/common/BlackwellComponent";
import ArchitectureCompnenet from "../../components/common/ArchitectureCompnenet";
import CloudFeaturesSection from "../../components/Discover/CloudFeaturesSection";
import PerformanceHighlight from "../../components/Discover/PerformanceHighlight";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

const CloudPlatform = () => {
  return (
    <div>

      <FadeInWhenVisible>
        <Hero
          title="Cloud Platform"
          description="Scale your AI infrastructure with our enterprise-ready cloud platform, designed to supercharge your GPU-accelerated workloads with unparalleled performance and scalability. Unlock maximum potential with our secure, flexible, and high-performance cloud platform, optimized for GPU-intensive applications and backed by industry-leading expertise."
          gradientRight="rgba(255,255,255,0.12)"
          gradientBottom="rgba(255,255,255,0.12)"
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CloudFeaturesSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <PerformanceHighlight />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="font-sans text-center mb-5 mt-16">
          <h4 className="text-3xl text-gray-800 font-semibold">Enterprise-Grade Security</h4>
          <p className="text-gray-700 mt-2 text-md">
            Comprehensive security features to protect your infrastructure
          </p>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Hero
          title="Pricing"
          description="Introducing our latest B200 GPU, built on the revolutionary Hopper architecture. Designed to deliver unprecedented performance for AI and high-performance computing workloads, featuring advanced Tensor Cores and transformative memory technology."
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
        <BlackwellComponent />
      </FadeInWhenVisible>

     
        <ArchitectureCompnenet />
      

      <FadeInWhenVisible>
        <Onboarding />
      </FadeInWhenVisible>

      <Footer />
    </div>
  );
};

export default CloudPlatform;
