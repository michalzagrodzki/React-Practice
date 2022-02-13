import React from "react";
import { Grid, Container, Typography } from '@mui/material';

export default function Header({ title, caption }) {
  return (
    <Grid item md={4}>
      <Container>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{color: "white"}}
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