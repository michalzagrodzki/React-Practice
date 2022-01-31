import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import JsxParser from 'react-jsx-parser'

export default function Exercise() {

  const codeString = `function Exercise() {
    return (
      <div>
        <h1>This is react example</h1>
      </div>
    );
  }`

  const codeBlock = `<div>
    <h1>This is react example</h1>
  </div>`

  return (
    <div>
      <h1>This is react exercise</h1>
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {codeString}
      </SyntaxHighlighter>
      <JsxParser
        jsx={codeBlock}
      />
    </div>
  );
}