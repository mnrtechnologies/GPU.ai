import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import CultureSection from "../../components/Team/CultureSection";
import TeamSection from "../../components/Team/TeamSection";
import TeamLeadership from "../../components/Team/TeamLeadership";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";


const Team = () => {
  return (
    <div>
      <FadeInWhenVisible>
        <TeamLeadership />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <TeamSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <CultureSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Onboarding />
      </FadeInWhenVisible>

      <Footer />
    </div>
  );
};

export default Team;
