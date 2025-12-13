import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import { products } from "../data/products"; // your local data file

function ProductSection() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <div className="max-w-[1440px] bg-[#FFF7E2] mx-auto px-4 py-4">
      <CategoryFilter selected={selected} setSelected={setSelected} />

      <h2 className="text-xl font-semibold text-[#0C5C4C] mb-6 mt-4 text-center md:text-left md:pl-20">
        Summer Collection
      </h2>

      <div className="max-w-[1100px] mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
