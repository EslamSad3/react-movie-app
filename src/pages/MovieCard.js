import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFav } from "../store/slices/favSlices";
import Favorite from "../store/slices/Favorite";




function MovieCard({ movie }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleAddToFav = (movie)=>{
    dispatch(addToFav(movie));
    <Favorite movie={movie}></Favorite>
  }

  return (
    <>
      <Card className="h-100 my-3  justify-content-end text-center" style={{ width: "18rem" }} key={movie.id}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{movie.original_title}</Card.Title>
          <Button className="btn btn-success m-auto" onClick={()=>handleAddToFav(movie)}>Add to Fav</Button>
          <Button className="btn btn-primary m-auto" onClick={()=>navigate(`/moviedetails/${movie.id}`)}>Movie Details</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieCard;
