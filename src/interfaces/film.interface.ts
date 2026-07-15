export interface Film {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    runtime: number;
    genres: Genre[];
    vote_average: number;
    vote_count: number;
    popularity: number;
}

interface Genre {
    id: number;
    name: string;
}