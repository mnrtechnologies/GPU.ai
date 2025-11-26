import React from "react";

const Onboarding2 = ({ title, description, buttonLabel, onButtonClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-3 font-sans py-20">
      <div
        className="rounded-2xl py-20 px-10 text-center text-gray-900"
        style={{
          backgroundColor: "#f3f4f6", 
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-10">
          {title}
        </h1>

        <p className="text-xl text-gray-700 tracking-widest mb-4">
          {description}
        </p>

        <button
          className="group bg-[#A800FF] hover:bg-[rgb(162,0,138)] text-white font-semibold text-md tracking-widest py-4 px-7 rounded-2xl shadow-md inline-flex items-center justify-center"
          type="button"
          onClick={onButtonClick}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Onboarding2;
