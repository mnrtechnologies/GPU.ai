import React from "react";

const steps = [
  {
    id: 1,
    title: "Submit Application",
    description:
      "Fill out the enrollment form with your details and research interests",
  },
  {
    id: 2,
    title: "Review Process",
    description:
      "Our team will review your application and research proposal",
  },
  {
    id: 3,
    title: "Onboarding",
    description:
      "Selected candidates will be invited for onboarding and project initiation",
  },
];

export default function HowToEnroll() {
  return (
    <div className="bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto p-8 bg-slate-100 rounded-lg mt-16">
        <h2 className="text-2xl font-semibold mb-8">How to Enroll</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-[#a349a4] rounded-full flex items-center justify-center text-white font-semibold text-lg mb-4 select-none">
                {step.id}
              </div>
              <h4 className="font-bold mb-2">{step.title}</h4>
              <p className="text-slate-700 text-md leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12 ">
        <button
          type="button"
          className="bg-[#a349a4] text-white font-sans font-semibold px-12 py-4 rounded-2xl hover:bg-[rgb(162,0,138)] transition-colors"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
