import React, {lazy, useState, useEffect} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Exercise() {
  const ComponentName = "usestate";
  const [exerciseTitle, setExerciseTitle] = useState("This is react exercise");
  const [exerciseCodeString, setExerciseCodeString] = useState("");
  const [ExerciseComponent, setExerciseComponent] = useState(lazy(() => import(`./../Exercises/${ComponentName}`)));
  
  useEffect(() => {
    setExerciseTitle("This is react exercise");
    setExerciseCodeString(`function Exercise() {
      return (
        <div>
          <h1>This is react example</h1>
        </div>
      );
    }`);
    setExerciseComponent(lazy(() => import(`./../Exercises/${ComponentName}`)));
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