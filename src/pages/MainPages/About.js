import React from "react";
import Footer from "../../components/common/Footer";
import HeroSection from "../../components/About/HeroSection";
import GlobalImpactAndReach from "../../components/About/GlobalImpactAndReach";
import VisionPage from "../../components/About/VisionPage";
import GlobalPresence from "../../components/About/GlobalPresence";
import Timeline from "../../components/About/Timeline";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

const About = () => {
  const stats = [
    { number: "500+", label: "Enterprise Clients", color: "text-blue-600" },
    { number: "99.9%", label: "Uptime Guaranteed", color: "text-green-600" },
    { number: "24/7", label: "Support Available", color: "text-purple-600" },
    { number: "50+", label: "Countries Served", color: "text-orange-600" },
  ];
 return (
    <div>
      <FadeInWhenVisible>
        <HeroSection
          heading="Pioneering the Future of AI Infrastructure"
          subheading="NovaCore is revolutionizing AI infrastructure with cutting-edge technology and unparalleled performance. Join us in shaping the future of AI computing."
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

      <Footer />
    </div>
  );
};

export default About;
