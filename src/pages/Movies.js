// src/pages/Movies.js
import React, { useEffect, useState } from "react";
import API_URL from "../api";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch(() => setMovies([]));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>🎬 Movies</h2>
      {movies.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {movies.map((m, i) => (
            <li key={i} style={{ margin: "10px 0" }}>
              {m.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default Movies;
