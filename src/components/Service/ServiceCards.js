import React from 'react';

const services = [
  {
    icon: 'fas fa-server',
    title: 'Dedicated Servers',
    bg: 'bg-[#fff4f3]',
    buttonBg: 'bg-[#d9e1f2]',
    hoverBg: 'hover:bg-[#c3d0eb]',
    features: [
      'Custom hardware configurations',
      '24/7 technical support',
      'Guaranteed resources',
      'High availability options',
    ],
  },
  {
    icon: 'fas fa-cloud',
    title: 'On Demand Servers',
    bg: 'bg-[#d9e9ff]',
    buttonBg: 'bg-[#bcd9f9]',
    hoverBg: 'hover:bg-[#a4c9f7]',
    features: [
      'Instant deployment',
      'Flexible scaling',
      'Pay-as-you-go pricing',
      'Wide range of configurations',
    ],
  },
  {
    icon: 'fas fa-tools',
    title: 'Deployment Support',
    bg: 'bg-[#d6f9e6]',
    buttonBg: 'bg-[#bde9db]',
    hoverBg: 'hover:bg-[#a6d9c4]',
    features: [
      'Expert deployment assistance',
      'Configuration management',
      'Performance optimization',
      'Continuous monitoring',
    ],
  },
  {
    icon: 'fas fa-microchip',
    title: 'GPU Optimization',
    bg: 'bg-[#d0fbf6]',
    buttonBg: 'bg-[#a9e3e1]',
    points: [
      'Model performance analysis',
      'Hardware-specific optimization',
      'Throughput optimization',
      'Memory usage optimization',
    ],
  },
  {
    icon: 'fas fa-shopping-cart',
    title: 'GPU Procurement',
    bg: 'bg-[#ede6ff]',
    buttonBg: 'bg-[#c9d1f7]',
    points: [
      'Hardware consultation',
      'Competitive pricing',
      'Multiple vendor options',
      'Installation support',
    ],
  },
  {
    icon: 'fas fa-wrench',
    title: 'AI Infra Consulting',
    bg: 'bg-[#ffe9cc]',
    buttonBg: 'bg-[#d9d6cc]',
    points: [
      'Infrastructure assessment',
      'Customized solutions',
      'Scalability planning',
    ],
  },
];

const ServiceCards = () => {
  return (
    <div className="bg-white font-sans px-6 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className={`${service.bg} rounded-xl p-8`}>
            <div className="text-[#a349a4] text-3xl mb-6">
              <i className={service.icon}></i>
            </div>
            <h2 className="font-extrabold text-xl mb-4 text-[#111111]">{service.title}</h2>
            <p className="text-[#4a4a4a] mb-6 leading-relaxed">
              {service.title === 'Dedicated Servers' &&
                'High-performance dedicated servers tailored to your specific needs with guaranteed resources and optimal performance.'}
              {service.title === 'On Demand Servers' &&
                'Flexible server solutions that scale with your needs, available instantly with pay-as-you-go pricing.'}
              {service.title === 'Deployment Support' &&
                'End-to-end deployment support services to ensure smooth operation of your applications and infrastructure.'}
              {service.title === 'GPU Optimization' &&
                'Specialized GPU optimization services to maximize the performance of your AI and ML models.'}
              {service.title === 'GPU Procurement' &&
                'Hassle-free GPU procurement service to help you acquire the right hardware for your needs.'}
              {service.title === 'AI Infra Consulting' &&
                'Expert guidance on building and scaling your AI infrastructure. Get personalized solutions for your needs.'}
            </p>
            <ul className="text-[#4a4a4a] space-y-2 mb-10">
              {(service.features || service.points).map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#a349a4]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`w-full ${service.buttonBg} text-[#a349a4] font-semibold text-lg rounded-lg py-4 ${service.hoverBg} transition`}
            >
              Reach Out →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
