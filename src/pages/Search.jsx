import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from '../components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './MoviesGrid.css';

const Search = () =>{

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    //Uma função declarada como async significa que o valor de retorno da função será, "por baixo dos panos", uma Promise
    const getSearchMovies = async(url) =>{
        //O operador await é utilizado para esperar por uma Promise
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
        getSearchMovies(searchWithQueryURL)
    }, [query])

    return(
        <div className="container">
            <h2 className="title">Resultados para: 
                <span className="query-text"> {query}</span>
            </h2>
            <div className="container_movies">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}
export default Search;