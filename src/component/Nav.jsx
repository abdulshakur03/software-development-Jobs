// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <div className="flex justify-between items-center py-5 px-7">
        <div className="flex gap-3 items-center">
          <div className="image-logo-container">
            <img
              src="src/assets/images/coding.jpeg"
              alt="code logo"
              width="40px"
            />
          </div>
          <p className="text-logo-container">Programming Jobs</p>
        </div>

        <nav className="flex  gap-5 cursor-pointer items-center">
          <button to="/">Home</button>
          <button>Jobs</button>
          <button>Add Job</button>
        </nav>
      </div>
      <hr />
    </>
  );
}
