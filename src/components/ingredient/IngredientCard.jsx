import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function SmallProductCard({ product, addToCart }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="flex items-center gap-4 bg-[#FFF9E9] hover:shadow-md border border-[#D6D9C6] rounded-xl p-4 cursor-pointer w-full transition"
    >
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-[120px] h-[120px] rounded-xl object-cover"
      />

      {/* DETAILS */}
      <div className="flex-1">
        <p className="text-sm font-medium text-[#2E2F2E] leading-tight">
          {product.name}
        </p>
        <p className="text-[#0C5C4C] font-semibold text-sm mt-1">
          ₹{product.price}
        </p>
      </div>

      {/* ADD BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0C5C4C] text-white hover:bg-[#084437] transition"
      >
        <FiPlus size={18} />
      </button>
    </div>
  );
}

export default SmallProductCard;
