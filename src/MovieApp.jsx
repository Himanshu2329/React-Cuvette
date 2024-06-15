import { useState, useEffect } from "react";

const MovieApp = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const response = await fetch("https://dummyapi.online/api/movies")
                const data = await response.json()
                setMovies(data)
                console.log(data);
                setLoading(false)
            }
            catch (error){
                console.error("Error fetching movies", error);
                setLoading(false)
            }
        }  
        fetchMovies();
    },[]) 

    if (loading) {
        return <div>Loading....</div>
    }

    return (
        <>
            <h1>Movie App</h1>
            <ul>
                {
                    movies.map((movie)=>(
                        <li key={movie.id}>
                            
                            <h2>{movie.movie}</h2>
                            <p>{movie.rating}</p>
                            <a>{movie.imdb_url}</a>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default MovieApp;