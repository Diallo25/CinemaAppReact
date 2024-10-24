import React, { useState } from "react";
import MovieList from "./MovieList";
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "Un thriller de science-fiction sur les rêves.",
      posterUrl: "https://via.placeholder.com/150",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Breaking Bad",
      description: "Un professeur de chimie se tourne vers le crime.",
      posterUrl: "https://via.placeholder.com/150",
      rating: 4.9,
    },
    {
      id: 3,
      title: "BlackList",
      description: "un criminel veut se repentir de ces crimes. Pour cela , il se livre au FBI ",
      posterUrl: "https://via.placeholder.com/150",
      rating: 5.9,
    },
  ]);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState("");

  // Fonction pour gérer l'ajout d'un nouveau film
  const handleAddMovie = () => {
    const movieToAdd = { ...newMovie, id: movies.length + 1 };
    setMovies([...movies, movieToAdd]);
    // Réinitialiser le formulaire
    setNewMovie({
      title: "",
      description: "",
      posterUrl: "",
      rating: "",
    });
  };

  // Fonction pour filtrer les films par titre ou note
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      movie.rating >= (minRating || 0)
  );

  return (
    <div className="App">
      <h1>Mes Films et Séries Préférés</h1>

      {/* Formulaire d'ajout d'un nouveau film */}
      <div>
        <h2>Ajouter un nouveau film</h2>
        <input
          type="text"
          placeholder="Titre"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL de l'image"
          value={newMovie.posterUrl}
          onChange={(e) => setNewMovie({ ...newMovie, posterUrl: e.target.value })}
        />
        <input
          type="number"
          placeholder="Note"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button onClick={handleAddMovie}>Ajouter le film</button>
      </div>

      {/* Champs de recherche et de filtrage */}
      <div>
        <h2>Filtrer les films</h2>
        <input
          type="text"
          placeholder="Rechercher par titre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filtrer par note minimum"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
        />
      </div>

      {/* Affichage de la liste des films */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
