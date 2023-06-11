import React from "react";
import MovieCard from "./MovieCard";

// import MovieDetails from "./MovieDetails";

function MoviesList({ movies }) {

  return (
    <>
      <h1>Movies List</h1>
      <div className="row m-0">
        {movies.map((movies) => {
          return (
            <>
              <div className="col col-md-6 col-lg-3" key={movies.id}>
                <MovieCard movie={movies} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MoviesList;
