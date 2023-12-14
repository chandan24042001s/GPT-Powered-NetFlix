import React from 'react'
import MainContainer from './MainContainer'
import SecoundaryContainer from './SecoundaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from './Header'
import { useSelector } from 'react-redux';
import GPTSearch from './GPTSearch';


const Browse = () => {
    const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch)

    useNowPlayingMovies();
    usePopularMovies();
   useUpComingMovies();
   useTopRatedMovies();

  return (
    <div>
      <Header/>
      { showGPTSearch?(<GPTSearch/>):(<>
      <MainContainer/>
      <SecoundaryContainer/>
      </>)}
    </div>
  )
}

export default Browse;