import ProductCard from "../ProductCard";

function RelatedSlider({ items = [] }) {
  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-xl font-semibold text-[#0C5C4C] mb-4">
        Similar Products
      </h2>

      <div className="flex overflow-x-scroll gap-4 pb-4 scroll-hide">
        {items.map((p) => (
          <div key={p.id} className="min-w-[250px]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RelatedSlider;
