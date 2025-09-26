import React from "react";

interface CardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ number, icon, title, description, buttonText }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 relative hover:shadow-lg transition">
      {/* Top Section: Icon + Number */}
      <div className="flex items-center justify-between mb-4">
        {/* Icon */}
        <div className="text-yellow-600 text-3xl">{icon}</div>
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
      <button className="mt-5 bg-yellow-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-yellow-700 transition">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
