// src/components/ingredient/IngredientPrakriti.jsx
function IngredientPrakriti({ prakriti }) {
  if (!prakriti) return null;

  const items = [
    { key: "vata", title: "Vata" },
    { key: "kapha", title: "Kapha" },
    { key: "pitta", title: "Pitta" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
      <h2 className="text-lg md:text-xl font-semibold text-[#2E2F2E] mb-6">
        Prakriti Impact
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {items.map(({ key, title }) => {
          const data = prakriti[key];
          if (!data) return null;

          return (
            <div
              key={key}
              className="flex flex-col items-center text-center px-4"
            >
              {/* ICON */}
              <div className="flex items-center justify-center">
                <img
                  src={data.icon}
                  alt={`${title} icon`}
                  className="w-20 h-20 md:w-28 md:h-28 object-contain"
                />
              </div>

              {/* TITLE */}
              <p className="mt-4 text-base md:text-lg font-semibold text-[#2E2F2E]">
                {title}
              </p>

              {/* NOTE */}
              {data.note && (
                <p className="text-xs md:text-sm text-[#555] mt-2 max-w-[220px]">
                  {data.note}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default IngredientPrakriti;
