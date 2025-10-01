import React from "react";

function Card({ product, onClick }) {
  return (
    <div
      className="border rounded-lg p-4 shadow cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-4"
      />
      <h2 className="font-semibold text-lg">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
    </div>
  );
}

export default Card;
