import React from 'react';

const VisionPage = () => {
  return (
    <div className="bg-white font-sans p-6">
      <main
        className="max-w-7xl mx-auto rounded-2xl text-white p-10 md:p-16 space-y-8"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to right, #a349a4, #a349a4)`, 
          backgroundSize: '20px 20px, 100% 100%',
        }}
      >
        <section>
          <h1 className="text-4xl font-extrabold mb-4">Our Vision</h1>
          <p className="max-w-7xl text-base leading-relaxed">
            At NovaCore, we envision a future where AI infrastructure is not just a tool, but a catalyst for innovation. We're building the foundation that enables organizations to push the boundaries of what's possible with artificial intelligence.
          </p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
          <article className="bg-white/20 rounded-xl p-6">
            <h2 className="font-extrabold text-xl mb-2">Innovation First</h2>
            <p className="text-md leading-snug">
              Pushing the boundaries of what's possible with AI infrastructure, setting new industry standards through continuous innovation and research.
            </p>
          </article>
          <article className="bg-white/20 rounded-xl p-6">
            <h2 className="font-extrabold text-xl mb-2">Sustainable Growth</h2>
            <p className="text-md leading-snug">
              Building for the future with eco-friendly practices, ensuring our growth aligns with environmental responsibility and long-term sustainability.
            </p>
          </article>
          <article className="bg-white/20 rounded-xl p-6">
            <h2 className="font-extrabold text-xl mb-2">Global Impact</h2>
            <p className="text-md leading-snug">
              Creating a worldwide network that democratizes AI capabilities, making advanced technology accessible to organizations of all sizes.
            </p>
          </article>
          <article className="bg-white/20 rounded-xl p-6">
            <h2 className="font-extrabold text-xl mb-2">Customer Success</h2>
            <p className="text-md leading-snug">
              Dedicated to your growth with 24/7 support, comprehensive resources, and personalized solutions that drive measurable results.
            </p>
          </article>
          <article className="bg-white/20 rounded-xl p-6">
            <h2 className="font-extrabold text-xl mb-2">Security First</h2>
            <p className="text-md leading-snug">
              Implementing industry-leading security measures and compliance standards to protect your data and maintain trust in every interaction.
            </p>
          </article>
          <article className="bg-white/20 rounded-xl p-6">
            <h2 className="font-extrabold text-xl mb-2">Collaborative Excellence</h2>
            <p className="text-md leading-snug">
              Fostering partnerships and knowledge sharing within the AI community to accelerate technological advancement and innovation.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default VisionPage;
