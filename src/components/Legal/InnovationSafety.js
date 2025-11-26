import React from "react";

const InnovationSafety = () => {
  return (
    <main className="max-w-[1160px] mx-auto mt-16 px-5 font-sans text-[#0a0a0a]">
      <section
        className="bg-[#a349a2] rounded-xl p-8 text-white text-[13px] leading-[1.6] grid grid-cols-1 gap-6"
        style={{
          fontFeatureSettings: "'liga' off",
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to right, #A800FF, #a349a6)`,
          backgroundSize: '20px 20px, 100% 100%',
        }}
      >
        {/* Heading: Innovation & Safety */}
        <h2 className="font-bold text-3xl mt-4 text-center select-text">
          Our Commitment to <span className="font-bold">Innovation & Safety</span>
        </h2>

        {/* First Paragraph */}
        <p className="text-[17px] leading-[1.6] font-normal max-w-[900px] mx-auto text-center">
          NovaCore is dedicated to responsible AI development and deployment practices,
          prioritizing safety, security, and transparency in all our endeavors.
          We believe that AI has the potential to transform industries and improve lives,
          and we're committed to realizing that potential while minimizing the risks.
          Our commitment to responsible AI means that we're constantly working to
          improve our processes, tools, and techniques to ensure that our AI solutions
          are safe, secure, and beneficial for all stakeholders.
        </p>

        {/* Innovation Principles Section */}
        <h2 className="font-bold text-3xl text-center select-text">Innovation Principles</h2>
        <p className="text-[17px] leading-[1.6] font-normal max-w-[900px] mx-auto text-center">
          We're committed to cutting-edge AI research and development, continuous
          improvement and iteration, open collaboration with the AI community,
          and investment in emerging technologies. We believe that innovation is a
          continuous process and that the best ideas come from diverse perspectives,
          so we're always looking for ways to improve our AI solutions and services.
          We also believe that AI should be accessible to everyone, regardless of
          their background or experience level, so we're committed to making our
          AI solutions as user-friendly and accessible as possible.
        </p>

        {/* Safety Standards Section */}
        <h2 className="font-bold text-3xl text-center select-text">Safety Standards</h2>
        <p className="text-[17px] leading-[1.6] mb-4 font-normal max-w-[900px] mx-auto text-center">
          We adhere to rigorous testing and validation, proactive risk assessment,
          regular security audits, and transparent reporting to ensure the safety
          and security of our AI solutions. Additionally, we prioritize responsible
          AI development practices, such as implementing robust security measures,
          using bias-free training data, and ensuring transparency in AI decision-making
          processes. We also maintain a dedicated AI Ethics Board that reviews and
          approves our AI development projects to ensure they meet the highest
          standards of safety, security, and ethical considerations. By taking a
          proactive approach to AI safety and security, we're committed to building
          trust with our customers, partners, and the broader AI community.
        </p>
      </section>
    </main>
  );
};

export default InnovationSafety;
