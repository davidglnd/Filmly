import { tmdbApi } from "../api/tmdb.app";
import type { Film } from "../interfaces/film.interface";

export const getFilmsByQuery = async (query: string, page: number = 1): Promise<Film[]> => {
    const { data } = await tmdbApi.get('/search/movie', {
        params: {
            query,
            page
        }
    });

    return data.results;
};