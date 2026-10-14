// import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to={"/"}>
        <button className="bg-blue-700 text-white py-3 px-5 rounded-3xl cursor-pointer">
          Go back Home
        </button>
      </Link>
    </div>
  );
}
