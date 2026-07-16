import { tmdbApi } from "../api/tmdb.app";
import type { Film } from "../interfaces/film.interface";

export const getPopularFilms = async (): Promise<Film[]> => {
    const { data } = await tmdbApi.get('/movie/popular');

    return data.results;
};