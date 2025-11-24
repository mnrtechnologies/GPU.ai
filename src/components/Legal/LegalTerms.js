import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LegalTerms = () => {
  const softwareDisclaimer = [
    "Users must maintain the confidentiality of their account credentials and API keys",
    "Any unauthorized access or security breaches must be reported immediately",
    'The software is provided "as is" without warranty of any kind',
    "Users are responsible for maintaining secure backup procedures for their data",
    "NovaCore reserves the right to modify or discontinue features with notice",
    "Usage of the platform must comply with all applicable laws and regulations",
    "Resource limits and quotas must be adhered to as specified in the service plan",
    "Users must implement appropriate security measures for their applications",
    "Regular security audits and updates are recommended",
    "Integration with third-party services must follow our security guidelines",
    "Performance monitoring and optimization is the user's responsibility",
    "Technical support availability varies by subscription tier",
  ];

  const prohibitedActivities = [
    "Using the platform for illegal or malicious purposes",
    "Attempting to bypass security measures or access restrictions",
    "Sharing or distributing access credentials",
    "Reverse engineering the platform or its components",
    "Training AI models for harmful or discriminatory purposes",
    "Unauthorized scraping or data collection",
    "Engaging in activities that disrupt or degrade platform performance",
    "Using the platform to distribute malware or harmful code",
    "Conducting unauthorized penetration testing",
    "Hosting or distributing malware",
    "Violating data privacy regulations",
    "Sharing confidential information without authorization",
    "Using the platform for spam or phishing activities",
    "Engaging in fraudulent activities",
  ];

  const intellectualPropertyRights = [
    "All platform code, design, and infrastructure remain NovaCore's property",
    "User-generated AI models and data remain the user's intellectual property",
    "NovaCore retains rights to platform improvements derived from usage patterns",
    "Users grant limited license for platform optimization and support",
    "Third-party components are subject to their respective licenses",
    "Custom developments require separate IP agreements",
    "Training data ownership must be properly documented",
    "Model outputs are subject to usage restrictions",
    "Patent rights for AI innovations must be clearly defined",
    "Derivative works must comply with original licenses",
    "Joint development requires explicit IP allocation",
    "Confidential information remains protected post-termination",
    "API documentation and examples are provided under limited license",
    "Trademark usage requires written permission",
    "Open-source components must maintain attribution",
  ];

  // Nested component
  const LegalArticle = ({ title, items, bgColor }) => (
    <article
      className={`${bgColor} rounded-md p-6  text-[#4a4a4a] leading-relaxed`}
    >
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </article>
  );

  return (
    <main className="max-w-5xl mx-auto font-mono mt-10 mb-20 px-6">
      <section className="bg-[#e8e8e8] rounded-xl p-6 space-y-6">
        <h2 className="font-semibold text-2xl flex items-center gap-2 text-[#3a3a3a]">
          <i className="fas fa-exclamation-triangle text-yellow-600"></i>
          Legal Terms &amp; Conditions
        </h2>

        <LegalArticle
          title="Software Usage Disclaimer"
          items={softwareDisclaimer}
          bgColor="bg-[#fff9db]"
        />

        <LegalArticle
          title="Prohibited Activities"
          items={prohibitedActivities}
          bgColor="bg-[#fff3f3]"
        />

        <LegalArticle
          title="Intellectual Property Rights"
          items={intellectualPropertyRights}
          bgColor="bg-[#e6f0ff]"
        />
      </section>
    </main>
  );
};

export default LegalTerms;
