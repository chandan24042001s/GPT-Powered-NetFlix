import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    // console.log(posterPath)
    if(!posterPath)return null
  return (
    <div className='w-48 pr-4'>
        <img alt='movie-card'
        src={IMG_CDN_URL +posterPath} />

    </div>
  )
}

export default MovieCard