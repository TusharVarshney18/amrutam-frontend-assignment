// src/components/ingredient/IngredientTherapeutic.jsx

function IngredientTherapeutic({ uses = [] }) {
  if (!uses.length) return null;

  return (
    <section className="mt-12 max-w-6xl mx-auto px-4">
      <h2 className="text-lg md:text-xl font-semibold text-[#2E2F2E] mb-4">
        Therapeutic uses
      </h2>

      <div
        className="
          grid 
          grid-cols-2        
          sm:grid-cols-3     
          lg:grid-cols-5     
          gap-8
          place-items-center
        "
      >
        {uses.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-3 w-[120px]"
          >
            {/* CIRCLE ICON EXACTLY 84PX LIKE FIGMA */}
            <div
              className="
                w-[84px] h-[84px]
                flex items-center justify-center
              "
            >
              <img
                src={item.icon}
                alt={item.text}
                className="w-[80px] h-[auto] object-contain"
              />
            </div>

            {/* LABEL */}
            <p className="text-xs sm:text-sm font-medium text-[#2E2F2E] leading-tight">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IngredientTherapeutic;
