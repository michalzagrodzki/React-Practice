const exercises = {
  "usestate": {
    title: "useState hooks",
    description: "Basic useState hook case",
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
  },
  "wordslist": {
    title: "Wordslist",
    description: "useState hook counting words",
    codeString: `function WordsList(props) {
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
    }`,
    componentName: "wordslist"
  },
  "decrement": {
    title: "Decrement",
    description: "useState hooks with decrement",
    codeString: `function Counter(props) {
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
    }`,
    componentName: "decrement"
  },
}

export default exercises;