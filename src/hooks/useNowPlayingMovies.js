import { useCallback, useEffect } from 'react'
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = async() => {

    const dispatch=useDispatch();
    const getNowPlayingMovies = useCallback(async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
      }, [dispatch]); // include any dependencies here
      
      useEffect(() => {
        getNowPlayingMovies();
      }, [getNowPlayingMovies]);

}

export default useNowPlayingMovies