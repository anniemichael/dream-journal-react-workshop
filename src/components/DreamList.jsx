export default function DreamList({ dreams, deleteDream }) {
  if (dreams.length === 0) {
    return <p className="text-neutralDark italic">No dreams added yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
      {dreams.map(({ id, text, imageUrl }) => (
        <div key={id} className="bg-neutralLight p-4 rounded shadow relative flex flex-col">
          <img
            src={imageUrl}
            alt="Dream visual"
            className="w-full h-48 object-cover rounded mb-3"
          />
          <p className="text-neutralDark flex-grow">{text}</p>

          <button
            onClick={() => deleteDream(id)}
            className="self-end mt-4 text-neutralMid hover:text-neutralDark"
            aria-label="Delete dream"
            title="Delete dream"
          >
            {/* Smaller grey trash icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
              />
            </svg>
          </button>

        </div>
      ))}
    </div>
  );
}
