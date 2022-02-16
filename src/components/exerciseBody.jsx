import React from "react";
import { Grid } from '@mui/material';

export default function ExerciseBody({ width, children }) {
  return (
    <Grid 
      container 
      spacing={1}
      alignItems="stretch"
      maxWidth={width}
    >
      {children}
    </Grid>
  )
}