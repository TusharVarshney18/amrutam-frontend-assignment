import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewQuestionPage() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const nav = useNavigate();

  function handlePost() {
    // post flow: call API then navigate back to forum
    // here we just navigate back
    nav(-1);
  }

  return (
    <div className="min-h-screen p-6 bg-white flex items-start justify-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Ask a New Question</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Question title"
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Details"
          className="w-full mt-3 border rounded px-3 py-2 min-h-[200px]"
        />

        <div className="mt-4 flex justify-end gap-3">
          <button onClick={() => nav(-1)} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={handlePost}
            className="px-4 py-2 bg-[#0C5C4C] text-white rounded"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
