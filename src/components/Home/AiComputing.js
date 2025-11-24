import React from 'react';
import { useNavigate } from 'react-router-dom';

const AIComputing = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-6 mt-20 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="flex-1">
          <img
            alt="High-tech AI computing hardware with multiple GPU accelerators inside a server chassis on a blue gradient background"
            className="rounded-xl w-full object-cover"
            height="450"
            src="https://novacore-df106.web.app/assets/NextGenComputing-C5wC_Pik.jpg"
            width="700"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex-1 max-w-2xl">
          <p className="text-lg text-[#a349a4] mb-4">Coming Soon</p>
          <h1 className="text-4xl text-gray-800 font-extrabold leading-tight mb-6">
            Experience the Next Generation of AI Computing
          </h1>
          <p className="text-md text-gray-600 leading-relaxed mb-8">
            Be among the first to get access to NVIDIA GB200 NVL72 and HGX B200,
            the most advanced NVIDIA accelerators on the market. We will start
            deploying them in early 2025.
          </p>
          <div className="flex flex-wrap gap-6">
            <button onClick={()=> navigate("/contact")} className="bg-[#a349a4] text-white rounded-lg px-8 py-4 text-lg font-medium hover:bg-[rgb(162,0,138)] transition">
              Reserve your cluster
            </button>
            <button className="border border-[#a349a4] text-[#0B1E40] rounded-lg px-8 py-4 text-lg font-medium hover:bg-[#E6F0FA] transition">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIComputing;
