import { useState } from "react";
import AskQuestionModal from "../components/forum/AskQuestionModal";
import QuestionCard from "../components/forum/QuestionCard";
import { sampleQuestions } from "../data/forumSample";
import ForumFilter from "../components/forum/ForumFilter";
import CategorySelectorModal from "../components/forum/CategorySelectorModal";
import { ForumHero } from "../components/forum/ForumHeader";
import SEO from "../components/SEO";

export default function ForumPage() {
  const [tab, setTab] = useState("questions");
  const [showModal, setShowModal] = useState(false);
  const [showInline, setShowInline] = useState(false);
  const [questions, setQuestions] = useState(sampleQuestions);
  const [filter, setFilter] = useState("recent");
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  <SEO
    title="Ayurveda Forum – Ask Questions & Get Expert Answers"
    description="Join the Ayurveda community. Ask questions, share thoughts, and get expert opinions."
    canonical="https://yourwebsite.com/forum"
  />;

  function addQuestion(newQ) {
    setQuestions((s) => [newQ, ...s]);
    setShowModal(false);
    setShowInline(false);
  }

  // sorting logic
  const sortedQuestions = [...questions].sort((a, b) => {
    if (filter === "liked") return (b.likes || 0) - (a.likes || 0);
    if (filter === "commented") return b.replies.length - a.replies.length;
    if (filter === "oldest")
      return new Date(a.createdAt) - new Date(b.createdAt);
    return new Date(b.createdAt) - new Date(a.createdAt); // recent default
  });

  return (
    <>
      <ForumHero />
      <div className="min-h-screen flex justify-center py-6 sm:py-10 px-3">
        <div className="w-full max-w-3xl bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
          {/* TABS */}
          <div className="px-4 sm:px-6 pt-6">
            <div className="flex gap-6 border-b pb-2">
              <button
                onClick={() => setTab("questions")}
                className={`pb-2 ${
                  tab === "questions"
                    ? "text-[#0C5C4C] font-semibold border-b-2 border-[#0C5C4C]"
                    : "text-gray-600"
                }`}
              >
                Questions
              </button>

              <button
                onClick={() => setTab("thoughts")}
                className={`pb-2 ${
                  tab === "thoughts"
                    ? "text-[#0C5C4C] font-semibold border-b-2 border-[#0C5C4C]"
                    : "text-gray-600"
                }`}
              >
                Thoughts
              </button>
            </div>

            {/* SEARCH + FILTER */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-6">
              <div
                onClick={() => setShowCategoryModal(true)}
                className="flex-1 rounded-lg border border-gray-200 px-4 py-3 shadow-sm cursor-pointer text-gray-500"
              >
                Search questions or concerns (e.g. Hair Fall)
              </div>

              {/* Filter Button */}
              <ForumFilter filter={filter} setFilter={setFilter} />
            </div>

            {/* PROFILE + ASK BUTTONS */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-4">
              {/* Profile */}
              <div className="flex items-center gap-3">
                <a
                  href="/profile"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <img
                    src="/forum/priya.png"
                    className="w-10 h-10 rounded-full"
                    alt="profile"
                  />
                  <span className="text-sm font-medium text-[#0C5C4C]">
                    Priya Singh
                  </span>
                </a>
              </div>

              {/* Right Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(true)}
                  className="text-sm bg-[#0C5C4C] text-white px-4 py-2 rounded-lg"
                >
                  Ask Question
                </button>

                <a
                  href="/forum/new"
                  className="text-sm px-4 py-2 border rounded-lg w-full sm:w-auto text-center"
                >
                  Open New Page
                </a>
              </div>
            </div>

            {/* Inline ask (optional section placeholder) */}
          </div>

          {/* QUESTION LIST */}
          <div className="px-4 sm:px-6 py-6">
            {sortedQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                onAddReply={(reply) => {
                  setQuestions((arr) =>
                    arr.map((x) =>
                      x.id === q.id
                        ? { ...x, replies: [...x.replies, reply] }
                        : x
                    )
                  );
                }}
              />
            ))}
          </div>
        </div>

        {/* MODAL */}
        {showCategoryModal && (
          <CategorySelectorModal
            onClose={() => setShowCategoryModal(false)}
            onSelectSubmit={(concern) => {
              console.log("Concern sent:", concern);
            }}
          />
        )}

        {showModal && (
          <AskQuestionModal
            onClose={() => setShowModal(false)}
            onSubmit={addQuestion}
          />
        )}
      </div>
    </>
  );
}
