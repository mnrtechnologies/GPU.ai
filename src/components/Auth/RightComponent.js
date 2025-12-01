import React from "react";
import { Link } from "react-router-dom";

const RightComponent = () => {
  return (
    <div className="flex-1 bg-sky-600 text-white flex flex-col justify-between px-4 py-6 sm:p-8 md:p-20 relative min-h-[300px]">
      {/* Contact Button */}
      <Link to="/contact">
        <button
          type="button"
          className="absolute top-3 right-3 sm:top-6 sm:right-6 border border-white rounded-md px-3 sm:px-5 py-1.5 sm:py-3 text-xs sm:text-base hover:bg-white hover:text-[#00134D] transition"
        >
          Contact us
        </button>
      </Link>

      {/* Logo */}
      <Link to="/">
        <div className="flex justify-center items-center flex-grow min-h-[120px] sm:min-h-[180px]">
          <p className="text-2xl sm:text-5xl font-semibold">GPU.ai</p>
        </div>
      </Link>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-10 text-xs sm:text-sm text-white mt-4 sm:mt-0 mb-2 sm:mb-6">
        <a href="/legal" className="hover:underline">
          Privacy
        </a>
        <a href="/legal" className="hover:underline">
          Terms of Service
        </a>
        <a href="/legal" className="hover:underline">
          FAQ
        </a>
      </div>
    </div>
  );
};

export default RightComponent;
