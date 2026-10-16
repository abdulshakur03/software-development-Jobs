import Jobs from "./Jobs";
export default function Main() {
  return (
    <div>
      <div className="m-5 mb-7">
        <h1 className="text-center text-3xl font-bold">Apply For a Job</h1>
        <p className="text-center font-bold ">
          Find the Programming job that fits your skill set
        </p>
      </div>
      <FilterBar />
      <Jobs />
    </div>
  );
}
