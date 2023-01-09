import { useState,useEffect } from "react";
import MovieCard from "../components/MovieCard";

import './MoviesGrid.css'

//importando variaveis de env
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () =>{
    const [topMovies, setTopMovies] = useState([])

    //Uma função declarada como async significa que o valor de retorno da função será, "por baixo dos panos", uma Promise
    const getTopRatedMovies = async(url) =>{
        //O operador await é utilizado para esperar por uma Promise
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRateURL = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRateURL)
    }, [])

    return(
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="container_movies">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}
export default Home;