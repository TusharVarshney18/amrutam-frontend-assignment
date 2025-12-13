import { memo } from "react";

function ProductInstructions({ instructions = "" }) {
  if (!instructions) return null;

  return (
    <section className="max-w-6xl mx-auto mt-6 px-4">
      <h2 className="text-xl font-semibold text-black mb-3">
        Product Instructions
      </h2>

      <div className="p-4 bg-[#FDEAD2] border border-[#F3DFBA] rounded-xl shadow-sm">
        <p className="text-base text-[#1A1A1ACC] font-[poppins] leading-relaxed">
          {instructions}
        </p>
      </div>
    </section>
  );
}

export default memo(ProductInstructions);
