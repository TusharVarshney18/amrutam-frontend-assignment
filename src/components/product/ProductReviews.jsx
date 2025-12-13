import { FaStar } from "react-icons/fa";

function ProductReviews({ rating, reviews, reviewsList }) {
  return (
    <section className="mt-12">
      {/* Center heading */}
      <h2 className="text-xl font-semibold text-[#2E2F2E] text-center mb-6">
        Reviews and Ratings
      </h2>

      {/* Top Layout: Rating left, buttons right */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* RATING BOX */}
        <div className="bg-[#FDEAD2] border border-[#F3DFBA] rounded-xl p-6 w-full md:w-[280px]">
          <p className="text-4xl font-bold text-[#2E2F2E]">
            {rating.toFixed(1)}
          </p>

          <div className="flex text-yellow-500 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="text-sm text-[#2E2F2E] mt-1">
            Based on {reviews} reviews
          </p>
        </div>

        {/* BUTTON GROUP */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-6 text-sm text-[#0C5C4C] border border-[#00000040] rounded-xl bg-[#FFF7E2] hover:bg-[#f3e7c8] transition shadow-sm">
            See More Reviews
          </button>

          <button className="px-6 py-6 text-sm text-[#0C5C4C] border border-[#00000040] rounded-xl bg-[#FFF7E2] hover:bg-[#f3e7c8] transition shadow-sm">
            Write a review
          </button>
        </div>
      </div>

      {/* REVIEW CARDS */}
      <div className="mt-6 space-y-4">
        {reviewsList.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 p-4 bg-[#FDEAD2] rounded-xl border border-[#F3DFBA] flex-col sm:flex-row"
          >
            {/* Avatar */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-[#0C5C4C] font-bold">
              {item.initials}
            </div>

            <div>
              <p className="text-sm text-[#2E2F2E] leading-relaxed">
                {item.review}
              </p>

              <div className="flex flex-wrap gap-2 items-center text-xs mt-1 text-gray-600">
                <span>{item.user}</span>
                <span>•</span>
                <span>{item.date}</span>
                <span className="text-yellow-500 flex">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductReviews;
