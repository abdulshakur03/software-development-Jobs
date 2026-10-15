import Nav from "./Nav";
import { useState } from "react";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    texts: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };
  return (
    <div>
      <Nav />
      <h1 className="grid font-bold text-2xl place-items-center mt-5">
        Ask us anything
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid gap-2 place-items-center mt-5"
      >
        <div className=" flex items-center justify-between gap-3">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First name"
            className="bg-gray-100 py-2 px-3 rounded-sm w-"
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last name"
            className="bg-gray-100 py-2 px-3 rounded-sm"
          />
        </div>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="bg-gray-100 py-2 px-3 rounded-sm"
        />
        <br />
        <textarea
          name="texts"
          value={formData.texts}
          onChange={handleChange}
          placeholder="How can we help?"
          className="bg-gray-100 py-1 px-3 rounded-sm"
          cols={50}
          rows={5}
        ></textarea>
        <br />
        <div className="">
          <input
            id="subscribe"
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />{" "}
          <label for="subscribe">Add me to your mailing list</label>
          <br />
        </div>
        <div className="w-lg mt-5">
          <button
            type="submit"
            className="bg-blue-700 text-white py-1 px-3 rounded-sm w-full cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
