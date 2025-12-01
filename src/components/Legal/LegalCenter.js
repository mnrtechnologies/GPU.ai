import React from "react";

const LegalCenter = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 bg-white text-gray-700 font-sans">
      <h1 className="text-center text-2xl font-semibold text-gray-800 mb-2">
        Legal Center
      </h1>
      <p className="text-center text-md text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
        Your comprehensive guide to GPU.ai's legal documentation and policies.
        This section provides detailed information about our Terms of Service,
        Privacy Policy, Cookie Policy, and other legal documents that govern
        your use of our products and services.
      </p>

      {/* Disclaimers */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <DisclaimerCard
          icon="exclamation-triangle"
          bgColor="#dd2525"
          iconBg="#e55a5a"
          title="Security Disclaimer"
          text="GPU.ai is not responsible for any security breaches, data loss,
            or damages resulting from the deployment of malicious software by
            users. Users are solely responsible for verifying the safety and
            integrity of any software they deploy."
        />
        <DisclaimerCard
          icon="shield-alt"
          bgColor="#f15a0a"
          iconBg="#f28a3a"
          title="Liability Limitation"
          text="We provide our services 'as is' without any warranty. GPU.ai shall
            not be liable for any damages, including but not limited to direct,
            indirect, special, incidental, or consequential damages arising from
            the use of our services."
        />
      </section>

      {/* Policies */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            icon: "users",
            title: "Privacy Policy",
            text: "Learn how we collect, use, and protect your personal information",
          },
          {
            icon: "file-alt",
            title: "Terms of Use",
            text: "Understand the rules and guidelines for using our services",
          },
          {
            icon: "cookie-bite",
            title: "Cookie Policy",
            text: "Details about how we use cookies and similar technologies",
          },
          {
            icon: "shield-alt",
            title: "Security Measures",
            text: "Our commitment to protecting your data and privacy",
          },
          {
            icon: "robot",
            title: "AI Usage Guidelines",
            text: "Understanding the responsible use of our AI technologies",
          },
          {
            icon: "database",
            title: "Data Processing",
            text: "How we handle and process your data with our AI systems",
          },
        ].map((policy, idx) => (
          <PolicyCard key={idx} {...policy} />
        ))}
      </section>
    </main>
  );
};

const DisclaimerCard = ({ icon, bgColor, iconBg, title, text }) => (
  <article
    className="rounded-md p-9 text-white shadow-md flex gap-4"
    style={{ backgroundColor: bgColor }}
  >
    <div
      className="flex items-center justify-center rounded-md w-12 h-12 flex-shrink-0"
      style={{ backgroundColor: iconBg }}
    >
      <i className={`fas fa-${icon} text-white text-lg`} />
    </div>
    <div>
      <h2 className="font-semibold text-lg mb-2">{title}</h2>
      <p className="text-[15px] leading-tight">{text}</p>
    </div>
  </article>
);

const PolicyCard = ({ icon, title, text }) => (
  <article className="bg-[#e9ebec] rounded-md p-8 flex gap-4 items-start shadow-sm">
    <div className="bg-[#A800FF] flex items-center justify-center rounded-md w-10 h-10 flex-shrink-0">
      <i className={`fas fa-${icon} text-white text-lg`} />
    </div>
    <div>
      <h3 className="font-semibold text-md mb-1 text-gray-900">{title}</h3>
      <p className="text-[15px] text-gray-600 leading-tight max-w-xs">{text}</p>
    </div>
  </article>
);

export default LegalCenter;
