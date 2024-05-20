import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useTopRated from "../hooks/useTopRated";
import useUpcomming from "../hooks/useUpcomming";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcomming();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user){
      navigate("/");
    }
  },[user])

  return  (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
