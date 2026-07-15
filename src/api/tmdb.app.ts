import axios from "axios";

export const tmdbApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
    }
});

export const testMovieDetails = (movieId: number) => tmdbApi.get(`/movie/${movieId}`);

