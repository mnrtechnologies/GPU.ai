import React from "react";

const SmallFeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col h-full hover:border-2 hover:border-[#a349a4]">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover"
        />
      )}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallFeatureCard;
