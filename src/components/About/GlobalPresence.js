import React from "react";

const GlobalPresence = () => {
  return (
    <main className="max-w-7xl font-sans mx-auto px-6 py-12 bg-white text-gray-900">
      <h1 className="text-center text-4xl sm:text-5xl font-semibold mb-4">
        Global Presence
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-base sm:text-lg">
        Our strategically located offices and data centers ensure reliable, low-latency access to AI infrastructure across the globe.
      </p>

      {/* Cards Section */}
      <section className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <article className="w-full sm:w-1/2 lg:w-1/3 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://storage.googleapis.com/a1aa/image/ac08f185-4d51-42dd-feb1-b5ae83cae5ae.jpg"
            alt="Delaware, USA"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="font-semibold text-lg mb-2">Delaware, USA</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              Our global headquarters housing our primary GPU fleet and compute center.
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-1 text-sm">
              <li>Multiple GPU Types B200, A600, H100, 5090</li>
              <li>High-Performance Compute Center</li>
              <li>One-Click Deployment System</li>
              <li>24/7 Enterprise Support</li>
            </ul>
          </div>
        </article>

        {/* Card 2 */}
        <article className="w-full sm:w-1/2 lg:w-1/3 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://storage.googleapis.com/a1aa/image/6c709e26-de7b-4d15-2380-5e6dc2a010b1.jpg"
            alt="Hyderabad, India"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="font-semibold text-lg mb-2">Hyderabad, India</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              Our Asia development center with dedicated GPU clusters and deployment infrastructure.
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-1 text-sm">
              <li>Multi-GPU Infrastructure</li>
              <li>High-RAM Compute Center</li>
              <li>Model Deployment System</li>
              <li>AI Research Lab</li>
            </ul>
          </div>
        </article>

        {/* Card 3 */}
        <article className="w-full sm:w-1/2 lg:w-1/3 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://storage.googleapis.com/a1aa/image/ac08f185-4d51-42dd-feb1-b5ae83cae5ae.jpg"
            alt="Silicon Valley, USA"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="font-semibold text-lg mb-2">Silicon Valley, USA</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              Our global headquarters housing our primary GPU fleet and compute center.
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-1 text-sm">
              <li>Multiple GPU Types B200, A600, H100, 5090</li>
              <li>High-Performance Compute Center</li>
              <li>One-Click Deployment System</li>
              <li>24/7 Enterprise Support</li>
            </ul>
          </div>
        </article>

        {/* Card 4 */}
        <article className="w-full sm:w-1/2 lg:w-1/3 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://storage.googleapis.com/a1aa/image/6c709e26-de7b-4d15-2380-5e6dc2a010b1.jpg"
            alt="Mumbai, India"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="font-semibold text-lg mb-2">Mumbai, India</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              Our Asia development center with dedicated GPU clusters and deployment infrastructure.
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-1 text-sm">
              <li>Multi-GPU Infrastructure</li>
              <li>High-RAM Compute Center</li>
              <li>Model Deployment System</li>
              <li>AI Research Lab</li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
};

export default GlobalPresence;
