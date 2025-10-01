import React, { useEffect, useState } from "react";
import Card from "../../Components/Eventcard/Eventcard";
import Modal from "../../Components/Modal/Modal";

function Events() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="pt-[70px] px-6">
      <h1 className="text-2xl font-bold mb-6 pt-20
      ">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <Card
            key={item.id}
            product={item}
            onClick={() => setSelectedProduct(item)}
          />
        ))}
      </div>

      <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default Events;
