import Search from "../assets/Search.svg";

function searchBox() {
  return (
    <div className="flex justify-between relative pointer-events-none">
      <input
        type="text"
        placeholder="Search item"
        className="block rounded-full px-2 py-2  text-sm w-80 border border-gray-300 focus:outline-none focus-ring focus:ring-yellow-500"
      />
      <img src={Search} alt="Search"className="absolute w-4 h-4 end-4 bottom-3 " />
    </div>
  );
}

export default searchBox;
