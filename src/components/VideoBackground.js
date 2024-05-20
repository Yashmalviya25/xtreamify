import React, { useState, useEffect } from "react";
import VideoTitle from "./VideoTitle";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const [key, setKey] = useState(Date.now());
  const [title, setTitle] = useState('');
  
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies.addTrailer);
  const movies = useSelector((store) => store.movies?.nowPlaying);

  useEffect(() => {
    if (movies) {
      const mainMovie = movies[0];
      setTitle(mainMovie.title);
    }
  }, [movies]);

  const handleReplay = () => {
    setKey(Date.now());
  };

  return (
    <div className="relative top-0">
       <VideoTitle title={title} onReplay={handleReplay} movieId = {movieId} />
       <div className="mt-40 md:mt-0">
        <iframe
          key={key}
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
