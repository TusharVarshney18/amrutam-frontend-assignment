import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import SmallProductCard from "./IngredientCard";

function IngredientRelatedProducts({ products, addToCart, name }) {
  if (!products.length) return null;

  const [open, setOpen] = useState(false);

  return (
    <section className="mt-6">
      {/* HEADER / TOGGLE */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-[#F6F6F0] px-4 py-3 rounded-lg border border-[#D6D9C6]"
      >
        <h2 className="text-base md:text-lg font-semibold text-[#2E2F2E]">
          Products with "{name}" as primary ingredient
        </h2>

        {open ? (
          <FiChevronUp size={20} className="text-[#2E2F2E]" />
        ) : (
          <FiChevronDown size={20} className="text-[#2E2F2E]" />
        )}
      </button>

      {/* COLLAPSIBLE CONTENT */}
      {open && (
        <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <SmallProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default IngredientRelatedProducts;
