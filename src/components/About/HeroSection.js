import React from 'react';

const HeroSection = ({ heading, subheading, button1Text, button2Text, stats }) => {
  return (
<div
  className="min-h-screen bg-gray-200 overflow-hidden pt-16 md:pt-0"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
  }}
>
      <div className="z-10 font-sans flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 sm:py-32 md:py-40 lg:py-60">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            {heading}
          </h1>
          <p className="text-gray-600 font-sans text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
            {subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-[#A800FF] hover:bg-[rgb(162,0,138)] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto">
              {button1Text}
            </button>
            <button className="border border-gray-400 hover:border-gray-600 text-gray-700 font-semibold py-3 px-6 rounded-lg w-full sm:w-auto">
              {button2Text}
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 md:mt-0 px-4 md:px-0 max-w-lg mx-auto md:mx-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <h3 className={`${stat.color} text-3xl font-bold`}>
                {stat.number}
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
