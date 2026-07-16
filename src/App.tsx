
import { CustomHeader } from "./components/CustomHeader"
import { FilmsList } from "./components/FilmsList"
import { SearchBar } from "./components/SearchBar"

import { films } from "./mocks/films.mocks"

export const App = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title="Filmly" />
            {/* SearchBar */}
            <SearchBar placeholder="Busca una pelicula" />
            {/* films */}
            <FilmsList films={films} />
        </>
    )
}
