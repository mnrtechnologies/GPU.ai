import React from 'react';

const FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="relative font-sans rounded-xl h-[400px] w-full sm:w-[405px] overflow-hidden group">
      {/* Image */}
      <div className="relative w-full h-full">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Strong blackish at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        {/* Whitish at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
        {/* Soft white blur overall */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      {/* Text Content */}
      <div className="absolute mt-40 inset-0 z-20 p-8 flex flex-col justify-center text-white transition-all duration-500 group-hover:-translate-y-4">
        <h2 className="text-3xl font-extrabold mb-4">{title}</h2>
        <p className="text-base leading-relaxed max-w-xs">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
