import React, { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import axiosInstance from "../APIs/config";


function Movies() {
const [movies,setMovies] = useState([])
  useEffect(() => {
    axiosInstance
      .get(
        "popular?api_key=357d46d3b0be23510eb44a285e06602a" 
      )
      .then((res) => setMovies(res.data.results)) // resolve promise
      .catch((err)=> console.log(err)) // reject promise
  }, []);
  return <MoviesList movies={movies} />;
}

export default Movies;
