import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

const SecoundaryContainer = () => {
  const movies=useSelector(store=>store.movies);

  return (
    <div>
      {/* <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}
    SecoundaryContainer
    </div>
  )
}

export default SecoundaryContainer 