import { useEffect } from "react";
import { API_OPTIONS, GET_MOVIES_List } from "../utils/constants";
import { popularMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const usePopularMovies = () => {
  const dispath = useDispatch();
  const popMovies = useSelector(store => store.popularMovies)

  const getPopularMovies = async () => {
   try{
    const movie = GET_MOVIES_List.replace("{type}", "popular");
    const data = await fetch(movie, API_OPTIONS);
    const json = await data.json();
    dispath(popularMovies(json.results));
   }
   catch(e){
    console.log(e)
   }
  };
  useEffect(() => {
    !popMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;