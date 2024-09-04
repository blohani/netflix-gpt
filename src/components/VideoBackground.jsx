import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  const trailerVideoURL = "https://www.youtube.com/embed/" + trailerVideo?.key;
  return (
    <div className="absolute top-0 w-screen z-0 pb-72">
      <iframe
        src={trailerVideoURL + "?autoplay=1&mute=1"}
        className="w-screen aspect-video"
        allow="autoplay"
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
