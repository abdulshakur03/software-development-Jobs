import items from "../assets/data.json";

export default function FilterBar() {
  return (
    <div>
      <input type="text" name="" id="" placeholder="Search job..." />
      <div className="category">
        {items.map((item) => (
          <button>{item.category}</button>
        ))}
      </div>
    </div>
  );
}
