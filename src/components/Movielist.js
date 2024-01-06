import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({title,movies}) => {
  console.log(movies);
  return (
    <div className="px-1 md:px-6 pb-4">
    <h1 className="text-2xl md:text-3xl py-6 font-medium text-white">{title}</h1>
    <div className="flex overflow-x-auto md:overflow-x-auto md:overflow-y-hidden">
      <div className="flex">
        {movies && Array.isArray(movies) ? movies?.map((movie) => (
        
          <MovieCard key={movie.id} posterPath={movie.poster_path} id = {movie.id} />
        )) : null} 
      </div>
    </div>
  </div>
  )
}

export default Movielist