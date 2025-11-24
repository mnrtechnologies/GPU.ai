import React from "react";


const Architecture = ({
  title,
  heading,
  description,
  pricing = [],
  features = [],
  specBgColor = "bg-blue-100",
}) => {
  return (
    <div className="bg-white p-6 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Pricing & Description */}
        <section className="flex flex-col gap-6 max-w-xs">
          <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
          <p className="text-slate-700 leading-relaxed">{description}</p>
          <div className="grid grid-cols-2 gap-4">
            {pricing.map((price, idx) => (
              <div
                key={idx}
                className={`${price.bg} ${price.text} rounded-full px-6 py-1 text-center font-normal text-sm`}
              >
                {price.label}
              </div>
            ))}
          </div>
        </section>

        {/* Specs / Features */}
        <section className={`${specBgColor} rounded-xl p-6 flex-1`}>
          <h3 className="text-slate-900 font-semibold text-lg mb-4">
            {heading}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 text-slate-900 text-sm font-normal"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Architecture;
