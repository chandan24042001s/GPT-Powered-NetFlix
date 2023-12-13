import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../utils/useMovieTrailer';


const VideoBackground = ({movieId}) => {
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo);

  useMovieTrailer(movieId);
  return (
    <div className='w-screen'>
        {
            <iframe className='w-screen aspect-video'
            src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?autoplay=1&mute=1" }
            title="YouTube video player"
            allowFullScreen
            frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         ></iframe>
        }
    </div>
  )
}

export default VideoBackground