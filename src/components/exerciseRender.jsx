import React from "react";
import { Grid, Chip, Card, CardContent } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

export default function ExerciseRender({ component }) {
  return (
    <Grid 
      item 
      md={6} 
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center" 
      }}
    >
      <Chip 
        label="render" 
        color="primary" 
        variant="outlined"
        sx={{
          marginBottom: "-15px",
          zIndex: "10",
          backgroundColor: "white"
        }} 
      />
      <Card
        variant="outlined"
        sx={{
          borderColor: `${lightBlue[600]} !important`,
          height: "100%",
          width: "100%",
          marginTop: "3px",
          boxShadow: 'rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px',
          borderRadius: 2
        }}
      >
        <CardContent 
          sx={{
            padding: "10px !important",
            color: "white",
            backgroundColor: `${lightBlue[700]}`,
            height: "100%",
            h1: {margin: 0}
          }}
        >
          { component }
        </CardContent>
      </Card>
    </Grid>
  )
}