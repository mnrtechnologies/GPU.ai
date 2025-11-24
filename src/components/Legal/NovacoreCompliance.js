import React from 'react';

const NovacoreCompliance = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 mt-10 space-y-10 font-mono">
      {/* AI Technology Compliance */}
      <section className="bg-gray-200 rounded-lg p-6">
        <h2 className="text-gray-900 font-semibold text-2xl mb-6 select-none flex items-center gap-2">
          <img
            src="https://storage.googleapis.com/a1aa/image/86050b92-9bb1-48c0-7939-27936b48ac66.jpg"
            alt="Purple brain icon representing AI technology"
            className="w-7 h-7"
          />
          AI Technology Compliance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cards */}
          {[
            {
              title: 'Model Training Standards',
              color: 'text-[#6B63D6]',
              bg: 'bg-[#E8EEFF]',
              points: [
                'Ethically sourced training data',
                'Regular bias auditing and mitigation',
                'Transparent model documentation',
                'Performance monitoring and validation',
              ],
            },
            {
              title: 'Compliance Framework',
              color: 'text-[#6B63D6]',
              bg: 'bg-[#E8EEFF]',
              points: [
                'AI Ethics Board oversight',
                'Regular compliance audits',
                'Industry standard adherence',
                'Transparent reporting',
              ],
            },
            {
              title: 'AI Safety Measures',
              color: 'text-[#9B6BD6]',
              bg: 'bg-[#F7EEFF]',
              points: [
                'Robust testing protocols',
                'Safety-first development approach',
                'Regular security assessments',
                'Controlled deployment processes',
              ],
            },
            {
              title: 'Environmental Impact',
              color: 'text-[#3B7D3B]',
              bg: 'bg-[#EEFFF3]',
              points: [
                'Carbon-neutral infrastructure',
                'Energy efficiency monitoring',
                'Sustainable computing practices',
                'Environmental impact reports',
              ],
            },
          ].map((item, idx) => (
            <div key={idx} className={`${item.bg} rounded-md p-4`}>
              <h3 className={`${item.color} font-semibold text-xl mb-2 select-none`}>
                {item.title}
              </h3>
              <ul className="text-md text-gray-700 list-disc list-inside space-y-1">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Requirements & Responsibilities */}
      <section className="bg-gray-200 rounded-lg p-6">
        <h2 className="text-gray-900 font-semibold text-2xl mb-6 select-none flex items-center gap-2">
          <i className="fas fa-wrench text-gray-700"></i>
          Technical Requirements &amp; Responsibilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'API Integration',
              icon: 'fa-code',
              color: 'text-[#3B82F6]',
              points: [
                'Secure API key management',
                'Rate limiting compliance',
                'Error handling requirements',
                'Version compatibility',
              ],
            },
            {
              title: 'Infrastructure',
              icon: 'fa-server',
              color: 'text-[#22C55E]',
              points: [
                'System requirements',
                'Network security',
                'Backup procedures',
                'Monitoring setup',
              ],
            },
            {
              title: 'Performance',
              icon: 'fa-chart-line',
              color: 'text-[#A78BFA]',
              points: [
                'SLA commitments',
                'Resource usage limits',
                'Scaling guidelines',
                'Performance metrics',
              ],
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-md p-4">
              <h3 className={`${item.color} font-semibold text-xl mb-2 select-none flex items-center gap-1`}>
                <i className={`fas ${item.icon}`}></i>
                {item.title}
              </h3>
              <ul className="text-md text-gray-700 list-disc list-inside space-y-1">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default NovacoreCompliance;
