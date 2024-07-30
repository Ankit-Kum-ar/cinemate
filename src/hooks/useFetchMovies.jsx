import { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constant';

const useFetchMovies = (api_text, query="") => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async() => {
      const response = await fetch(`https://api.themoviedb.org/3/${api_text}?language=en-US&page=1&query=${query}`, API_OPTIONS);
      const data = await response.json();
      setMovies(data?.results);
    }
    useEffect(() => {
      fetchMovies();
    },[api_text, query])
  return {movies}
}

export default useFetchMovies