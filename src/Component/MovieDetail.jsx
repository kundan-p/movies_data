import { Card, CardMedia } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function MovieDetail() {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <CardMedia
        component="img"
        alt="movie"
        style={{ margin: "auto" }}
        sx={{ height: "390px", width: "260px", objectFit: "fill" }}
        image={state.image}
      />
      <div style={{ fontWeight: "bold" }}>
        <h2>{state.title}</h2>
        <h4>{state.description}</h4>
        <div style={{ display: "flex", gap: "25px" }}>
          <p>Director : {state.director}</p>
          <p>Producer : {state.producer}</p>
        </div>
        <div style={{ display: "flex" }}>
          <p>Cast:</p>
          <p style={{ display: "flex" }}>{state.cast.map((x) => `${x}, `)}</p>
        </div>
        <p>Release Date : {state.release_date}</p>
        <p>Duration : {state.duration}</p>
        <button style={{ backgroundColor: "red" }}>
          <a
            href={state.trailer}
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
              padding: "5px",
            }}
          >
            Trailer
          </a>
        </button>
      </div>
    </>
  );
}

export default MovieDetail;
