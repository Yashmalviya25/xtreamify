import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movie }) => {
  if (!posterPath) return null;
  return (
    <div className="relative w-48 pr-4 overflow-hidden group">
      <img
        src={IMAGE_CDN_URL + posterPath}
        alt="card"
        className="transition-transform duration-300 transform-gpu group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  );
};

export default MovieCard;