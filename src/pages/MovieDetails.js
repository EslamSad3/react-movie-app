import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axiosInstance from "../APIs/config";


function MovieDetails() {
  const [mymovies, setMyMovies] = useState({});
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    axiosInstance
      .get(`${params.id}?api_key=357d46d3b0be23510eb44a285e06602a`)
      .then((res) => setMyMovies(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);
  return (
    <>
      <Card className="h-100  justify-content-end text-center">
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/original${mymovies.backdrop_path}`}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{mymovies.original_title}</Card.Title>
          <Card.Text>{mymovies.overview}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieDetails;
