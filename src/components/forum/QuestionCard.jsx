import { useState } from "react";
import ReplyCard from "./ReplyCard";

export default function QuestionCard({ question, onAddReply }) {
  const [showReplies, setShowReplies] = useState(false);

  function handleAddReply(replyText) {
    const reply = {
      id: Date.now().toString(),
      author: { name: "Dr. Mathew Adams", avatar: "/doctor-avatar.png" },
      body: replyText,
      createdAt: new Date().toISOString(),
      likes: 0,
    };
    onAddReply(reply);
  }

  return (
    <div className="border-b py-6">
      <div className="flex items-start gap-4">
        {/* AVATAR */}
        <img
          src={question.author.avatar || "/anon.png"}
          alt="avatar"
          className="w-12 h-12 rounded-full flex-shrink-0"
        />

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1">
          {/* NAME + DATE + MENU */}
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold text-[#0C5C4C]">
                {question.author.name || "Anonymous"}
              </div>
              <div className="text-xs text-gray-500">
                {new Date(question.createdAt).toLocaleDateString()}
              </div>
            </div>

            {/* MENU ICON */}
            <img
              src="/forum/option.svg"
              alt="menu"
              className="w-4 h-4 opacity-70 cursor-pointer"
            />
          </div>

          {/* QUESTION TEXT */}
          <p className="mt-3 text-sm md:text-base text-[#111] leading-relaxed">
            {question.title}
          </p>

          {/* REPLY SUMMARY ROW */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <div>Replies • {question.replies.length}</div>

            {question.replies.length > 0 && (
              <button
                onClick={() => setShowReplies((s) => !s)}
                className="text-sm text-[#0C5C4C]"
              >
                {showReplies
                  ? "Hide Replies"
                  : `View All ${question.replies.length} Replies`}
              </button>
            )}
          </div>

          {/* REPLY LIST */}
          {showReplies &&
            question.replies.map((reply) => (
              <div key={reply.id} className="mt-4">
                <ReplyCard reply={reply} />
              </div>
            ))}

          {/* ACTION ROW */}
          <div
            className="
    mt-4 border-t pt-4 
    flex items-center gap-6 
    text-sm text-gray-700 
    flex-wrap
  "
          >
            {/* Likes */}
            <div className="flex items-center gap-2">
              <img src="/forum/like.svg" alt="likes" className="w-5 h-5" />
              <span>{question.likes || 0} Likes</span>
            </div>

            {/* Replies */}
            <div className="flex items-center gap-2">
              <img src="/forum/comment.svg" alt="replies" className="w-5 h-5" />
              <span>{question.replies.length} Reply</span>
            </div>

            {/* Saves */}
            <div className="flex items-center gap-2">
              <img src="/forum/bookmark.svg" alt="saves" className="w-5 h-5" />
              <span>{question.saves || 0} Saves</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
