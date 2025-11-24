import React from "react";

const GpuArchitecture = () => {
  return (
    <section className="flex justify-center font-mono items-center py-20 px-4 bg-white">
      <div className="flex flex-col md:flex-row items-stretch gap-0 max-w-6xl w-full relative">
        {/* GPU Image Block */}
        <div className="relative z-10 rounded-t-2xl md:rounded-l-2xl md:rounded-r-none overflow-hidden shadow-lg w-full md:w-1/2 max-h-[530px]">
          <img
            src="https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="GPU"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Block */}
        <div className="bg-gray-100 rounded-b-2xl md:rounded-2xl md:rounded-l-none p-6 md:p-10 flex flex-col justify-between w-full md:w-1/2 shadow-xl z-20 -mt-4 md:mt-0 md:-ml-12">
          {/* Title */}
          <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold font-mono">
            Revolutionary GPU Architecture
          </h2>

          {/* Features */}
          <div className="flex-1 flex flex-col justify-center gap-6 overflow-y-auto py-4 mt-4">
            <div className="bg-white p-5 rounded-lg shadow flex items-start gap-4">
              <i className="fas fa-microchip text-[#a349a4] text-2xl mt-1"></i>
              <div>
                <p className="text-[#a349a4] font-bold font-mono">
                  Advanced Tensor Cores
                </p>
                <p className="text-gray-800 text-sm">
                  Fourth‑gen Tensor Cores delivering up to 2× faster AI performance with FP8.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow flex items-start gap-4">
              <i className="fas fa-memory text-[#a349a4] text-2xl mt-1"></i>
              <div>
                <p className="font-bold font-mono text-[#a349a4]">HBM3e Memory</p>
                <p className="text-gray-800 text-sm">
                  141 GB ultra‑fast HBM3e at 4.8 TB/s for massive models.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow flex items-start gap-4">
              <i className="fas fa-bolt text-[#a349a4] text-2xl mt-1"></i>
              <div>
                <p className="font-bold font-mono text-[#a349a4]">Transformer Engine</p>
                <p className="text-gray-800 text-sm">
                  Built to accelerate transformer‑model training & inference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GpuArchitecture;
