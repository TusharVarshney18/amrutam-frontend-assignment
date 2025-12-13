function IngredientGeoLocations({ geo = [] }) {
  if (!geo.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-base md:text-lg font-semibold text-[#2E2F2E] mb-3">
        Geographical Locations
      </h2>

      <div className="flex flex-wrap gap-3">
        {geo.map((location, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-sm md:text-base text-[#2E2F2E]"
          >
            {/* ICON */}
            <img
              src="/location.svg"
              alt="location icon"
              className="w-4 h-4 object-contain"
            />

            {/* LOCATION TEXT */}
            <span>{location}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IngredientGeoLocations;
