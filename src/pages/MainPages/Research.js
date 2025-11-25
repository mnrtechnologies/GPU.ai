import React from "react";
import Footer from "../../components/common/Footer";
import Hero from "../../components/common/Hero";
import Onboarding from "../../components/common/Onboarding";
import InfoCards from "../../components/Research/InfoCrads";
import ResearchBenefits from "../../components/Research/ResearchBenefits";
import ResearchAndBenefits from "../../components/Research/ResearchAndBenefits";
import HowToEnroll from "../../components/Research/HowToEnroll";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

const Research = () => {
  return (
    <div>
      <FadeInWhenVisible>
        <Hero
          title="Research Laboratory"
          description="Accelerate your research with our state-of-the-art GPU
              infrastructure and collaborative environment. Join a community of
              researchers pushing the boundaries of AI and scientific computing."
          gradientRight="rgba(0,0,0,0.05)"
          gradientBottom="rgba(0,0,0,0.05)"
          bgColor="bg-gray-100"
          titleColor="text-gray-800"
          descriptionColor="text-gray-500"
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <InfoCards />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <ResearchBenefits />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <ResearchAndBenefits />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <HowToEnroll />
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

export default Research;
