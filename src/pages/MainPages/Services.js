import React from "react";
import Hero from "../../components/common/Hero";
import Footer from "../../components/common/Footer";
import BlackwellComponent from "../../components/common/BlackwellComponent";
import ArchitectureCompnenet from "../../components/common/ArchitectureCompnenet";
import Onboarding2 from "../../components/common/Onboarding2";
import ServiceCards from "../../components/Service/ServiceCards";

const Services = () => {
  return (
    <div>
      <Hero
        title="Services and Offerings"
        description="Comprehensive solutions for AI infrastructure, deployment, and optimization. From dedicated servers to GPU procurement, we've got you covered."
        gradientRight="rgba(0,0,0,0.05)"
        gradientBottom="rgba(0,0,0,0.05)"
        bgColor="bg-gray-100"
        titleColor="text-gray-800"
        descriptionColor="text-gray-500"
      />

      <ServiceCards/>

      <BlackwellComponent />

      <div className="space-y-12">
        <ArchitectureCompnenet />
      </div>

      <Onboarding2
        title="Ready to Get Started?"
        description="Contact us today to learn more about our services and how we can help you achieve your goals."
        buttonLabel="Contact Us"
        onButtonClick={() => alert("Contact button clicked!")}
      />

      <Footer />
    </div>
  );
};

export default Services;
