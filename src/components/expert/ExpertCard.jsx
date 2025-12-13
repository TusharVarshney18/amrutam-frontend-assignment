function ExpertCard({ expert }) {
  return (
    <div
      className="
      bg-[#FFF4D8] rounded-[28px] shadow-sm overflow-hidden
      flex flex-col items-center
      w-[300px] sm:w-[260px] md:w-[280px] lg:w-[310px]
      min-h-[420px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[460px]
      px-4 pt-12 pb-0
      "
    >
      {/* IMAGE */}
      <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white mt-4">
        <img
          src={expert.image}
          alt={expert.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* RATING */}
      <div className="mt-2 bg-black text-white text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full">
        {expert.rating} ★
      </div>

      {/* NAME */}
      <h3 className="text-base sm:text-lg font-semibold mt-3 text-[#2E2F2E]">
        {expert.name}
      </h3>

      {/* ROLE */}
      <p className="text-xs sm:text-sm text-gray-600 mt-1 text-center px-2">
        {expert.role}
      </p>

      {/* EXPERIENCE */}
      <p className="flex items-center gap-1 text-xs sm:text-sm mt-2 text-[#2E2F2E]">
        🎓 {expert.experience}
      </p>

      {/* SPECIALITY */}
      <div className="text-[10px] sm:text-xs bg-[#E1E6D9] text-[#2E2F2E] px-3 py-1 rounded-xl mt-3">
        {expert.speciality}
      </div>

      {/* BUTTON */}
      <button className="mt-auto w-full bg-[#0C5C4C] text-white text-xs sm:text-sm font-semibold py-3 sm:py-4 rounded-b-[28px]">
        Book a session
      </button>
    </div>
  );
}

export default ExpertCard;
