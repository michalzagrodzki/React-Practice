import React, {lazy, useState, useEffect} from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router-dom';
import ExercisesData from './../Data/exercises';

SyntaxHighlighter.registerLanguage('javascript', js);

export default function Exercise() {
  const { name } = useParams();
  const exercise = ExercisesData[name];
  const [exerciseTitle, setExerciseTitle] = useState("");
  const [exerciseCaption, setExerciseCaption] = useState("");
  const [exerciseCodeString, setExerciseCodeString] = useState("");
  const [ExerciseComponent, setExerciseComponent] = useState(lazy(() => import(`./../Exercises/empty`)));
  
  useEffect(() => {
    setExerciseTitle(exercise.title);
    setExerciseCaption(exercise.description)
    setExerciseCodeString(exercise.codeString);
    setExerciseComponent(lazy(() => import(`./../Exercises/${exercise.componentName}`)));
  }, []);
  
  return (
    <div>
      <h1>{ exerciseTitle }</h1>
      <p>{ exerciseCaption }</p>
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