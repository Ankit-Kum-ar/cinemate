import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard'
import useFetchMovies from '../hooks/useFetchMovies';
const Search = ({api_text}) => {
  const [ searchParams ] = useSearchParams();
  const query = searchParams.get('q'); 
  const { movies } = useFetchMovies(api_text , query);
  
  return (
    <main>
      <section>
        <div className='max-w-7xl mx-auto py-7'>
          <h1 className='text-3xl font-semibold text-gray-800 dark:text-gray-100'>
            {
              movies.length === 0 ? `No Results found for "${query}"` : `Search Results for "${query}"`
            }
          </h1>
        </div>
      </section>
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

export default Search
