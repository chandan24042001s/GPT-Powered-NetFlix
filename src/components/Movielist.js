import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({title,movies}) => {
   
  return (
    <div>
        <h1> {title} </h1>
        <div>
            <MovieCard posterPath={movies[0].poster_path} />
        </div>
    </div>
  )
}

export default Movielist