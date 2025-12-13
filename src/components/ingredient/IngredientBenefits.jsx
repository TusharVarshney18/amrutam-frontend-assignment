function IngredientBenefits({ benefits = [] }) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-base md:text-lg font-semibold text-[#2E2F2E] mb-4">
        Benefits
      </h2>

      {/* Mobile: 2 per row | Desktop: stays same */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="
              flex flex-col sm:flex-row
              items-center sm:items-start
              text-center sm:text-left
              gap-3 px-4 py-4 rounded-lg

              bg-[#FFF3D6] border border-[#E7D0A7] 
              sm:bg-transparent sm:border-none
            "
          >
            {/* ICON */}
            <img
              src={item.icon}
              alt="benefit icon"
              className="w-12 h-12 object-contain"
            />

            {/* TEXT */}
            <p className="text-xs sm:text-sm md:text-[15px] font-medium text-[#2E2F2E] leading-snug">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IngredientBenefits;
