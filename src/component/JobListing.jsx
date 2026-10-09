import { useState } from "react";

export default function JobListing({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = item.description;
  const displayText = isExpanded ? text : `${text.slice(0, 100)}...`;
  return (
    <div className="bg-white py-5 px-8 border-l-3 rounded-r-2xl">
      <div className="flex flex-col gap-7">
        <p className="text-gray-600">{item.type}</p>
        <h3 className="font-bold">{item.title}</h3>
        <p>{displayText}</p>
        <p
          className="text-blue-700 cursor-pointer"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          More
        </p>
        <p className="text-blue-700 mb-5">{item.salary}</p>{" "}
      </div>
      <hr />
      <div className="flex my-5 justify-between">
        <p className="text-red-600 font-bold">📌 {item.location}</p>
        <button className="bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  );
}
