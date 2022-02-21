import { useState } from "react";

function Counter(props) {
  return (
    <div>{props.counter}</div>
  )
}

function Decrement(props) {
  function handleClick() { props.onClick(props.decrementInt)};
  return (
  <button onClick={handleClick} >Decrement: {props.decrementInt}</button>
  )
}

function Exercise_4() {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState)
  function decrement(value) { setCounter(counter - value)}
  return (
    <div>
      <header>
        <Counter counter={counter} />
        <Decrement onClick={decrement} decrementInt={13} />
      </header>
    </div>
  );
}

export default Exercise_4;
