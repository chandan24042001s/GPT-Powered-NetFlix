import React from 'react'
import MainContainer from './MainContainer'
import SecoundaryContainer from './SecoundaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from './Header'


const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
   useUpComingMovies();
   useTopRatedMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecoundaryContainer/>
    </div>
  )
}

export default Browse;