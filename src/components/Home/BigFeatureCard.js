import React from "react";

const BigFeatureCard = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col h-full">
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%27" 
        alt="Big Feature"
        className="w-full h-65 object-cover"
      />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-2xl font-bold mb-2">Enterprise-Grade Infrastructure</h2>
          <p className="text-gray-600">
            Access high-performance GPU clusters designed for enterprise workloads. Scale your computing resources on demand with our flexible infrastructure.
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2 text-[#A800FF]
">
            <span>🔧</span> Bare Metal Performance
          </div>
          <div className="flex items-center gap-2 text-[#A800FF]
">
            <span>🔗</span> InfiniBand Networking
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigFeatureCard;
