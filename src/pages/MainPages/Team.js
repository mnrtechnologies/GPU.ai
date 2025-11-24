import React from "react";
import Footer from "../../components/common/Footer";
import Onboarding from "../../components/common/Onboarding";
import CultureSection from "../../components/Team/CultureSection";
import TeamSection from "../../components/Team/TeamSection";
import TeamLeadership from "../../components/Team/TeamLeadership";

const Team = () => {
  return (
    <div>
      <TeamLeadership />
      <TeamSection />
      <CultureSection />
      <Onboarding />
      <Footer />
    </div>
  );
};

export default Team;
