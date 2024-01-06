import React from 'react'

import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;
 
  const mainMovieIndex = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[mainMovieIndex];
 
  if (!mainMovie) return null;
 
  const { original_title, overview, id } = mainMovie;
 
  return (
    <div className='pt-[35%] bg-black md:pt-0'>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
 };

export default MainContainer