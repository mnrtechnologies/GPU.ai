import React from "react";
import Footer from "../../components/common/Footer";
import HeroSection from "../../components/About/HeroSection";
import GlobalImpactAndReach from "../../components/About/GlobalImpactAndReach";
import VisionPage from "../../components/About/VisionPage";
import GlobalPresence from "../../components/About/GlobalPresence";
import Timeline from "../../components/About/Timeline";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

const Vision = () => {
  const stats = [
    { number: "20+", label: "GPU Types", color: "text-blue-600" },
    { number: "50+", label: "Deployable Models", color: "text-green-600" },
    { number: "1sec", label: "Deployment", color: "text-purple-600" },
    { number: "0.01$", label: "Per Request", color: "text-orange-600" },
  ];

  return (
    <div>
      <FadeInWhenVisible>
        <HeroSection
          heading="Unleash the Power of Multi-GPU Computing"
          subheading="Access a diverse swarm of cutting-edge GPUs including B200s, B200, H100, A100 80GB, A100 40GB, L40S and L4, backed by high-performance compute centers. Deploy LLMs, ASRs, and custom models with just one click."
          button1Text="Join Our Team →"
          button2Text="Learn More"
          stats={stats}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <GlobalImpactAndReach />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <VisionPage />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Timeline />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <GlobalPresence />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </div>
  );
};

export default Vision;
