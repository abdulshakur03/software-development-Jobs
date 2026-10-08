export default function Nav() {
  return (
    <>
      <div className="flex justify-between py-5 px-7">
        <div className="flex gap-3">
          <div className="image-logo-container">
            <img
              src="src/assets/images/coding.jpeg"
              alt="code logo"
              width="40px"
            />
          </div>
          <p className="text-logo-container">Programming Jobs</p>
        </div>

        <div className="flex  gap-5 cursor-pointer">
          <p>Home</p>
          <p>Jobs</p>
          <p>Add Job</p>
        </div>
      </div>
      <hr />
    </>
  );
}
