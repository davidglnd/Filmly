import { useState } from "react";

interface Props {
    placeholder: string;
    onSearch: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscador", onSearch }: Props) => {

    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
        //onSearch "manda" el query al componente padre
        setQuery('');
        //setQuery con valor vacio limpia el input    
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
    return (
        <div className="search-container">
            <input type="text" placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown} />
            {/* el setQuery se va a llamar cuando el input cambie */}
            <button onClick={handleSearch}>Buscar</button>
        </div>

    )
}
