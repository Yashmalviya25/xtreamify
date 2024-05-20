import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";
import Header from "./Header";
import CreditList from "./CreditList";

const MovieDetails = () => {
  const login = useSelector((store) => store.user);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const trailer = useSelector((store) => store.movies.addTrailer);
  const movies = useSelector((store) => store.movies?.nowPlaying);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useMovieTrailer(movieId);
  if (showGptSearch) {
    navigate("/browse");
  }
  if (movies === null) return null;

  return (
    <div className="flex mt-0 justify-center items-center w-full h-screen">
      <Header />
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div>
          <CreditList creditId={movieId} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
