import React from "react";

const ServicesGrid = ({ services }) => {
  return (
    <div className="bg-white p-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group rounded-xl p-6 bg-gray-100 transition-all duration-300 border border-transparent hover:border-[#A800FF]`}
          >
            {/* Grid pattern on hover */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>

            {/* Content layer */}
            <div className=" z-10">
              <div
                className="text-[#A800FF] text-3xl mb-4"
              >
                {service.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="text-[#A800FF]
 inline-flex items-center font-normal text-base group-hover:border-[#A800FF] transition-colors duration-300"
              >
                Learn more
                <svg
                  className="ml-1 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
