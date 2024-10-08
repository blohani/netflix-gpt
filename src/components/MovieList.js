import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-7">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-y-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
          <MovieCard posterPath={movies?.[0].poster_path} />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
