import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/langaugeConstant';
import openai from '../utils/openai';


const GPTSearchBar = () => {
    const langKey=useSelector(store=>store.config.lang);
    const searchText=useRef(null);

    const gptQuery="Act as a movie recommendation system and sugges some movies for the query"+searchText+"only give me a names of 5 movies, comma seperated like the example result given ahead . Example result: Gadar, Sholay, Don, golmal, koi mil gaya"
    const handleGPTSearchClick=async()=>{
        const gptResults= await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });

        console.log(gptQuery);
    }

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