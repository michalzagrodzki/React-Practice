import { Grid, Container, Box} from '@mui/material';
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import ExerciseCard from "../components/card";
import Empty from "../components/empty"
import ExercisesList from "../Data/exercisesList"

export default function Home() {
  const [exerciseLinks, setExerciseLinks] = useState([]);
  useEffect(() => {
    setExerciseLinks(ExercisesList)
  }, []);
  
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        height: "100vh",
        backgroundColor: 'primary.dark',
      }}
    >
      <Grid 
        container 
        spacing={0}
        alignItems="center"
        maxWidth={1600}
      >
        <Header 
          title={"React exercises"}
          caption={"Dive into react exercises. See different approaches, use of libraries and methods."}
        />
        <Grid item md={8}>
          <Container>
            <Grid container spacing={2}>
              {
                exerciseLinks.length > 0 &&
                exerciseLinks.map((link, index) => {
                return (
                  <ExerciseCard
                    key={index}
                    title={link.title} 
                    content={link.description} 
                    link={link.link} 
                  />
                )})
              }
              {
                exerciseLinks.length === 0 &&
                <Empty message={"No links available"} />
              }
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}