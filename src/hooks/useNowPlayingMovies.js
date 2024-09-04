// import React, { useDispatch } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  // ------Fetch using async and await------

  const getMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  // ------Fetch using then, catch, finally------
  // const getMovieData = () => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  //   )
  //     .then((data) => data.json())
  //     .then((json) => dispatch(addNowPlayingMovies(json.results)))
  //     .catch((err) => console.log("err: ", err))
  //     .finally(() =>
  //       console.log("finally called after resolve, reject completes")
  //     );
  // };
  // ------Fetch using then------

  useEffect(() => {
    getMovieData();
  }, []);
};

export default useNowPlayingMovies;
