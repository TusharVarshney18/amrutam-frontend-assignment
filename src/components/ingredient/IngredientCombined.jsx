function IngredientBestCombined({ text = "" }) {
  if (!text) return null;

  return (
    <section className="mt-10">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#000000] mb-3">
        Best combined with
      </h2>

      {/* Text */}
      <p className="text-sm sm:text-[15px] md:text-base text-[#4C4C4C] leading-relaxed">
        {text}
      </p>
    </section>
  );
}

export default IngredientBestCombined;
