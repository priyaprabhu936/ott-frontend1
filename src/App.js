import React from "react";
import Register from "./components/Register";
import MovieGrid from "./components/MovieGrid";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🎬 CineStream</h1>
      <Register />
      <MovieGrid />
    </div>
  );
}

export default App;
