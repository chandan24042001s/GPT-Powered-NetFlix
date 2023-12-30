import { useCallback, useEffect } from 'react'
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = async() => {
    const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
    const dispatch=useDispatch();
    const getNowPlayingMovies = useCallback(async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
      }, [dispatch]); // include any dependencies here
      
      useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
      }, [getNowPlayingMovies]);

}

export default useNowPlayingMovies