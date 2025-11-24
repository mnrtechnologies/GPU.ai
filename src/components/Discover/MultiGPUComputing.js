import React from "react";

const MultiGPUComputing = () => {
  return (
    <div className="bg-white font-mono">
      <div className="max-w-7xl mx-auto p-8 bg-gray-100 rounded-2xl mt-10 mb-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
              Advanced Multi-GPU Computing
            </h2>
            <p className="text-gray-600 text-md leading-relaxed max-w-xl">
              Leverage our state-of-the-art multi-GPU infrastructure powered by NVLink and NVSwitch technology. Scale your workloads across multiple GPUs seamlessly.
            </p>
            <div className="flex flex-col gap-4">
              {/* Feature 1 */}
              <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm max-w-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#a349a4] rounded-md text-white">
                  <i className="fas fa-project-diagram text-lg"></i>
                </div>
                <div className="text-gray-900 text-lg leading-relaxed">
                  <p className="font-semibold">NVLink High-Speed Interconnect</p>
                  <p className="text-gray-700 text-sm mt-1">
                    900 GB/s bi-directional bandwidth for ultra-fast GPU-to-GPU communication
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm max-w-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#a349a4] rounded-md text-white">
                  <i className="fas fa-cogs text-lg"></i>
                </div>
                <div className="text-gray-900 text-lg leading-relaxed">
                  <p className="font-semibold">NVSwitch Architecture</p>
                  <p className="text-gray-700 text-sm mt-1">
                    Connect up to 8 GPUs with full-bandwidth connectivity for maximum performance
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm max-w-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#a349a4] rounded-md text-white">
                  <i className="fas fa-chart-line text-lg"></i>
                </div>
                <div className="text-gray-900 text-lg leading-relaxed">
                  <p className="font-semibold">Linear Performance Scaling</p>
                  <p className="text-gray-700 text-sm mt-1">
                    Achieve near-linear performance scaling for distributed training workloads
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://storage.googleapis.com/a1aa/image/dcb5ab09-f4aa-49ef-e27c-c8e7c46bb210.jpg"
              alt="3D network diagram of interconnected transparent cubes representing multi-GPU computing architecture on a black background"
              className="rounded-xl w-full object-cover"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiGPUComputing;
