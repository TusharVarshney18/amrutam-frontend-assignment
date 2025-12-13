function ProductHighlights({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl text-[#2E2F2E]  font-bold mb-4">
        Product Highlights
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#FDEAD2] border border-[#F3DFBA] rounded-xl p-4 shadow-sm flex flex-col items-center text-center hover:shadow-md transition"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-12 w-12 object-contain mb-3"
            />
            <p className="text-sm text-[#2E2F2E] font-medium font-[nunito] leading-tight">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductHighlights;
