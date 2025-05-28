import { useEffect, useState } from "react";

const InspirationCard = () => {
  const [advice, setAdvice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const fetchInspiration = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) throw new Error("Failed to fetch inspiration");
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
    <div className="max-w-md mx-auto p-4 bg-neutralLight rounded shadow">
      {imageUrl && (
      <img
        src={imageUrl}
        alt="Inspiration"
        className="w-full h-48 object-cover rounded mb-4"
      />
      )}
      <p className="text-lg italic text-neutralDark">{advice}</p>
      <button
        onClick={fetchInspiration}
        className="mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-accentHover focus:outline-none focus:ring-2 focus:ring-accentHover"
      >
        New Inspiration
      </button>
    </div>
  );
};

export default InspirationCard;
