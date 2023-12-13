import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch ,useSelector} from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store)=> store.movie?.upcomingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpComingMovies;