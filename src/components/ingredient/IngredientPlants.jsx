function IngredientPlants({ plantParts = [] }) {
  if (!plantParts.length) return null;

  return (
    <section className="mt-14 max-w-5xl mx-auto px-4">
      <h2 className="text-lg md:text-xl font-semibold text-[#2E2F2E] mb-6">
        Plant parts and its purpose
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {plantParts.map((item, idx) => {
          const isTriangleItem = (idx + 1) % 3 === 0;

          return (
            <div
              key={idx}
              className={`
                flex flex-col items-center gap-3

                /* MOBILE triangle centering */
                ${isTriangleItem ? "col-span-2 mx-auto sm:col-span-2" : ""}

                /* DESKTOP: reset to normal layout */
                lg:col-span-1 lg:mx-0
              `}
            >
              {/* ICON */}
              {item.icon && (
                <img
                  src={item.icon}
                  alt={item.part}
                  className="w-16 h-16 object-contain"
                />
              )}

              {/* PART NAME */}
              <p className="text-base font-semibold text-[#2E2F2E]">
                {item.part}
              </p>

              {/* PURPOSE */}
              <p className="text-sm text-[#4C4C4C] leading-relaxed max-w-[220px]">
                {item.purpose}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default IngredientPlants;
