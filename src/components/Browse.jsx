import React from "react";
import Header from "./Header";
import useFetchNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useFetchNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
