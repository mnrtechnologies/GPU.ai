import React from 'react';

const cards = [
  {
    icon: 'fas fa-brain',
    bg: 'bg-[#FDEDED]',
    hoverBorder: 'hover:border-[#E6D7D7]',
    title: 'Deep Learning Research',
    description:
      'Advanced research in neural architectures, optimization algorithms, and model scaling.',
  },
  {
    icon: 'fas fa-robot',
    bg: 'bg-[#D6E9FF]',
    hoverBorder: 'hover:border-[#7DA9E9]',
    title: 'AI Applications',
    description:
      'Developing practical applications in computer vision, NLP, and multimodal AI systems.',
  },
  {
    icon: 'fas fa-flask',
    bg: 'bg-[#D6FFE6]',
    hoverBorder: 'hover:border-[#00C67C]',
    title: 'Scientific Computing',
    description:
      'GPU-accelerated simulations for physics, chemistry, and biological systems research.',
  },
];

const InfoCards = () => {
  return (
    <div className="bg-white mt-9 font-mono py-12 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row gap-8 justify-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bg} rounded-2xl p-8 max-w-sm min-h-[260px] flex flex-col gap-6 transition-all duration-300 border border-transparent hover:shadow-lg ${card.hoverBorder}`}
        >
          <i className={`${card.icon} text-[#a349a4] text-4xl`}></i>
          <h2 className="font-extrabold text-xl text-[#000000]">{card.title}</h2>
          <p className="text-[#6B6B6B] text-base leading-relaxed">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
