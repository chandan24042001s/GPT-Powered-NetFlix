import React from 'react'
import MainContainer from './MainContainer'
import SecoundaryContainer from './SecoundaryContainer'
import useNowPlayingMovies from '../utils/useNowPlayingMovies'
import Header from './Header'


const Browse = () => {
    useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecoundaryContainer/>
    </div>
  )
}

export default Browse;