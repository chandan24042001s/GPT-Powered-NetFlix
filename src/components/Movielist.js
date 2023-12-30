import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({title,movies}) => {
  console.log(movies);
  return (
    <div className="px-6">
    <h1 className="text-xl md:text-3xl py-4 text-white">{title}</h1>
    <div className="flex overflow-x-scroll no-scroll ">
      <div className="flex">
        {movies && Array.isArray(movies) ? movies?.map((movie) => (
         
          <MovieCard key={movie.id} posterPath={movie.poster_path} movieId = {movie.id} />
        )) : null} 
      </div>
    </div>
  </div>
  )
}

export default Movielist