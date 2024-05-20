import { useEffect } from "react";
import { API_OPTIONS, GET_MOVIES_List } from "../utils/constants";
import { addNowPlaying } from "../utils/moviesSlice";
import { useDispatch,useSelector } from "react-redux";

const useNowPlaying = () => {
  const dispath = useDispatch();
  const nowPlaying = useSelector(store => store.nowPlaying);
  const getNowPlayingMovies = async () => {
   try{
    const movie = GET_MOVIES_List.replace("{type}", "now_playing");
    const data = await fetch(movie, API_OPTIONS);
    const json = await data.json();
    // console.log(json)
    dispath(addNowPlaying(json.results));
   }
   catch(e){
    console.log(e)
   }
  };
  useEffect(() => {
    !nowPlaying && getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;