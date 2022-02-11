import React, {lazy, useState, useEffect} from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router-dom';
import { Grid, Box, Container, Typography, Card, CardContent, Chip} from '@mui/material';
import ExercisesData from '../Data/exercises';

SyntaxHighlighter.registerLanguage('javascript', js);

export default function Exercise() {
  const { name } = useParams();
  const exercise = ExercisesData[name];
  const [exerciseTitle, setExerciseTitle] = useState("");
  const [exerciseCaption, setExerciseCaption] = useState("");
  const [exerciseCodeString, setExerciseCodeString] = useState("");
  const [ExerciseComponent, setExerciseComponent] = useState(lazy(() => import(`../Exercises/empty`)));
  
  useEffect(() => {
    setExerciseTitle(exercise.title);
    setExerciseCaption(exercise.description)
    setExerciseCodeString(exercise.codeString);
    setExerciseComponent(lazy(() => import(`./../Exercises/${exercise.componentName}`)));
  }, []);
  const syntaxBoxStyles = {
    margin: 0
  }
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
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
      }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom sx={{color: "white"}}
        >
          { exerciseTitle }
        </Typography>
        <Typography 
          variant="h6" 
          component="h4" 
          gutterBottom sx={{color: "white"}}
        >
          { exerciseCaption }
        </Typography>
      </Container>
      <Grid 
        container 
        spacing={1}
        alignItems="stretch"
        maxWidth={1200}
      >
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
            sx={{
              marginBottom: "-15px",
              zIndex: "10",
              backgroundColor: "white"
            }} 
            label="syntax" 
            color="primary" 
            variant="outlined"
          />
          <Card 
            sx={{
              borderColor: "white !important",
              width: "100%",
              boxShadow: 'rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px',
              borderRadius: 2
            }}
          >
            <CardContent 
              sx={{
                padding: "0px !important"
              }}
            >
              <SyntaxHighlighter
                language="javascript" 
                style={atomOneDark}
                customStyle={syntaxBoxStyles}
              >
                { exerciseCodeString }
              </SyntaxHighlighter>
            </CardContent>
          </Card>
        </Grid>
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
            sx={{
              marginBottom: "-15px",
              zIndex: "10",
              backgroundColor: "white"
            }} 
            label="render" 
            color="primary" 
            variant="outlined"
          />
          <Card 
            sx={{
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
                backgroundColor: 'primary.light',
                height: "100%",
                h1: {margin: 0}
              }}
            >
              <ExerciseComponent />
            </CardContent>
          </Card>
        </Grid>
    </Grid>
    </Box>
  );
}