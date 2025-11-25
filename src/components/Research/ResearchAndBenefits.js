import React from "react";

const ResearchAndBenefits = () => {
  return (
    <div className="bg-white mt-14 font-sans p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        <section className="bg-[#c9f7f5] rounded-lg p-6 flex-1 ">
          <h4 className="font-sans font-semibold text-2xl mb-4 text-[#0f172a]">
            Research Areas
          </h4>
          <ul className="font-sans text-[#475569] space-y-2 list-disc list-inside">
            <li>Advanced AI Infrastructure Development</li>
            <li>High-Performance Computing Solutions</li>
            <li>Distributed Systems and Cloud Architecture</li>
            <li>AI Model Optimization and Deployment</li>
            <li>Green Computing and Sustainability</li>
          </ul>
        </section>
        <section className="bg-[#d7e6ff] rounded-lg p-6 flex-1">
          <h4 className="font-sans font-semibold text-2xl mb-4 text-[#0f172a]">
            Benefits
          </h4>
          <ul className="font-sans text-[#475569] space-y-2 list-disc list-inside">
            <li>Access to state-of-the-art research facilities</li>
            <li>Collaboration with industry experts</li>
            <li>Publication opportunities</li>
            <li>Research funding support</li>
            <li>Industry networking opportunities</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ResearchAndBenefits;
