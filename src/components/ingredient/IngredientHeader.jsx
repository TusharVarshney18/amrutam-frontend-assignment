function IngredientHeader({ ingredient }) {
  return (
    <div className="space-y-3">
      {/* Ingredient Name */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#161616] leading-snug">
        {ingredient.name}
      </h1>

      {/* Sanskrit Name */}
      {ingredient.sanskrit && (
        <p className="text-base sm:text-lg md:text-xl font-semibold text-[#1A6634]">
          {ingredient.sanskrit}
        </p>
      )}

      {/* Description */}
      {ingredient.description && (
        <p className="text-sm sm:text-[15px] md:text-base text-[#4C4C4C] leading-relaxed">
          {ingredient.description}
        </p>
      )}
    </div>
  );
}

export default IngredientHeader;
