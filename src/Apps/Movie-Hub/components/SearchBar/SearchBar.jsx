import React from "react";

const SearchBar = ({ setSearchMovies, searchMovies }) => {
  return (
    <nav className="searchbox-Container">
      <h2>moviehub</h2>
      <input
        type="text"
        placeholder="search for movies"
        className="searchbox-input"
        value={searchMovies}
        onChange={(e) => setSearchMovies(e.target.value)}
      />
      <p>This is the total needed</p>
    </nav>
  );
};

export default SearchBar;
