import { useState } from "react";

function Counter(props) {
  return (
    <p>Counting: { props.counter }</p>
  );
}

function Increment(props) {
  function handleClick () { props.onClick(props.increment) };
  return (
    <button onClick={handleClick}>+ {props.increment}</button>
  );
}
function Exercise_2() {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState)
  function incrementCounter(increment) { setCounter(counter + increment) };

  return (
    <div>
      <header>
        <Counter counter={counter}/>
        <Increment onClick={incrementCounter} increment={10} />
        <Increment onClick={incrementCounter} increment={5}/>
        <Increment onClick={incrementCounter} increment={15}/>
        <Increment onClick={incrementCounter} increment={23}/>
      </header>
    </div>
  );
}

export default Exercise_2;
