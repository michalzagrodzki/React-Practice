import React, {lazy, useState, useEffect} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router-dom';
import ExercisesData from './../Data/exercises';

export default function Exercise() {
  const { name } = useParams();
  const exercise = ExercisesData[name];
  const [exerciseTitle, setExerciseTitle] = useState("");
  const [exerciseCodeString, setExerciseCodeString] = useState("");
  const [ExerciseComponent, setExerciseComponent] = useState(lazy(() => import(`./../Exercises/empty`)));
  
  useEffect(() => {
    setExerciseTitle(exercise.title);
    setExerciseCodeString(exercise.codeString);
    setExerciseComponent(lazy(() => import(`./../Exercises/${exercise.componentName}`)));
  }, []);
  
  return (
    <div>
      <h1>{ exerciseTitle }</h1>
      <SyntaxHighlighter 
        language="javascript" 
        style={atomOneDark}
      >
        { exerciseCodeString }
      </SyntaxHighlighter>
      <ExerciseComponent />
    </div>
  );
}