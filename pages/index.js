import React from "react";
import ReactDOM from "react-dom";
import { Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Typography variant="h1" component="h1">
        Rick and Morty App
      </Typography>
      <br />
      <Typography variant="h5" component="h2">
        Discover more on the following pages:
      </Typography>
      <br />
      <Button variant="contained" color="characters">
        Characters
      </Button>
      <br />
      <Button>Filter by specialization</Button>
      <br />
      <Button>Favorites</Button>
    </div>
  );
};

export default Home;
