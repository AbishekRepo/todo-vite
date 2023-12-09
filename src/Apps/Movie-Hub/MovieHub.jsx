import React, { useEffect, useState } from "react";
import Box from "./components/Box";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./components/MovieDetails/MovieDetail";
// import { movies } from "./data";

const MovieHub = () => {
  const [searchMovies, setSearchMovies] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const delay = 500;
    async function fetchOMDBData(movieSearch) {
      try {
        setLoading(true);
        setMovies([]);
        setError(null);
        if (searchMovies.trim() !== "") {
          const res = await fetch(
            `https://www.omdbapi.com/?s=${movieSearch}&apikey=340a9272`
          );

          if (!res.ok) {
            throw new Error("Data is not available");
          }

          const data = await res.json();
          if (data.Response === "False") {
            setMovies([]);
            setError(data.Error || "unknown error");
          }
          if (data.Search) {
            setMovies(data.Search);
          }
        }
      } catch (error) {
        setError(error.message);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(() => {
      fetchOMDBData(searchMovies);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [searchMovies]);

  async function handleSelect(id) {
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=340a9272`);
    const data = await res.json();
    setSelectedMovie(data);
  }

  const totalFoundMovies = movies.length;

  return (
    <>
      <SearchBar
        setSearchMovies={setSearchMovies}
        searchMovies={searchMovies}
        total={totalFoundMovies}
      />
      <div className="movie-container">
        <Box>
          {loading && <p className="error">Loading..</p>}
          {movies.length > 0 && (
            <MovieList movies={movies} handleSelect={handleSelect} />
          )}
          {error && <p className="error">{error}</p>}
        </Box>
        <Box>
          {Object.keys(selectedMovie).length > 0 && (
            <MovieDetail selectedMovie={selectedMovie} />
          )}
        </Box>
      </div>
    </>
  );
};

export default MovieHub;
