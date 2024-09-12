"use client";
import { useState, useEffect } from "react";
import axios from "../utils/axiosInstance";

// Custom Hook to fetch popular movies, now playing movies, and movie details
export const useFetchMovies = () => {
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [movieDetails, setMovieDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch Popular Movies
  const fetchPopularMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/discover/movie", {
        params: {
          include_adult: false,
          include_video: false,
          language: "en-US",
          page: 1,
          sort_by: "popularity.desc",
        },
      });
      setMoviesPopular(response.data.results);
    } catch (error) {
      setError("Error fetching popular movies");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch Now Playing Movies
  const fetchNowPlayingMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/movie/now_playing", {
        params: {
          language: "en-US",
          page: 1,
        },
      });
      setNowPlaying(response.data.results);
    } catch (error) {
      setError("Error fetching now playing movies");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUpcomingMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/movie/upcoming", {
        params: {
          language: "en-US",
          page: 1,
        },
      });
      setUpComing(response.data.results);
    } catch (error) {
      setError("Error fetching now playing movies");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  

  const fetchTopRatedMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/movie/top_rated", {
        params: {
          language: "en-US",
          page: 1,
        },
      });
      setTopRated(response.data.results);
    } catch (error) {
      setError("Error fetching now playing movies");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch Movie Details by ID
  const fetchMovieDetails = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`/movie/${id}`, {
        params: {
          language: "en-US",
        },
      });
      setMovieDetails(response.data);
    } catch (error) {
      setError("Error fetching movie details");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Call fetch functions automatically
  useEffect(() => {
    fetchPopularMovies();
    fetchNowPlayingMovies();
    fetchUpcomingMovies();
    fetchTopRatedMovies();
  }, []);

  // Return state and fetch functions
  return {
    moviesPopular,
    nowPlaying,
    upComing,
    topRated,
    movieDetails,
    loading,
    error,
    fetchMovieDetails, // Fetch details when needed
  };
};
