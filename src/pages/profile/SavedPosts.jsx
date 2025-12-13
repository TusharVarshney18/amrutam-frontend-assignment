import QuestionCard from "../../components/forum/QuestionCard";
import { sampleQuestions } from "../../data/forumSample";
import SEO from "../../components/SEO";

export default function SavedPosts() {
  <SEO
    title="Saved Posts – Amrutam Forum"
    description="View your saved discussions and expert answers."
    canonical="https://yourwebsite.com/profile/saved-posts"
  />;

  const savedPosts = sampleQuestions.filter((q) => q.saves > 0);

  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-2 text-[#0C5C4C]">
        Saved Posts
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        Posts and resources you saved for later.
      </p>

      {/* Saved Posts List */}
      {savedPosts.length === 0 ? (
        <p className="text-gray-500 text-sm">You have no saved posts yet.</p>
      ) : (
        <div className="space-y-6">
          {savedPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-xl p-4 sm:p-6 bg-white shadow-sm"
            >
              <QuestionCard question={post} onAddReply={() => {}} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
