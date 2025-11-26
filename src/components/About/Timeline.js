import React from 'react';

const timelineData = [
  {
    year: '2024',
    title: 'Industry Leadership',
    content:
      'Became the leading provider of AI infrastructure solutions globally, serving over 500 enterprise clients. Our innovative approach to AI infrastructure has set new industry standards for performance and reliability.',
    bgColor: 'bg-red-50',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    content:
      'Expanded our presence to 12 data centers across 3 continents, bringing low-latency AI infrastructure to organizations worldwide. Established regional headquarters in Singapore and Dublin to better serve our global customer base.',
    bgColor: 'bg-blue-50',
  },
  {
    year: '2022',
    title: 'Platform Evolution',
    content:
      'Launched our next-generation AI platform with advanced features like auto-scaling, real-time monitoring, and enhanced security protocols. Achieved ISO 27001 certification and SOC 2 Type II compliance.',
    bgColor: 'bg-red-50',
  },
  {
    year: '2021',
    title: 'First Data Center',
    content:
      'Launched our first state-of-the-art data center in Silicon Valley, featuring cutting-edge GPU clusters and innovative cooling systems. Established our 24/7 support center to ensure maximum uptime.',
    bgColor: 'bg-blue-50',
  },
  {
    year: '2020',
    title: 'Foundation',
    content:
      'NovaCore was founded with a vision to democratize AI infrastructure. Started with a team of 10 passionate engineers and researchers committed to making advanced AI capabilities accessible to organizations of all sizes.',
    bgColor: 'bg-red-50',
  },
];

const Timeline = () => {
  return (
    <div className="relative font-sans mx-auto w-full max-w-3xl py-20">
      {/* Intro Text */}
      <div className="mb-24 text-center max-w-2xl mx-auto">
        <h4 className="text-5xl font-bold mb-4">Our Journey</h4>
        <p className="text-gray-600 text-lg">
          From humble beginnings to becoming a global leader in AI infrastructure, every milestone has shaped our unwavering commitment to innovation and excellence.
        </p>
      </div>

      {/* Vertical Line */}
      <div
        className="absolute left-1/2 bg-blue-100 -translate-x-1/2"
        style={{
          top: '20rem', 
          bottom: '12rem',
          width: '4px',
        }}
      />

      {/* Timeline Items */}
      {timelineData.map((item, index) => (
        <div key={index} className="mb-28 flex justify-center relative">
          {/* Blue Circle aligned with title */}
          <div className="absolute left-[calc(29%-10rem)] top-7 z-20">
            <div className="h-6 w-6 rounded-full bg-white border-8 border-[#A800FF]" />
          </div>

          {/* Content Box */}
          <div
            className={`relative w-[80%] rounded-2xl p-6 shadow-md ${item.bgColor}`}
          >
            {/* Year Tag */}
            <div className="absolute -top-10 left-[50%] -translate-x-1/2 bg-[#A800FF] text-white px-4 py-1 rounded-full text-lg  font-semibold shadow-md">
              {item.year}
            </div>
            <h3 className="text-xl font-bold font-sans mb-2">{item.title}</h3>
            <p className="text-md font-sans text-gray-700">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
