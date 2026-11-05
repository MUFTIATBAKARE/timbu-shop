import Search from "../assets/Search.svg";

function SearchBox() {
  return (
    <div className="hidden xl:flex items-center relative">
      <input
        type="text"
        placeholder="Search sneakers, brands..."
        className="rounded-full pl-4 pr-10 py-2 text-sm w-72 border border-gray-300 focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
      />
      <img
        src={Search}
        alt="Search"
        className="absolute right-3.5 w-4 h-4 text-gray-400 pointer-events-none"
      />
    </div>
  );
}

export default SearchBox;
