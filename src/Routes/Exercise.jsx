import React, {lazy, useState, useEffect} from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router-dom';
import { Grid, Box, Card, CardContent, Chip} from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import ExercisesData from '../Data/exercises';
import ExerciseHeader from '../components/exerciseHeader';

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
  const layoutWidth = 1200;
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        height: "100vh",
        background: `linear-gradient(0.35turn, #015f92, #0a4260);`
      }}
    >
      <ExerciseHeader 
        title={exerciseTitle} 
        caption={exerciseCaption}
        width={layoutWidth}
      />
      <Grid 
        container 
        spacing={1}
        alignItems="stretch"
        maxWidth={layoutWidth}
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
              borderColor: `${lightBlue[800]} !important`,
              width: "100%",
              boxShadow: 'rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px',
              borderRadius: 2
            }}
            variant="outlined"
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
              borderColor: `${lightBlue[600]} !important`,
              height: "100%",
              width: "100%",
              marginTop: "3px",
              boxShadow: 'rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px',
              borderRadius: 2
            }}
            variant="outlined"
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
              <ExerciseComponent />
            </CardContent>
          </Card>
        </Grid>
    </Grid>
    </Box>
  );
}