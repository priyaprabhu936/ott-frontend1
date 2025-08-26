import React, { useEffect, useState } from "react";
import API_URL from "../api";

function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <img src={movie.poster} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default MovieGrid;
