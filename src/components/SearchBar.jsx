import React from "react";

const SearchBar = () => {
  return (
    <form className="form-inline justify-content-center mb-4">
      <input
        type="text"
        value=""
        placeholder="Search for music..."
        className="form-control"
        style={{ maxWidth: "300px" }}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
