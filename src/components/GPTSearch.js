import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { Netflix_Bg } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
         <div className='absolute -z-10'>
        <img 
        className='h-screen object-cover'
        src={Netflix_Bg}
            alt='logo'
        />
    </div>
    <div className=''>
    <GPTSearchBar/>
    <GPTMovieSuggestions/>
   
    </div>
    </>
  )
}

export default GPTSearch