import { useState, useRef, useEffect } from "react";

export default function ForumFilter({ setFilter }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // clicking outside closes the dropdown
  useEffect(() => {
    function handler(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* FILTER BUTTON */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center"
      >
        <img
          src="/forum/option.svg"
          alt="filter menu"
          className="w-30 h-30 opacity-80"
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-lg py-2 z-50">
          <button
            onClick={() => {
              setFilter("recent");
              setOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
          >
            Recent
          </button>

          <button
            onClick={() => {
              setFilter("liked");
              setOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
          >
            Most Liked
          </button>

          <button
            onClick={() => {
              setFilter("commented");
              setOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
          >
            Most commented
          </button>

          <button
            onClick={() => {
              setFilter("oldest");
              setOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
          >
            Oldest
          </button>
        </div>
      )}
    </div>
  );
}
