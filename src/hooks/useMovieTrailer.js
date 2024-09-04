import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addtrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results?.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    // setTrailer(trailer);
    dispatch(addtrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
