export default function DreamList({ dreams }) {
  if (dreams.length === 0) {
    return <p className="text-neutralDark italic">No dreams added yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
      {dreams.map(({ id, text, imageUrl }) => (
        <div key={id} className="bg-neutralLight p-4 rounded shadow">
          <img
            src={imageUrl}
            alt="Dream visual"
            className="w-full h-48 object-cover rounded mb-3"
          />
          <p className="text-neutralDark">{text}</p>
        </div>
      ))}
    </div>
  );
}
