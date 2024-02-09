import React from "react";

function SearchBar({ onSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
      console.log("You searched for: ", event.target.value);
    }
  };

  return (
    <div className="form-control relative w-full">
      <input
        type="text"
        placeholder="Search for books"
        className="input input-bordered  w-full pr-10" // Add some padding to the right for the icon
        onKeyDown={handleKeyDown}
      />
      <button className="btn btn-ghost btn-circle absolute top-0 right-0 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
