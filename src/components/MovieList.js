import React from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  const navigate = useNavigate();
  return (
    <div className="px-6 bg-black">
      <h1 className="text-3xl text-white py-4">{title.toUpperCase()}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <Link key={movie.id} to={"/movie/" + movie.id}>
                <MovieCard
                  posterPath={movie.poster_path}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
