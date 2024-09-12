import axios from "axios";

export const baseUrl = "https://image.tmdb.org/t/p/original"
export const baseUrlW500 = "https://image.tmdb.org/t/p/w500"

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDE4N2E3ZjkwZjlkYzI1NjIyOWRlMDJjOTRhZjNhMCIsIm5iZiI6MTcyNjAxOTA0MC45ODY4NDcsInN1YiI6IjY2ZTBmM2ZjNzllYTU3MDcyZjhmYzQ0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UB1hOUmWwCfJkkza5yTinY2zdIyut3UZY-M8aNMyKPU`,
    Accept: "application/json",
  },
});

export default instance;
