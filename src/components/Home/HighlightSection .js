import React from 'react';

const HighlightSection = ({ heading, description }) => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-center font-sans text-[#0B1229] bg-white">
      <h1 className="text-[48px] leading-[56px] font-semibold whitespace-pre-line">
        {heading}
      </h1>
      <p className="mt-6 text-[16px] leading-[24px] max-w-xl mx-auto">
        {description}
      </p>
    </section>
  );
};

export default HighlightSection;
