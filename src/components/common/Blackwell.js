import React from 'react';

const Blackwell = ({ title, description, onButtonClick, boxBgColor = '#ecf9d6' }) => {
  return (
    <div className="bg-white font-mono p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 text-left">
          <h2 className="font-extrabold text-2xl leading-tight text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-900 text-sm leading-relaxed max-w-xs">
            {description}
          </p>
        </div>
        <div
          className="md:w-2/3 rounded-xl p-6 flex flex-col justify-start"
          style={{ backgroundColor: boxBgColor }}
        >
          <h3 className="font-extrabold text-base text-gray-900 mb-4">{title}</h3>
          <button
            className="bg-[#a349a4] text-white font-extrabold text-base rounded-md px-5 py-3 w-max"
            type="button"
            onClick={onButtonClick}
          >
            Reserve Blackwell Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blackwell;
