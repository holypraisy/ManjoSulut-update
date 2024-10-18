import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const searchBarRef = useRef(null); // Create a ref to reference the search bar

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      // If click is outside the search bar, close the search bar
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for detecting clicks outside the search bar
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={searchBarRef}>
      {/* Search Icon */}
      <FiSearch
        className="text-secondary text-2xl cursor-pointer hover:shadow-2xl"
        onClick={handleSearchToggle}
      />

      {/* Search Bar: appear when isSearchOpen is true */}
      <div
        className={`mt-8 absolute top-full right-0 w-screen max-w-[300px] md:max-w-[600px] lg:max-w-xl xl:max-w-screen-md bg-light rounded-lg py-2 px-4 flex items-center justify-start transition-all duration-500 ease-in-out transform ${
          isSearchOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
        style={{ pointerEvents: isSearchOpen ? "auto" : "none" }}
      >
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder="Search..."
          className=" bg-light lg:bg-transparent w-full text-primary px-4 py-1 text-xs md:text-sm xl:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
    </div>
  );
};

export default SearchBar;