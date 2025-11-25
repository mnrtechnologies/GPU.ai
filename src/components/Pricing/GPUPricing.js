import React from "react";

const pricingData = [
  {
    tier: "On-Demand",
    rate: "₹550–₹600/hr",
    usd: "~$6.00/hr",
    savings: "Baseline pricing",
    target: "Flexible workloads",
    features: ["By-the-minute billing", "Instant provisioning"],
    color: "text-green-600",
  },
  {
    tier: "Reserved 1-Year",
    rate: "₹500/hr",
    usd: "~$5.50/hr",
    savings: "14% OFF",
    target: "Consistent users",
    features: ["Guaranteed capacity", "Priority support"],
    color: "text-emerald-600",
    badge: "14% OFF",
  },
  {
    tier: "Reserved 2-Year",
    rate: "₹450/hr",
    usd: "~$5.00/hr",
    savings: "25% OFF",
    target: "Growing startups",
    features: ["Maximum savings", "Predictable costs"],
    color: "text-emerald-600",
    badge: "25% OFF",
  },
  {
    tier: "Spot/Promo",
    rate: "₹350–₹400/hr",
    usd: "$4.00–$4.80/hr",
    savings: "UP TO 45% OFF",
    target: "Batch processing",
    features: ["Limited availability", "Auto-fallback option"],
    color: "text-blue-600",
    badge: "UP TO 45% OFF",
  },
  {
    tier: "Early-Startup Deal",
    rate: "₹300–₹350/hr",
    usd: "$3.30–$4.00/hr",
    savings: "UP TO 50% OFF",
    target: "Incubated startups",
    features: ["Pre-pay credits", "Free onboarding", "Infra consulting"],
    color: "text-purple-600",
    badge: "UP TO 50% OFF",
  },
];

const GPUPricing = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto font-sans">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">GPU Cloud Pricing Strategy</h2>
      <p className="text-center text-gray-600 mb-10">Competitive pricing for the Indian market with transparent, India-first approach</p>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <tr>
              <th className="p-4">Pricing Tier</th>
              <th className="p-4">Rate</th>
              <th className="p-4">Savings</th>
              <th className="p-4">Target Audience</th>
              <th className="p-4">Key Features</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="p-4 font-medium text-gray-900">{item.tier}</td>
                <td className="p-4">
                  <div className={`font-bold ${item.color}`}>{item.rate}</div>
                  <div className="text-gray-500 text-sm">{item.usd}</div>
                </td>
                <td className="p-4">
                  {item.badge ? (
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded">
                      {item.badge}
                    </span>
                  ) : (
                    <span className="text-gray-700 text-sm">{item.savings}</span>
                  )}
                </td>
                <td className="p-4 text-gray-800">{item.target}</td>
                <td className="p-4 text-gray-700">
                  <ul className="list-disc ml-4 space-y-1">
                    {item.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GPUPricing;
