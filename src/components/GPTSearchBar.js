import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/langaugeConstant';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGpMovieResult } from '../utils/gptSlice';


const GPTSearchBar = () => {
    const langKey=useSelector(store=>store.config.lang);
    const searchText=useRef(null);
    const dispatch=useDispatch();
    const gptQuery="Act as a movie recommendation system and sugges some movies for the query"+searchText+"only give me a names of 5 movies, comma seperated like the example result given ahead . Example result: Gadar, Sholay, Don, golmal, koi mil gaya"
    const handleGPTSearchClick = async () => {
      try {
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });
    
        const gptMovies = gptResults.choices ? [0].messages?.content.split(",") : [];
        //for each movie search for tmdb api
        
        
        const searchMoiveTmdb=async(movie)=>{
          const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1",API_OPTIONS);
          const json=await data.json();
          console.log(json);
          return json.results;
        }

        const promiseArray = gptMovies && gptMovies.length > 0 ? gptMovies.map(movie => searchMoiveTmdb(movie)) : [];
        const tmdbResults= await Promise.all(promiseArray);
        dispatch(addGpMovieResult({gptMovieNames:gptMovies,tmdbMovieResults :tmdbResults }));

      } catch (error) {
        console.error('Error occurred:', error);
      }
    };

  return (
    <div className='pt-[10%] flex justify-center ' >
        <form className='w-1/2 bg-black grid grid-cols-12'
        onSubmit={(e)=>{e.preventDefault()}}
        >
            <input
            ref={searchText}
            type='text'
            className='p-4 m-4 col-span-9'
            placeholder={lang[langKey].gptSearchPlaceHolder}
            />

            <button
                className='col-span-3 m-4 py- px-4 bg-red-700 text-white rounded-lg'
                onClick={handleGPTSearchClick}
               
            >{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar