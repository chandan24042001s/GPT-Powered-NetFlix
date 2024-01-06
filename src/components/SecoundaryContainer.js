import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

const SecoundaryContainer = () => {
  const movies=useSelector(store=>store.movies);

  return (

    <div >
      {movies.nowPlayingMovies && (
        <div className='bg-black' >
          <div className="mt-0 md:-mt-40 pl-4 md:pl-12 relative z-20 mobile-view-sec">
          <Movielist title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <Movielist title={"Top Rated"} movies={movies?.topRatedMovies} />
       
        <Movielist title={"Upcoming"} movies={movies?.upcomingMovies} />
        <Movielist title={"Popular"} movies={movies?.popularMovies} />
        </div>
    </div>
      )}
    </div>

  )
}

export default SecoundaryContainer 