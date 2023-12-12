import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    console.log(posterPath)
  return (
    <div className=''>
        <img alt='movie-card'
        src={IMG_CDN_URL +posterPath} />

    </div>
  )
}

export default MovieCard