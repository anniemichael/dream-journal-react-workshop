import { useState } from 'react'


function App() {

  const [input, setInput] = useState("");
  const [dreams, setDreams] = useState([]);

  const addDream = (dream) => {
    setDreams((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: dream,
        // imageUrl: `https://picsum.photos/400/300?random=${Date.now()}`,
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
      <div>{JSON.stringify(dreams)}</div>
      {/*<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">*/}
      {/*  {dreams.map(({ id, text, imageUrl }) => (*/}
      {/*    <div key={id} className="bg-neutralLight p-4 rounded shadow relative flex flex-col">*/}
      {/*      <img*/}
      {/*        src={imageUrl}*/}
      {/*        alt="Dream visual"*/}
      {/*        className="w-full h-48 object-cover rounded mb-3"*/}
      {/*      />*/}
      {/*      <p className="text-neutralDark flex-grow">{text}</p>*/}

      {/*      <button*/}
      {/*        onClick={() => deleteDream(id)}*/}
      {/*        className="self-end mt-4 text-neutralMid hover:text-neutralDark"*/}
      {/*        aria-label="Delete dream"*/}
      {/*        title="Delete dream"*/}
      {/*      >*/}
      {/*        /!* Smaller grey trash icon *!/*/}
      {/*        <svg*/}
      {/*          xmlns="http://www.w3.org/2000/svg"*/}
      {/*          className="h-4 w-4"*/}
      {/*          fill="none"*/}
      {/*          viewBox="0 0 24 24"*/}
      {/*          stroke="currentColor"*/}
      {/*          strokeWidth={2}*/}
      {/*        >*/}
      {/*          <path*/}
      {/*            strokeLinecap="round"*/}
      {/*            strokeLinejoin="round"*/}
      {/*            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"*/}
      {/*          />*/}
      {/*        </svg>*/}
      {/*      </button>*/}

      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}

    </div>
  )
}

export default App

