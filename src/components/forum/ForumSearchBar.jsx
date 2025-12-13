// ForumSearchBar.jsx
export default function ForumSearchBar({
  value,
  onChange,
  placeholder = "Search for concern",
}) {
  return (
    <div className="relative w-full">
      <img
        src="/forum/search.svg"
        alt="search"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70"
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-10 py-3 text-sm shadow-sm 
                   focus:border-[#0C5C4C] focus:ring-1 focus:ring-[#0C5C4C] outline-none"
      />
    </div>
  );
}
