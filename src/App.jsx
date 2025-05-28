import { useState } from 'react'
import DreamForm from "./components/DreamForm";
import DreamList from "./components/DreamList";

function App() {

  const [input, setInput] = useState("");
  const [dreams, setDreams] = useState([]);

  const addDream = (dream) => {
    setDreams((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: dream,
        imageUrl: `https://picsum.photos/400/300?random=${Date.now()}`,
      },
    ]);
  };

  const deleteDream = (id) => {
    setDreams((prev) => prev.filter((dream) => dream.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addDream(input);
    setInput("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-neutralLight min-h-screen">
      <h1 className="text-3xl font-bold text-accent mb-6">My Dream Journal</h1>

      <DreamForm addDream={addDream} />
      <DreamList dreams={dreams} deleteDream={deleteDream} />

    </div>
  )
}

export default App

