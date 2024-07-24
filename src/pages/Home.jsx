import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import moment from "moment";

import { UsemovieContext } from "../Context/movieContext";

export const Home = () => {
  const { data } = UsemovieContext();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const openModal = (MovieDetail) => {
    navigate(`/movieDetails/${MovieDetail.id}`, { state: MovieDetail });
  };
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          style={{
            backgroundColor: "white",
            width: "370px",
            borderRadius: "5px",
            padding: "10px 0px",
            paddingLeft: "5px",
            margin: "10px 0",
          }}
        />

        <Grid container spacing={2}>
          {data
            ?.filter((x) => x?.title.toLowerCase().includes(search))
            .map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    borderRadius: "10px",
                  }}
                  onClick={() => openModal(movie)}
                >
                  <CardMedia
                    component="img"
                    alt="movie"
                    sx={{ height: "400px", objectFit: "fill" }}
                    image={movie.image}
                  />
                  <CardContent sx={{ height: 80 }}>
                    <Typography variant="h6" gutterBottom>
                      Title: {movie.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Release Date:{" "}
                      {moment(`${movie.release_date}`).format("DD-MM-YYYY")}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
