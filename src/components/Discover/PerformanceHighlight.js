import React from "react";

const metrics = [
  {
    icon: "fas fa-rocket",
    title: "99.99% Uptime",
    subtitle: "Enterprise-grade reliability",
  },
  {
    icon: "fas fa-chart-line",
    title: "Sub-millisecond Latency",
    subtitle: "Ultra-fast response times",
  },
];

const PerformanceHighlight = () => (
  <div className="bg-[#f7f9fc] mt-16 py-12">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
      <div className="max-w-lg lg:max-w-md">
        <h2 className="font-mono text-gray-700 font-bold text-xl sm:text-4xl mb-7">
          Industry-Leading Performance
        </h2>
        <p className="font-mono text-gray-700 text-sm sm:text-lg mb-6 leading-relaxed">
          Our cloud platform delivers exceptional performance metrics that set us apart:
        </p>
        <div className="space-y-4">
          {metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-md p-4 shadow-sm">
              <i className={`${m.icon} text-[#a349a4] text-2xl`} />
              <div>
                <h4 className="font-mono text-gray-700 font-semibold text-lg">{m.title}</h4>
                <p className="font-mono text-md text-gray-600">{m.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Cloud performance dashboard"
        className="rounded-lg max-w-full h-auto"
        width="600"
        height="350"
      />
    </div>
  </div>
);

export default PerformanceHighlight;
