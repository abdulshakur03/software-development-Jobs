import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="bg-blue-700 text-white">
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
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/contact-us">Contact us</Link>
        </nav>
      </div>
      <hr className="text-gray-400"/>
    </div>
  );
}
