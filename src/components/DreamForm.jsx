import { useState } from "react";

export default function DreamForm({ addDream }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addDream(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your dream or goal..."
        className="border border-neutralMid rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="bg-accent text-white px-4 py-2 rounded hover:bg-accentHover focus:outline-none focus:ring-2 focus:ring-accentHover"
      >
        Add Dream
      </button>
    </form>
  );
}
