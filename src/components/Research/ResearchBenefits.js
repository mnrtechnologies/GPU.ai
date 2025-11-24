import React from 'react';

const benefits = [
  {
    icon: 'fas fa-server',
    title: 'Priority GPU Access',
    description: 'Dedicated access to B200s, B200 and H100 GPUs with priority scheduling.',
  },
  {
    icon: 'fas fa-users',
    title: 'Research Network',
    description: 'Connect with leading researchers and institutions worldwide.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Academic Support',
    description: 'Technical guidance and mentorship from experienced researchers.',
  },
  {
    icon: 'fas fa-certificate',
    title: 'Publication Support',
    description: 'Resources and support for research paper publication.',
  },
];

const ResearchBenefits = () => {
  return (
    <div className="bg-white mt-9 font-mono">
      <div className="max-w-7xl mx-auto p-10 bg-gray-100 rounded-3xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight tracking-wide">
            Research Program<br />Benefits
          </h1>
          <p className="mt-2 text-gray-600 text-sm font-mono">
            Comprehensive support for your research journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6">
              <div className="text-[#a349a4] mb-4">
                <i className={`${benefit.icon} fa-lg`}></i>
              </div>
              <h3 className="font-mono font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="font-mono text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchBenefits;
