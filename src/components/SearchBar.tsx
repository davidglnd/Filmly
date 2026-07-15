import { getFilmsByQuery } from "../actions/get-films-by-query.action";

interface Props {
    placeholder: string;
}

export const SearchBar = ({ placeholder = "Buscador" }: Props) => {

    const handleSearch = async () => {
        const films = await getFilmsByQuery("spiderman");
        console.log(films);
    }
    return (
        <div className="search-container">
            <input type="text" placeholder={placeholder} />
            <button onClick={handleSearch}>Buscar</button>
        </div>

    )
}
