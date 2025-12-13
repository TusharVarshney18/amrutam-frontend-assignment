import { useRef, useState, useEffect } from "react";
import { experts } from "../../data/expert";
import ExpertCard from "./ExpertCard";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function ExpertsCarousel() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 320;

  const scrollToIndex = (index) => {
    setActiveIndex(index);
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    const newIndex = activeIndex === 0 ? experts.length - 1 : activeIndex - 1;
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = activeIndex === experts.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(newIndex);
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(scrollRight, 3000); // every 3 seconds
    return () => clearInterval(interval);
  });

  // Update active index when scrolling manually
  useEffect(() => {
    const handleScroll = () => {
      const index = Math.round(sliderRef.current.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto px-4 text-center mt-16 py-16 bg-white">
      <h2 className="text-2xl font-semibold text-[#2E2F2E] mb-10">
        Meet our Experts
      </h2>

      <div className="relative flex items-center justify-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 bg-white border rounded-full p-3 shadow-sm hidden md:block"
        >
          <IoChevronBack size={22} />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto px-6 hide-scrollbar snap-x snap-mandatory scroll-smooth justify-center"
        >
          {experts.map((expert) => (
            <div key={expert.id} className="snap-center w-[300px]">
              <ExpertCard expert={expert} />
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 bg-white border rounded-full p-3 shadow-sm hidden md:block"
        >
          <IoChevronForward size={22} />
        </button>
      </div>

      {/* DOT CONTROLS */}
      <div className="flex justify-center gap-2 mt-6">
        {experts.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === i ? "bg-[#0C5C4C] scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* CTA */}
      <button className="mt-6 px-6 py-3 border text-sm rounded-xl border-[#00000040] bg-white flex items-center gap-2 mx-auto">
        Find more experts →
      </button>
    </section>
  );
}

export default ExpertsCarousel;
