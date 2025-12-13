import { useState } from "react";

const concernsList = [
  "Hair fall",
  "Digestion",
  "Obesity",
  "Anxiety",
  "Hypertension",
  "Allergies",
  "Anemia",
  "Sleep disorders",
  "Influenza",
  "Acne",
  "Sinusitis",
  "Infertility",
  "General",
];

export default function CategorySelectorModal({ onClose, onSelectSubmit }) {
  const [search, setSearch] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filtered = concernsList.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  function handleSubmit() {
    if (!search.trim()) return;

    // Simulate sending to backend / nodemailer
    console.log("Concern Submitted:", search);

    setSubmitted(true);

    setTimeout(() => {
      onSelectSubmit(search);
      onClose();
    }, 1500);
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-xl rounded-xl p-6 relative shadow-lg">
        {/* CLOSE BUTTON */}
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">
          ✕
        </button>

        {/* SUCCESS MESSAGE */}
        {submitted ? (
          <div className="text-center py-10">
            <h2 className="text-lg font-semibold text-[#0C5C4C]">
              Your concern has been sent for review
            </h2>
            <p className="text-gray-500 mt-2">It will be added soon.</p>
          </div>
        ) : (
          <>
            {/* HEADER */}
            <h2 className="text-lg font-semibold text-center mb-1">
              Select or Search Concern
            </h2>
            <p className="text-center text-sm text-gray-500 mb-4">
              Helps us categorize your issue better
            </p>

            {/* SEARCH BAR */}
            <div className="relative mb-4">
              <img
                src="/forum/search.svg"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 opacity-70"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for concern"
                className="w-full border px-10 py-3 rounded-lg shadow-sm outline-none focus:ring-1 focus:ring-[#0C5C4C]"
              />
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mb-6">
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSearch(item)} // fill in search bar
                    className="px-4 py-2 bg-[#E6F3E6] border border-[#C5DEC5] rounded-lg hover:bg-[#d5ead5] text-sm"
                  >
                    {item}
                  </button>
                ))
              ) : (
                <span className="text-sm text-gray-400">
                  No matching concerns
                </span>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex justify-between items-center">
              {/* SKIP */}
              <button onClick={onClose} className="text-[#0C5C4C] font-medium">
                Skip
              </button>

              {/* SUBMIT */}
              <button
                onClick={handleSubmit}
                className="bg-[#0C5C4C] text-white px-6 py-2 rounded-lg font-medium disabled:bg-gray-300"
                disabled={!search.trim()}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
