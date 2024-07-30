import React from 'react'
import MovieCard from '../components/MovieCard'
const MovieList = () => {
  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          <MovieCard/>
        </div>
      </section>
    </main>
  )
}

export default MovieList
