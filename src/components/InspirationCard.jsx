import React, { useEffect, useState } from "react";

const InspirationCard = () => {
  const [advice, setAdvice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const fetchInspiration = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
      setImageUrl(`https://picsum.photos/400/300?random=${Date.now()}`);
    } catch (error) {
      setAdvice("Failed to fetch inspiration.");
      setImageUrl("");
    }
  };

  useEffect(() => {
    fetchInspiration();
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Inspiration"
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      <p className="text-lg italic text-gray-700">{advice}</p>
      <button
        onClick={fetchInspiration}
        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        New Inspiration
      </button>
    </div>
  );
};

export default InspirationCard;
