"use client";

import { useFetchMovies } from "@/hooks/useFetchMovies";
import { useEffect } from "react";

const MovieDetails = ({ params }) => {
  const { movieId } = params;
  const { fetchMovieDetails, error, loading, movieDetails } = useFetchMovies();

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(movieId);
    }
  }, []);

    return (
      <article>
        <h1>detalles ID === {movieDetails?.title}</h1>
      </article>
    );
  
};

export default MovieDetails;
