import items from "../assets/data.json";
import JobListing from "./JobListing";
import Nav from "./Nav";
export default function AllJobs() {
  return (
    <div className="bg-blue-100">
      <Nav />
      <h2 className="text-center text-2xl pt-5 pb-8 font-bold text-blue-700">
        Recent Jobs
      </h2>

      <div className="grid grid-cols-3 grid-row-auto gap-20   p-7">
        {items.map((item) => (
          <JobListing item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
