import React from 'react'
import MainContainer from './MainContainer'
import SecoundaryContainer from './SecoundaryContainer'
import useNowPlayingMovies from '../utils/useNowPlayingMovies'


const Browse = () => {
    useNowPlayingMovies();
  return (
    <div>
      <MainContainer/>
      <SecoundaryContainer/>
    </div>
  )
}

export default Browse;