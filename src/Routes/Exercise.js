import React, {lazy} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Exercise() {
  const codeString = `function Exercise() {
    return (
      <div>
        <h1>This is react example</h1>
      </div>
    );
  }`
  const ComponentName = "usestate";
  const ExerciseComponent = lazy(() => import(`./../Exercises/${ComponentName}`));

  return (
    <div>
      <h1>This is react exercise</h1>
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {codeString}
      </SyntaxHighlighter>
      <ExerciseComponent />
    </div>
  );
}