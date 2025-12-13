import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductMainInfo({ product }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate(); // <-- Add this

  const increment = () => setQty((prev) => prev + 1);
  const decrement = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: qty,
      image: product.image,
    });

    // Redirect user to cart
    navigate("/cart");
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => {
      const starIndex = i + 1;
      if (rating >= starIndex)
        return <FaStar key={i} className="text-yellow-500" />;
      if (rating >= starIndex - 0.5)
        return <FaStarHalfAlt key={i} className="text-yellow-500" />;
      return <FaRegStar key={i} className="text-yellow-500" />;
    });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl mt-3 font-semibold font-[Poppins] leading-tight">
        {product.name}
      </h1>

      <div className="flex items-center gap-4 mt-3">
        <span className="font-semibold text-xl text-[#0C5C4C]">
          ₹{product.price}
        </span>
        <div className="flex items-center gap-2">
          <div className="flex">{renderStars(product.rating)}</div>
          <p className="text-sm text-gray-600">({product.reviews} reviews)</p>
        </div>
      </div>

      <div className="flex gap-2 mt-3">
        <button className="px-3 py-1 border rounded-full text-sm">
          {product.size}
        </button>
        <button className="px-3 py-1 border rounded-full text-sm">
          100 ml
        </button>
        <button className="px-3 py-1 border rounded-full text-sm bg-gray-200">
          Pack of 3
        </button>
      </div>

      <div className="flex items-center gap-3 mt-3">
        <div className="flex items-center border rounded-lg px-3 py-2 gap-6">
          <button onClick={decrement} className="text-xl font-semibold">
            −
          </button>
          <span className="text-lg font-medium">{qty}</span>
          <button onClick={increment} className="text-xl font-semibold">
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-[#3A643B] text-white px-6 py-3 rounded-lg font-semibold"
        >
          Add to cart
        </button>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed">
        {product.description}
      </p>
    </div>
  );
}

export default ProductMainInfo;
