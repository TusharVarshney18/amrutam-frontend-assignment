import { useState } from "react";

export default function AskQuestionModal({ onClose, onSubmit }) {
  const [question, setQuestion] = useState("");
  const [attachmentText, setAttachmentText] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState([]);

  function handleSubmit() {
    if (!question.trim()) return;

    onSubmit({
      id: Date.now(),
      author: { name: "Priya Singh", avatar: "/avatar-placeholder.png" },
      title: question,
      description,
      attachments: attachmentText,
      createdAt: new Date().toISOString(),
      replies: [],
      likes: 0,
    });

    setQuestion("");
    setDescription("");
    setAttachmentText("");
    setShowDescription(false);
  }
  function handleFileUpload(e, type) {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log("Uploaded via:", type);
    console.log("File:", file);

    setAttachments((prev) => [...prev, { file, type }]);
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl p-6 relative">
        {/* MODAL HEADER */}
        <div className="flex items-center justify-between border-b pb-3">
          <h2 className="text-lg font-semibold text-[#0C5C4C]">Ask Question</h2>
          <button onClick={onClose} className="text-xl text-gray-700">
            ✕
          </button>
        </div>

        {/* PROFILE + ASK BUTTON */}
        <div className="flex items-center justify-between mt-4">
          {/* Profile */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Profile Image */}
            <img
              src="/forum/priya.png"
              alt="profile"
              className="w-12 h-12 rounded-full"
            />

            <div className="flex flex-col">
              <p className="font-medium text-[#0C5C4C] text-sm sm:text-base">
                Priya Singh
              </p>

              {/* Visibility dropdown */}
              <select className="border rounded-md px-2 py-1 text-sm mt-1 sm:mt-0 w-28">
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
          </div>

          {/* Ask Button */}
          <button
            onClick={handleSubmit}
            className="bg-[#0C5C4C] text-white px-6 py-2 rounded-lg font-medium"
          >
            Ask
          </button>
        </div>

        {/* ADD QUESTION */}
        <div className="mt-6">
          <label className="text-sm font-medium text-gray-700">
            Add Question *
          </label>

          <div className="relative mt-2">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask your question here"
              className="w-full border rounded-lg px-4 py-3 text-sm text-gray-700 min-h-[70px] resize-none"
            />

            <span className="absolute bottom-2 right-3 text-xs text-gray-400">
              max 50 words
            </span>
          </div>
        </div>

        {/* ATTACHMENTS */}
        <div className="mt-6">
          <label className="text-sm font-medium text-gray-700">
            Attachments
          </label>

          <div className="relative mt-2">
            <input
              value={attachmentText}
              onChange={(e) => setAttachmentText(e.target.value)}
              placeholder="Ask your question here"
              className="w-full border rounded-lg px-4 py-3 text-sm text-gray-700"
            />

            {/* ICON BUTTONS */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-4 text-gray-600">
              {/* CAMERA */}
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, "camera")}
                />
                <img
                  src="/forum/camera.svg"
                  className="w-5 h-5 opacity-80 hover:opacity-100 transition"
                />
              </label>

              {/* GALLERY */}
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, "gallery")}
                />
                <img
                  src="/forum/gallary.svg"
                  className="w-5 h-5 opacity-80 hover:opacity-100 transition"
                />
              </label>

              {/* DOCUMENTS */}
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt,.xls,.xlsx"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, "document")}
                />
                <img
                  src="/forum/document.svg"
                  className="w-5 h-5 opacity-80 hover:opacity-100 transition"
                />
              </label>
            </div>
          </div>
        </div>

        {/* ADD DESCRIPTION */}
        <div className="mt-4">
          <button
            onClick={() => setShowDescription((p) => !p)}
            className="flex items-center gap-2 text-sm text-[#0C5C4C] font-medium"
          >
            <span className="text-lg">➕</span> Add Description
          </button>

          {showDescription && (
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add description here"
              className="w-full border rounded-lg px-4 py-3 text-sm mt-3 min-h-[100px]"
            />
          )}
        </div>
      </div>
    </div>
  );
}
