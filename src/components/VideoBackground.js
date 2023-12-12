import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../utils/useMovieTrailer';


const VideoBackground = ({movieId}) => {
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo);

  useMovieTrailer(movieId);
  return (
    <div className='absolute w-screen aspect-video'>
        {
            <iframe className='w-screen aspect-video h-full' 
            src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?autoplay=1&mute=1" }
            title="YouTube video player"
            
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         ></iframe>
        }
    </div>
  )
}

export default VideoBackground