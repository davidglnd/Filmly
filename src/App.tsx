
import { useState, useEffect } from "react"

import { CustomHeader } from "./components/CustomHeader"
import { FilmsList } from "./components/FilmsList"
import { SearchBar } from "./components/SearchBar"

import type { Film } from "./interfaces/film.interface"

//import { films as filmsMock } from "./mocks/films.mocks"

import { getFilmsByQuery } from "./actions/get-films-by-query.action"
import { getPopularFilms } from "./actions/get-popular-films.action"

export const App = () => {
    const [films, setFilms] = useState<Film[]>([]);

    const handleSearch = async (query: string = '') => {
        const normalizedQuery = query.trim().toLowerCase();

        if (normalizedQuery.length === 0) return;

        const searchedFilms = await getFilmsByQuery(normalizedQuery, 1);

        setFilms(searchedFilms);

    }

    useEffect(() => {
        const loadFilms = async () => {
            const popularFilms = await getPopularFilms();

            setFilms(popularFilms);
        };

        loadFilms();
    }, [])

    return (
        <>
            {/* Header */}
            <CustomHeader title="Filmly" />
            {/* SearchBar */}
            <SearchBar placeholder="Busca una pelicula" onSearch={handleSearch} />
            {/* films */}
            <FilmsList films={films} />
        </>
    )
}
