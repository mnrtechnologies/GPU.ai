import React from "react";

const SpecsCard = ({ label, value, icon: Icon }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 flex items-center space-x-6">
      <div className="bg-green-100 rounded-md p-4">
        <Icon className="w-10 h-10 text-green-600" /> 
      </div>
      <div>
        <p className="text-xs text-gray-600 mb-1">{label}</p>
        <p className="text-2xl font-extrabold leading-none">{value}</p>
      </div>
    </div>
  );
};

const SpecsCards = ({ topSpecs, bottomSpecs }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 font-sans text-gray-900 bg-white">
      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {topSpecs.map((item, idx) => (
          <SpecsCard
            key={idx}
            label={item.label}
            value={item.value}
            icon={item.icon} 
          />
        ))}
      </div>

      {/* Bottom Cards */}
      <div className="bg-gray-50 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {bottomSpecs.map((item, idx) => (
          <div key={idx} className="bg-green-50 p-6 rounded-lg flex items-center space-x-6">
            <SpecsCard
              label={item.label}
              value={item.value}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecsCards;
