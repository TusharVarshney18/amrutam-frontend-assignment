function ProductUsage({ howToUse = "" }) {
  if (!howToUse) return null;

  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-xl font-bold text-[#2E2F2E]  mb-3">How to Use</h2>

      <div className="p-4 bg-[#FDEAD2] border border-[#F3DFBA] rounded-xl shadow-sm">
        <p className="text-sm text-[#1A1A1ACC] leading-relaxed">{howToUse}</p>
      </div>
    </section>
  );
}

export default ProductUsage;
