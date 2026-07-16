import type { Film } from "../interfaces/film.interface"

interface Films {
    films: Film[]

}
export const FilmsList = ({ films }: Films) => {
    return (
        <div className="films-container">
            {
                films.map(film => (
                    <div key={film.id} className="film-card">
                        <img src={film.poster_path} alt={film.title} />
                        <h3>{film.title}</h3>
                        <p>{film.overview}</p>
                        <p>{film.release_date}</p>
                    </div>
                ))
            }
        </div>
    )
}
