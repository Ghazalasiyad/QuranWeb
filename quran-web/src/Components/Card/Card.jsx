import React from "react";

const Card = ({ number, icon, title, description, buttonText }) => {
  return (
    <div className="bg-white shadow-2xl rounded-4xl p-6 relative hover:shadow-lg transitionw-[300px] h-[300px] m-4 justify-center">
      {/* Top Section: Icon + Number */}
      <div className="flex items-center justify-between mb-4">
        {/* Render the image properly */}
        <img src={icon} alt={title} className="w-12 h-12 object-contain" />

        {/* Light Number */}
        <span className="text-5xl font-bold text-gray-200 absolute top-4 right-6">
          {number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mt-3">{description}</p>

      {/* Button */}
      <button className="mt-5  text-yellow-600  font-medium ">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
