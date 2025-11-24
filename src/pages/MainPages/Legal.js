import React from "react";
import Footer from "../../components/common/Footer";
import LegalInfo from "../../components/Legal/LegalInfo";
import HeroSection from "../../components/About/HeroSection";
import InnovationSafety from "../../components/Legal/InnovationSafety";
import NovacoreCompliance from "../../components/Legal/NovacoreCompliance";
import LegalCenter from "../../components/Legal/LegalCenter";
import LegalTerms from "../../components/Legal/LegalTerms";
import FAQ from "../../components/Legal/FAQ";

const Legal = () => {
  const stats = [
    { number: "ISO", label: "27001 Certified", color: "text-blue-600" },
    { number: "GDPR", label: "Compliant", color: "text-green-600" },
    { number: "SOC2", label: "Type II Certified", color: "text-purple-600" },
    { number: "HIPAA", label: "Compliant", color: "text-orange-600" },
  ];
  return (
    <div>
      <HeroSection
        heading="Legal and Compliance Framework"
        subheading="Understand our terms, policies, and commitments to security, privacy, and compliance."
        button1Text="View FAQs →"
        button2Text="Terms & Conditions"
        stats={stats}
      />
      <LegalCenter />
      <LegalTerms/>
      <FAQ/>
      <NovacoreCompliance />
      <InnovationSafety />
      <LegalInfo />
      <Footer />
    </div>
  );
};

export default Legal;
