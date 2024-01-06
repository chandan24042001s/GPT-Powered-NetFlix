import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist'
import Shimmer from './Shimmer';

const GPTMovieSuggestions = () => {

  const {gptMovieNames, tmdbResults}=useSelector(store=>store.gpt);
  if(!gptMovieNames)return null;
  console.log(tmdbResults)
  return !gptMovieNames?<Shimmer/> :(
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
        {
          gptMovieNames.map((moviename,index)=>(
            <Movielist 
              key={moviename}
              title={moviename}
              movies={tmdbResults ? tmdbResults[index] : []}
              //movies={tmdbMovieResults[index]}
            />
          ))
        }
    </div>
  )
}

export default GPTMovieSuggestions