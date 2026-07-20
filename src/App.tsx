
import { useState, useEffect } from "react"

import { CustomHeader } from "./components/CustomHeader"
import { FilmsList } from "./components/FilmsList"
import { SearchBar } from "./components/SearchBar"
import { Toast } from "./components/Toast"

import type { Film } from "./interfaces/film.interface"

//import { films as filmsMock } from "./mocks/films.mocks"

import { getFilmsByQuery } from "./actions/get-films-by-query.action"
import { getPopularFilms } from "./actions/get-popular-films.action"


export const App = () => {
    const [films, setFilms] = useState<Film[]>([]);
    const [message, setMessage] = useState('');

    const handleSearch = async (query: string = '') => {
        const normalizedQuery = query.trim().toLowerCase();

        if (normalizedQuery.length === 0) {
            setMessage('');
        } else {
            const searchedFilms = await getFilmsByQuery(normalizedQuery, 1);

            console.log('searchedFilms', searchedFilms);

            if (searchedFilms.length === 0) {
                setMessage('No se encontraron peliculas')
            } else {
                setMessage('');
                setFilms(searchedFilms);
            }
        }
    }
    useEffect(() => {
        if (message === '') return;

        const timer = setTimeout(() => {
            setMessage('');
        }, 5000);

        return () => clearTimeout(timer);
    }, [message])

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
            {/* MSG-Box */}
            {message && (
                <Toast message={message} onClose={() => setMessage('')} />
            )}
            {/* films */}
            <FilmsList films={films} />
        </>
    )
}
