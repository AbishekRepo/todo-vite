import React from "react";

const MovieDetail = ({ selectedMovie }) => {
  const {
    Title: title,
    Year: year,
    Runtime: runtime,
    Genre: genre,
    Director: director,
    Actors: actors,
    Plot: plot,
    Language: language,
    Country: country,
    Awards: awards,
    Poster: poster,
    Ratings: ratings,
    imdbRating: imdbRating,
    imdbVotes,
    imdbID,
    BoxOffice: boxOffice,
  } = selectedMovie;
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-details">
        <h2>
          {title} ({year})
        </h2>
        <p>
          <strong>Runtime:</strong> {runtime}
        </p>
        <p>
          <strong>Genre:</strong> {genre}
        </p>
        <p>
          <strong>Director:</strong> {director}
        </p>
        <p>
          <strong>Actors:</strong> {actors}
        </p>
        <p>
          <strong>Plot:</strong> {plot}
        </p>
        <p>
          <strong>Language:</strong> {language}
        </p>
        <p>
          <strong>Country:</strong> {country}
        </p>
        <p>
          <strong>Awards:</strong> {awards}
        </p>
        <div className="ratings">
          {ratings.map((rating) => (
            <p key={rating.Source}>
              <strong>{rating.Source}:</strong> {rating.Value}
            </p>
          ))}
        </div>
        <p>
          <strong>IMDb Rating:</strong> {imdbRating} ({imdbVotes} votes)
        </p>
        <p>
          <strong>IMDb ID:</strong> {imdbID}
        </p>
        <p>
          <strong>Box Office:</strong> {boxOffice}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
