import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { lightBlue, grey } from '@mui/material/colors';

export default function ExerciseCard({ title, content, link }) {
  let navigate = useNavigate();

  async function handleNavigation(event) {
    event.preventDefault();
    navigate(`../exercise/${link}`);
  }

  return (
    <Card 
      sx={{
        minWidth: 275,
        backgroundColor: "transparent",
        borderColor: `${lightBlue[700]}`,
        boxShadow: 'rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px',
        borderRadius: 2
      }}
      onClick={handleNavigation}
      variant="outlined"
    >
      <CardContent>
        <Typography 
          variant="h5" 
          component="div" 
          sx={{color: `${grey[50]}`}}
        >
          { title }
        </Typography>
        <Typography 
          variant="body2" 
          sx={{color: `${lightBlue[100]}`}}
        >
          { content }
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          sx={{color: `${lightBlue[50]}`}}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}