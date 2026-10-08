import items from "../assets/data.json";
export default function Jobs() {
  return (
    <div>
      <h2>Recent Jobs</h2>

      <div>
        {items.map((item) => (
          <div className="" key={item.id}>
            <div className="card">
              <p>{item.type}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.salary}</p>{" "}
            </div>
            <hr />
            <div className="card-footer">
              <p>{item.location}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
