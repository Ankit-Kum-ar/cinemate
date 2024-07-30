import MovieCard from '../components/MovieCard'
import useFetchMovies from '../hooks/useFetchMovies';
const MovieList = ({api_text}) => {
  const {movies} = useFetchMovies(api_text);
  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {
            movies.map((movie) => (
              <MovieCard key={movie?.id} id={movie?.id} title={movie?.original_title} overview={movie?.overview} poster={movie?.poster_path} name={movie?.name}/>
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default MovieList
