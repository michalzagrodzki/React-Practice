import React from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Grid, Chip, Card, CardContent } from '@mui/material';
import { lightBlue } from '@mui/material/colors';

SyntaxHighlighter.registerLanguage('javascript', js);

export default function ExerciseSyntax({ syntax }) {
  const syntaxBoxStyles = {
    margin: 0
  }

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
            { syntax }
          </SyntaxHighlighter>
        </CardContent>
      </Card>
    </Grid>
  )
}