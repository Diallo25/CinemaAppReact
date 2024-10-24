import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={`${movie.title} poster`} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Note : {movie.rating}/5</p>
    </div>
  );
}

export default MovieCard;
