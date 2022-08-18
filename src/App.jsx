import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


export default function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  function getMovies() {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      })
  }
  useEffect(getMovies, [])
  return (
    <div>
      {loading ? <h1>Loading...</h1> :
        movies.map((movie) =>
          <div key={movie.id}>
            <img src={movie.medium_cover_image} />
            <p>
              <Link to={`/${movie.id}`}>{movie.title}</Link>
            </p>
            <p style={{ padding: '1rem', borderBottom: 'solid 1px',}}></p>
          </div>
        )
      }
    </div>
  )
}