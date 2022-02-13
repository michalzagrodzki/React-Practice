import React from "react";
import { Grid, Container, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

export default function Header({ title, caption }) {
  return (
    <Grid item md={4}>
      <Container>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{background: `linear-gradient(to right, ${lightBlue[50]}, ${lightBlue[200]})`,
            backgroundClip: "text",
            textFillColor: "transparent"}}
        >
          { title }
        </Typography>
        <Typography 
          variant="h6" 
          component="h4" 
          gutterBottom 
          sx={{color: "white"}}
        >
          { caption }
        </Typography>
      </Container>
    </Grid>
  )
}