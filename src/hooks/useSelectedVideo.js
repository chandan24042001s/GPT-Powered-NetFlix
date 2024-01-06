import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSelectedVideo } from "../utils/movieSlice";

const useSelectedVideo = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCurrentVideo();
  }, []);

  const fetchCurrentVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    if (json && json.results) {
        const filterData = json.results.filter(
          (video) => video.type === "Trailer"
        );
       
        const trailer = filterData.length === 0 ? json.results[0] : filterData[0];
        dispatch(addSelectedVideo(trailer));
       } else {
        console.error('json or json.results is undefined');
       }
  };
};

export default useSelectedVideo;