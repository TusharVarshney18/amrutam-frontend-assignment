import { FaStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="p-3 cursor-pointer hover:shadow-lg transition border rounded-xl
                 w-full "
    >
      {/* PRODUCT IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl w-full h-[300px] sm:h-[320px] md:h-[360px] object-cover"
      />

      {/* NAME */}
      <p className="text-sm sm:text-base font-medium text-gray-800 mt-2 leading-tight">
        {product.name}
      </p>

      {/* PRICE + SIZE */}
      <p className="text-[#0C5C4C] font-semibold mt-1 text-sm sm:text-base">
        ₹{product.price}
        <span className="text-gray-500 text-xs sm:text-sm font-normal">
          {" "}
          • {product.size}
        </span>
      </p>

      {/* RATING */}
      <div className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm mt-1">
        <FaStar />
        <span className="text-gray-600">({product.reviews})</span>
      </div>

      {/* ADD BUTTON */}
      <button
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-center w-7 h-7 bg-[#0C5C4C] text-white
                   rounded-full mt-2 ml-auto"
      >
        <FiPlus size={14} />
      </button>
    </div>
  );
}

export default ProductCard;
