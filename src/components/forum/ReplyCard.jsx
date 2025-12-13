export default function ReplyCard({ reply }) {
  return (
    <div className="bg-[#EDF8F0] rounded-lg p-4 shadow-sm max-w-xl w-full">
      {/* TOP ROW */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <img
          src={reply.author.avatar || "/forum/priya.png"}
          className="w-10 h-10 rounded-full"
          alt={reply.author.name}
        />

        {/* Name + Date */}
        <div>
          <div className="text-sm font-semibold text-[#0C5C4C]">
            {reply.author.name}
          </div>
          <div className="text-xs text-gray-500">
            {new Date(reply.createdAt).toLocaleDateString()}
          </div>
        </div>

        {/* 3-DOT MENU ICON */}
        <img
          src="/forum/option.svg"
          alt="menu"
          className="w-4 h-4 ml-auto opacity-70 cursor-pointer"
        />
      </div>

      {/* REPLY TEXT */}
      <div className="mt-3 text-sm text-[#0A0A0A] leading-relaxed">
        {reply.body}
      </div>

      {/* ACTION ROW */}
      <div
        className="
          mt-3 
          flex flex-wrap items-center gap-4 
          text-sm text-gray-600
        "
      >
        {/* Likes */}
        <div className="flex items-center gap-2">
          <img src="/forum/like.svg" alt="likes" className="w-4 h-4" />
          <span>{reply.likes || 0}</span>
        </div>

        {/* Comments */}
        <div className="flex items-center gap-2">
          <img
            src="/forum/comment.svg"
            alt="comment count"
            className="w-4 h-4"
          />
          <span>2</span>
        </div>
      </div>
    </div>
  );
}
