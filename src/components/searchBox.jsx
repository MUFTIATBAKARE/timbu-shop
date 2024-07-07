import Search from "../assets/Search.svg";

function searchBox() {
  return (
    <div className="flex justify-between">
      <input
        type="text"
        placeholder="Search item"
        className="rounded-full bg-yellow-300 px-4 py-2 text-sm w-40 focus:outline-none focus-ring focus:ring-yellow-500"
      />
      <img src={Search} alt="Search" />
    </div>
  );
}

export default searchBox;
