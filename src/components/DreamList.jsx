import React from "react";

const DreamList = ({ dreams }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {dreams.map(({ id, text, imageUrl }) => (
        <div
          key={id}
          className="bg-white rounded shadow p-4 flex flex-col items-center"
        >
          <img
            src={imageUrl}
            alt="Dream visual"
            className="w-full h-40 object-cover rounded mb-4"
          />
          <p className="text-gray-800 text-center">{text}</p>
        </div>
      ))}
    </div>
  );
};

export default DreamList;
