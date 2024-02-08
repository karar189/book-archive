// SearchBar.jsx
import React from "react";

function SearchBar({ onSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
      console.log("You searched for: ", event.target.value);
    }
  };

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search for books"
        className="input input-bordered w-24 md:w-auto"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;
