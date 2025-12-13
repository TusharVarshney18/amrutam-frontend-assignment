import { products } from "../../data/products";
import ProductCard from "../ProductCard";

function RelatedProducts({ currentId, title, relatedProducts }) {
  // pick related products: either from ids or fallback = all except current
  const allRelated =
    relatedProducts && relatedProducts.length
      ? products.filter((p) => relatedProducts.includes(p.id))
      : products.filter((p) => p.id !== currentId);

  // ensure only 3 are shown
  const visibleRelated = allRelated.slice(0, 3);

  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold text-center text-[#2E2F2E] mb-6">
        {title || "People have also bought"}
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleRelated.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
