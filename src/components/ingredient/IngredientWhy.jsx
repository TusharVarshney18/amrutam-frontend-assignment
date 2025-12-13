function IngredientWhy({ name, why = [] }) {
  if (!why || why.length === 0) return null;

  return (
    <section className="mt-10 max-w-3xl">
      <h2 className="text-lg font-semibold text-[#2E2F2E] mb-4">Why {name}?</h2>

      <ul className="space-y-3">
        {why.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm text-[#4C4C4C]"
          >
            {/* Checkbox Icon */}
            <span className="flex-shrink-0 mt-[2px] w-5 h-5 rounded-md border border-[#3A643B] bg-[#E1EED5] flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3A643B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>

            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default IngredientWhy;
