import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist'

const GPTMovieSuggestions = () => {

  const {gptMovieNames, tmdbMovieResults}=useSelector(store=>store.gpt);
  if(!gptMovieNames)return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
        {
          gptMovieNames.map((moviename,index)=>(
            <Movielist 
              key={moviename}
              title={moviename}
              movies={tmdbMovieResults[index]}
            />
          ))
        }
    </div>
  )
}

export default GPTMovieSuggestions