export function ForumHero() {
  return (
    <div className="relative w-full min-h-[180px] sm:h-[220px] bg-[#EAF2EA] overflow-hidden flex items-center justify-center px-4 py-10">
      {/* BACKGROUND CIRCLES */}
      <div className="absolute -top-10 left-8 sm:left-1/4 w-24 h-24 sm:w-36 sm:h-32 bg-[#D6EDD6] rounded-full opacity-60"></div>
      <div className="absolute -top-10 right-8 sm:right-1/4 w-24 h-24 sm:w-36 sm:h-32 bg-[#D6EDD6] rounded-full opacity-60"></div>

      <div className="absolute -bottom-10 left-12 sm:left-1/3 w-28 h-28 sm:w-36 sm:h-36 bg-[#D6EDD6] rounded-full opacity-60"></div>
      <div className="absolute -bottom-10 right-12 sm:right-1/3 w-28 h-28 sm:w-36 sm:h-36 bg-[#D6EDD6] rounded-full opacity-60"></div>

      {/* CENTER HEADING */}
      <h1 className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-[#0C5C4C] max-w-[90%]">
        Find Discussions Related To Ayurveda Here
      </h1>
    </div>
  );
}
