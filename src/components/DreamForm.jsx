import React, { useState } from "react";

const DreamForm = ({ addDream }) => {
  const [dream, setDream] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dream.trim()) return;

    const newDream = {
      id: Date.now(),
      text: dream.trim(),
      imageUrl: `https://picsum.photos/300/200?random=${Date.now()}`,
    };

    addDream(newDream);
    setDream("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Enter your dream or goal"
        value={dream}
        onChange={(e) => setDream(e.target.value)}
        className="border rounded px-3 py-2 w-full"
      />
      <button
        type="submit"
        className="mt-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        Add Dream
      </button>
    </form>
  );
};

export default DreamForm;
