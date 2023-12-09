import React from "react";

const MovieList = ({ movies, handleSelect }) => {
  return (
    <div className="movielist-container">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="movielist-card"
          onClick={() => handleSelect(movie.imdbID)}
        >
          <img
            width="60px"
            height="80px"
            src={movie.Poster}
            alt={movie.Title}
          />
          <div className="movielist-details">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
