// src/pages/Movies.js
import React, { useEffect, useState } from "react";
import API_URL from "../api";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🍿 Movies List</h2>
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <ul>
          {movies.map((m, i) => (
            <li key={i}>{m.title} ({m.year})</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
