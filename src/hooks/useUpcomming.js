import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GET_MOVIES_List } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomming } from "../utils/moviesSlice";
const useUpcomming = () => {
  const dispatch = useDispatch();
  const upcomming = useSelector((store) => store.upcomming);

  const getUpcommingMovies = async () => {
    try {
      const movie = GET_MOVIES_List.replace("{type}", "upcoming");
      const data = await fetch(movie, API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcomming(json.results));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    !upcomming && getUpcommingMovies();
  }, []);
};

export default useUpcomming;
