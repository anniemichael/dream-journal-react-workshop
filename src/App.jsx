import { useState } from "react";
import DreamForm from "./components/DreamForm";
import DreamList from "./components/DreamList";
import InspirationCard from "./components/InspirationCard";

export default function App() {
  const [dreams, setDreams] = useState([]);

  const addDream = (dream) => {
    setDreams((prev) => [
      ...prev,
      { id: Date.now(), text: dream, imageUrl: `https://picsum.photos/400/300?random=${Date.now()}` },
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-neutralLight min-h-screen">
      <h1 className="text-3xl font-bold text-accent mb-6">Dream Journal</h1>

      <DreamForm addDream={addDream} />
      <DreamList dreams={dreams} />
      <InspirationCard />
    </div>
  );
}
