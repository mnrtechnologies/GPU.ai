import React from "react";
import Hero from "../../components/common/Hero";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import BlackwellComponent from "../../components/common/BlackwellComponent";
import ArchitectureCompnenet from "../../components/common/ArchitectureCompnenet";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";


const SecurityCard = ({ icon, title, description }) => (
  <div className="border border-gray-200 font-sans rounded-lg p-6">
    <i className={`${icon} text-[#A800FF] text-2xl mb-4`} />
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

const securityFeatures = [
  {
    icon: "fas fa-lock",
    title: "End-to-End Encryption",
    description:
      "AES-256 encryption for data at rest and in transit. Secure key management with hardware security modules.",
  },
  {
    icon: "fas fa-user-shield",
    title: "Advanced Access Control",
    description:
      "Role-based access control, multi-factor authentication, and SSO integration with major providers.",
  },
  {
    icon: "fas fa-file-alt",
    title: "Compliance Standards",
    description:
      "SOC 2 Type II, ISO 27001, HIPAA, and GDPR compliant infrastructure and processes.",
  },
  {
    icon: "fas fa-globe",
    title: "Network Security",
    description:
      "DDoS protection, WAF, and private networking options with dedicated interconnects.",
  },
  {
    icon: "fas fa-server",
    title: "24/7 Monitoring",
    description:
      "Real-time threat detection, automated incident response, and continuous security monitoring.",
  },
  {
    icon: "fas fa-check-circle",
    title: "Audit Logging",
    description:
      "Comprehensive audit trails, activity logs, and compliance reporting capabilities.",
  },
];

const SecurityGrid = () => (
  <div className="bg-white text-gray-900 font-['Roboto_sans']">
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {securityFeatures.map((item, idx) => (
          <SecurityCard key={idx} {...item} />
        ))}
      </div>
    </div>
  </div>
);


const SecurityNComplaince = () => {
  return (
    <div>
      <FadeInWhenVisible>
        <Hero
          title="Enterprise-Grade Security"
          description="State-of-the-art security measures and compliance standards to protect your data and workloads. Built-in encryption, access controls, and continuous monitoring for peace of mind."
          gradientRight="rgba(0,0,0,0.05)"
          gradientBottom="rgba(0,0,0,0.05)"
          bgColor="bg-gray-100"
          titleColor="text-gray-800"
          descriptionColor="text-gray-500"
        />
      </FadeInWhenVisible>

      <SecurityGrid />

      <FadeInWhenVisible>
        <Hero
          title="Pricing"
          description="Introducing our latest B200 GPU, built on the revolutionary Hopper architecture. Designed to deliver unprecedented performance for AI and high-performance computing workloads, featuring advanced Tensor Cores and transformative memory technology."
          gradientRight="rgba(255,255,255,0.05)"
          gradientBottom="rgba(255,255,255,0.05)"
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <BlackwellComponent />
      </FadeInWhenVisible>

      
        <ArchitectureCompnenet />
  

      <FadeInWhenVisible>
        <Onboarding />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </div>
  );
};

export default SecurityNComplaince;
