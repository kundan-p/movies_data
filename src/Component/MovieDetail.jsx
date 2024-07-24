import { Box, CardMedia, Typography } from "@mui/material";

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
      <Box sx={{ fontWeight: "bold" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textTransform: "capitalize" }}
        >
          Title: {state.title}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ textTransform: "capitalize" }}
        >
          Description: {state.description}
        </Typography>
        <Box sx={{ display: "flex", gap: "25px" }}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ textTransform: "capitalize" }}
          >
            Director: {state.director}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ textTransform: "capitalize" }}
          >
            Producer: {state.producer}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ textTransform: "capitalize" }}
          >
            Cast:
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ textTransform: "capitalize", display: "flex" }}
          >
            {state.cast.map((x) => `${x}, `)}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ textTransform: "capitalize" }}
        >
          Release Date : {state.release_date}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ textTransform: "capitalize" }}
        >
          Duration : {state.duration}
        </Typography>

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
      </Box>
    </>
  );
}

export default MovieDetail;
