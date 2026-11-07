import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../assets/Search.svg";

function SearchBox() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/product?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleClick = () => {
    if (query.trim()) {
      navigate(`/product?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="hidden xl:flex items-center relative">
      <input
        type="text"
        placeholder="Search sneakers, brands..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="rounded-full pl-4 pr-10 py-2 text-sm w-72 border border-gray-300 focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
      />
      <button
        type="button"
        onClick={handleClick}
        className="absolute right-3 p-1 text-gray-400 hover:text-gray-600 cursor-pointer"
        aria-label="Search"
      >
        <img
          src={SearchIcon}
          alt="Search"
          className="w-4 h-4 pointer-events-none"
        />
      </button>
    </div>
  );
}

export default SearchBox;
