import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import SelectedVideo from "./SelectedVideo";

const MovieCard = ({ id, posterPath }) => {
  const [isSelected, setIsSelected] = useState(false);
  console.log(id)
  if (posterPath === null) return;

  return isSelected ? (
    <SelectedVideo movieId={id} setIsSelected={setIsSelected} />
  ) : (
    <div
      onClick={() => setIsSelected(true)}
      className="hover:scale-110 transition cursor-pointer flex-shrink-0 mr-5"
    >
      <img
        className="h-[60vw] w-[40vw] md:h-[19vw] md:w-[12vw] mb-1 rounded object-cover object-center"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
      />
    </div>
  );
};


export default MovieCard