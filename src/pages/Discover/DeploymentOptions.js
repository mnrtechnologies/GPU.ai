import React from "react";

const deploymentOptions = [
  {
    title: "Dedicated GPU Servers",
    description:
      "Access dedicated B200s, B200, H100, or A series GPUs with guaranteed resources and performance",
    icon: "fas fa-server",
    bgColor: "bg-[#d7e6fd]",
  },
  {
    title: "Multi-GPU Clusters",
    description:
      "Scale your workloads across multiple GPUs with NWLink and NVSwitch for maximum performance",
    icon: "fas fa-network-wired",
    bgColor: "bg-[#defbe9]",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Custom infrastructure solutions with dedicated support and SLA guarantees",
    icon: "fas fa-users",
    bgColor: "bg-[#f0e6ff]",
  },
  {
    title: "High-Performance Computing",
    description:
      "Specialized clusters with B200s, B200s and NVSwitch for large-scale distributed training",
    icon: "fas fa-bolt",
    bgColor: "bg-[#ffe9cc]",
  },
  {
    title: "Inference Optimization",
    description:
      "RTX 4090 and 3090 clusters optimized for high-throughput inference workloads",
    icon: "fas fa-chart-bar",
    bgColor: "bg-[#d7f7f3]",
  },
  {
    title: "Global Edge Deployment",
    description:
      "Distributed A6000 and RTX clusters across global regions for low-latency inference",
    icon: "fas fa-globe",
    bgColor: "bg-[#d7e1ff]",
  },
];

export default function DeploymentOptions() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 font-mono">
      <header className="text-center mb-8">
        <h1 className="text-[32px] font-semibold leading-tight">
          Flexible Deployment
          <br />
          Options
        </h1>
        <p className="text-[15px] text-[#4a5568] mt-2 max-w-xs mx-auto leading-tight">
          Choose the deployment option that best fits your needs, from dedicated
          <br />
          GPU servers to multi-GPU clusters
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {deploymentOptions.map((item, index) => (
          <article
            key={index}
            className="rounded-lg border border-gray-200 overflow-hidden"
          >
            <div
              className={`${item.bgColor} flex justify-center items-center h-36`}
            >
              <i className={`${item.icon} text-[#a349a4] text-4xl`} />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-[16px] mb-1">{item.title}</h2>
              <p className="text-[14px] text-[#4a5568] leading-tight">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
