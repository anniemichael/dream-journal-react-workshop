import React, { useState } from "react";
import DreamForm from "./components/DreamForm";
import DreamList from "./components/DreamList";
import InspirationCard from "./components/InspirationCard";

const App = () => {
  const [dreams, setDreams] = useState([]);

  const addDream = (dream) => {
    setDreams((prev) => [dream, ...prev]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
        Dream Journal
      </h1>
      <DreamForm addDream={addDream} />
      <DreamList dreams={dreams} />
      <div className="mt-10">
        <InspirationCard />
      </div>
    </div>
  );
};

export default App;
