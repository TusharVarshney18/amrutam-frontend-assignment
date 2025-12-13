function IngredientFormulations({ formulations = [] }) {
  if (!formulations.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-base md:text-lg font-semibold text-[#2E2F2E] mb-3">
        Important formulations
      </h2>

      {/* MOBILE → 2 cards in a row
          DESKTOP → keep your original flex-wrap row layout */}
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
        {formulations.map((item, idx) => (
          <div
            key={idx}
            className="
              flex flex-col sm:flex-row
              items-center sm:items-center
              text-center sm:text-left
              gap-2 sm:gap-3
              px-4 py-4
              rounded-lg
              
              bg-[#FFF3D6] border border-[#E7D0A7] 
              sm:bg-transparent sm:border-none
              hover:shadow transition
            "
          >
            {/* ICON */}
            {item.icon && (
              <img
                src={item.icon}
                alt={item.text}
                className="w-12 h-12 object-contain"
              />
            )}

            {/* TEXT */}
            <span className="text-xs sm:text-sm md:text-base font-medium text-[#2E2F2E] leading-snug">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IngredientFormulations;
