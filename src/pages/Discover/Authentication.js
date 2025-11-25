import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import Hero from "../../components/common/Hero";
import BlackwellComponent from "../../components/common/BlackwellComponent";
import ArchitectureCompnenet from "../../components/common/ArchitectureCompnenet";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

// SecurityFeatureCard Component
const SecurityFeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-200 rounded-xl p-8 text-center">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 mx-auto mb-4">
      <i className={`${icon} text-white text-lg`} />
    </div>
    <h3 className="font-semibold text-base mb-2">{title}</h3>
    <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
  </div>
);

const features = [
  {
    icon: "fas fa-shield-alt",
    title: "Role-Based Access",
    description:
      "Control access to your console and models with customizable roles",
  },
  {
    icon: "fas fa-user-lock",
    title: "Multi-Factor Auth",
    description:
      "Add an extra layer of security with multi-factor authentication",
  },
  {
    icon: "fas fa-key",
    title: "SSO Integration",
    description:
      "Seamlessly integrate with your existing identity providers and SSO",
  },
  {
    icon: "fas fa-fingerprint",
    title: "Biometric Support",
    description:
      "Authenticate with your face, fingerprint, or voice with support for MFA",
  },
];

const SecurityFeaturesGrid = () => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, idx) => (
        <SecurityFeatureCard key={idx} {...feature} />
      ))}
    </div>
  </div>
);

const Authentication = () => {
  return (
    <div>

      <FadeInWhenVisible>
        <Hero
          title="Identity and Access Management"
          description="Management Secure access to your console and deployed models with NovaCore's IAM. Set up fine-grained role-based access control and multi-factor authentication."
          gradientRight="rgba(255,255,255,0.05)"
          gradientBottom="rgba(255,255,255,0.05)"
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="bg-white font-sans text-gray-900">
          <SecurityFeaturesGrid />
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Hero
          title="Pricing"
          description="Introducing our latest B200 GPU, built on the revolutionary Hopper architecture. Designed to deliver unprecedented performance for AI and high-performance computing workloads, featuring advanced Tensor Cores and transformative memory technology."
          gradientRight="rgba(255,255,255,0.05)"
          gradientBottom="rgba(255,255,255,0.05)"
          buttons={[
            {
              label: "Explore",
              className: "bg-white text-[#a349a4] hover:bg-[rgb(162,0,138)] hover:text-white",
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

      <FadeInWhenVisible>
        <ArchitectureCompnenet />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Onboarding />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Onboarding
          description="Be the first to explore our product with the full suite authentication."
          btnlabel="BOOK A DEMO"
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

export default Authentication;
