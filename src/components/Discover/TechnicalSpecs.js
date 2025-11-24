import React from "react";

const TechnicalSpecs = ({ title, description, specs }) => {
  return (
    <main className="max-w-7xl mx-auto p-6 md:p-12 rounded-xl bg-[#efefef] mt-10 mb-10 font-mono">
      <section className="text-center max-w-xl mx-auto">
        <h1 className="font-extrabold text-gray-700 text-3xl md:text-5xl leading-tight whitespace-pre-line">
          {title}
        </h1>
        <p className="mt-6 text-sm md:text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
          {description}
        </p>
      </section>

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-lg p-5"
            style={{ backgroundColor: spec.bg }}
          >
            <div className="bg-white p-4 rounded-md flex items-center justify-center">
              <i className={`${spec.icon} text-[#9b3a3a] text-2xl`}></i>
            </div>
            <div>
              <p className="font-extrabold text-2xl">
                {spec.value}
                {spec.suffix && (
                  <span className="text-sm font-normal"> {spec.suffix}</span>
                )}
              </p>
              <p className="text-md">{spec.label}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default TechnicalSpecs;
