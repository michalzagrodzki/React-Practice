const exercises = {
  "usestate": {
    title: "useState hooks",
    description: "Presentation of useState hooks",
    codeString: `function Exercise() {
      return (
        <div>
          <h1>This is react example</h1>
        </div>
      );
    }`,
    componentName: "usestate"
  },
  "usestatehook": {
    title: "useState increment hook",
    description: "useState hooks with increment",
    codeString: `function Counter(props) {
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
    }`,
    componentName: "usestatehook"
  }
}

export default exercises;