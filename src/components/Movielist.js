import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({title,movies}) => {
   
  return (
    <div className="px-6">
    <h1 className="text-3xl py-4 text-white">{title}</h1>
    <div className="flex overflow-x-scroll no-scroll ">
      <div className="flex">
        {Array.isArray(movies) ? movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} movieId = {movie.id} />
        )) : null} 
      </div>
    </div>
  </div>
  )
}

export default Movielist