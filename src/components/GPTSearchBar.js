import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langaugeConstant";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGpMovieResult } from "../utils/gptSlice";
import Shimmer from "./Shimmer";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [found, setFound] = useState(true);

  const dispatch = useDispatch();
  const gptQuery =
    "Act as a movie recommendation system and sugges some movies for the query" +
    (searchText.current ? searchText.current.value : "") +
    "only give me a names of 5 movies, comma seperated like the example result given ahead . Example result: Gadar, Sholay, Don, golmal, koi mil gaya";
  //const gptQuery="Act as a movie recommendation system and sugges some movies for the query"+searchText.current.value+"only give me a names of 5 movies, comma seperated like the example result given ahead . Example result: Gadar, Sholay, Don, golmal, koi mil gaya"
  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    try {
      setFound(false);
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      console.log(gptResults.choices);
      const gptMovies =
        gptResults.choices && gptResults.choices.length > 0
          ? gptResults.choices[0]?.message?.content.split(",")
          : [];
      //const gptMovies = gptResults.choices ? gptResults.choices[0]?.message?.content.split(",") : [];
      //const gptMovies = gptResults.choices ? [0].message?.content.split(",") : [];
      //for each movie search for tmdb api
      console.log(
        gptResults.choices
          ? gptResults.choices[0].message
            ? gptResults.choices[0].message.content
            : undefined
          : undefined
      );

      const searchMoiveTmdb = async (movie) => {
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();
        console.log(json);
        return json.results;
      };

      const promiseArray =
        gptMovies && gptMovies.length > 0
          ? gptMovies.map((movie) => searchMoiveTmdb(movie))
          : [];
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(
        addGpMovieResult({ gptMovieNames: gptMovies, tmdbResults: tmdbResults })
      );
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="pt-[45%] md:p-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />

        <button
          className="col-span-3 w-full md:w-auto m-4 p-0 md:px-4 bg-LightRed text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
