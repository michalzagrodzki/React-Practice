import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material';

export default function ExerciseCard({ title, content, link }) {
  let navigate = useNavigate();

  async function handleNavigation(event) {
    event.preventDefault();
    navigate(`../exercise/${link}`);
  }

  return (
    <Card 
      sx={{ minWidth: 275 }} 
      onClick={handleNavigation}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}