import React from "react";
import { Grid, Typography } from '@mui/material';

export default function ExerciseHeader({ title, caption, width }) {
  const fontColor = "white";
  return (
    <Grid 
      container 
      spacing={0}
      alignItems="center"
      maxWidth={width}
      flexDirection="column"
    >
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        sx={{
          color: fontColor
        }}
      >
        { title }
      </Typography>
      <Typography 
        variant="h6" 
        component="h4" 
        gutterBottom 
        sx={{
          color: fontColor
        }}
      >
        { caption }
      </Typography>
    </Grid>
  )
}