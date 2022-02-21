import { useState } from "react";

function WordsList(props) {
  if (props.list && props.list.length > 0) {
    return (
    props.list.map((word, idx) => <p key={idx}>{word}</p>)
    )
  }
  return (
    <p>No words established</p>
  )
  
}

function AddWord(props) {
  function handleClick () { props.onClick(props.label) }
  return(
    <button onClick={handleClick}>Add: {props.label}</button>
  )
}
function Exercise_3() {
  const initialState = []
  const [words, setWords] = useState(initialState)
  function addNewWord(word) {
    setWords([...words, word])
  }
  return (
    <div>
      <header>
        <WordsList list={words} />
        <AddWord onClick={addNewWord} label={"word"}/>
      </header>
    </div>
  );
}

export default Exercise_3;
