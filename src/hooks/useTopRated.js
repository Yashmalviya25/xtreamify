import { useEffect } from "react";
import { API_OPTIONS, GET_MOVIES_List } from "../utils/constants";
import { addTopRated } from "../utils/moviesSlice";
import { useDispatch,useSelector } from "react-redux";

const useTopRated = () => {
  const dispath = useDispatch();
  const topRated = useSelector(store => store.topRated);
  const getTopRated = async () => {
   try{
    const movie = GET_MOVIES_List.replace("{type}", "top_rated");
    const data = await fetch(movie, API_OPTIONS);
    const json = await data.json();
    dispath(addTopRated(json.results));
   }
   catch(e){
    console.log(e)
   }
  };
  useEffect(() => {
    !topRated && getTopRated();
  }, []);
};

export default useTopRated;