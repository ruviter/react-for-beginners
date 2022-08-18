import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

export default function Movie() {
    const [movies, setMovies] = useState([]);
    function getMovies() {
        fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.data.movies);
            })
    }
    useEffect(
        getMovies
        , []);
    const movieId = parseInt(useParams().movieId);


    return (
        <div>
            {movies.map(movie => 
                movie.id !== parseInt(movieId) ? null : 
                <div key={movie.id}>
                    <h2>title: {movie.title_long}</h2>
                    <p>summary: {movie.summary} </p>
                    <p>synopsis: {movie.synopsis}</p>
                    <a href={`${movie.torrents[0].url}`}>torrent Link</a>
                </div>
            )
            }
        </div>
    )
}