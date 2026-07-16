import type { Film } from "../interfaces/film.interface"

interface Films {
    films: Film[];
}
export const FilmsList = ({ films }: Films) => {
    const getImageUrl = (path: string) => {
        const notFoundPath = '/404.png';

        if (path === null) return notFoundPath;

        return `https://image.tmdb.org/t/p/w342${path}`
    }
    return (
        <div className="films-container">
            {
                films.map(film => (
                    <div key={film.id} className="film-card">
                        <img src={getImageUrl(film.poster_path)} alt={film.title} />
                        <h3>{film.title}</h3>
                        <p>{film.overview}</p>
                        <p>{film.release_date}</p>
                    </div>
                ))
            }
        </div>
    )
}
// https://image.tmdb.org/t/p/w342