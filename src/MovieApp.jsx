import { useState, useEffect } from "react";
import "./MoviesApp.css";
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
            {
                !movies ? (
                    <>
                        <h1>{!movies?"Movies List":"Bye Bye"}</h1>
            <h1>{movies?"Movies List":"Bye Bye"}</h1>
            <ul style={{display:"flex", flexWrap:"wrap", gap:"10px"}}>
                {
                    movies.map((movie)=>(
                        <li style={{
                            listStyle:"none",
                            width:"150px",
                            // height:"200px",
                            backgroundColor:"red",
                            color:"white",
                            border:"2px solid black",
                            borderRadius:"2px"
                        }} 
                        key={movie.id}>
                            
                            <h2>{movie.movie}</h2>
                            <p>{movie.rating}</p>
                            {/* <a>{movie.imdb_url}</a> */}
                        </li>
                    ))
                }
            </ul>
                    </>
                ):(<>Please Try Again</>)
            }
        </>
    )
}
export default MovieApp;



