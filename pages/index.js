import ReactDOM from "react-dom";
import { Typography, Button, CardActionArea, CardActions } from "@mui/material";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character")
      .then((response) => {
        console.log(response);
        setData(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <Typography variant="h1" component="h1">
        Rick and Morty
      </Typography>
      <br />
      <Typography variant="h5" component="h2">
        Discover more on the following pages:
      </Typography>
      <br />
      <Button>Characters</Button>
      <br />
      <Button>Favorites</Button>
      <br />
      <br />
      <Grid container item spacing={3}>
        {data.map((character, index) => {
          return (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="450"
                  image={character.image}
                  alt={character.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {character.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Location: {character.location.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Species: {character.species}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Status: {character.status}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gender: {character.gender}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Add to Favorites
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
