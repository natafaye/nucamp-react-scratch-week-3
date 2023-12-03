import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SpecialComponent from './SpecialComponent';
import AnotherComponent from './AnotherComponent';

function App() {
  const [counter, setCounter] = useState(0)
  const [isShowing, setIsShowing] = useState(false)

  function onAddClick() {
    // Can't set state directly
    //counter = 5

    // Correct way to update state
    setCounter(counter + 1)
  }

  // use effect is the dishwasher (in the restaurant metaphor)
  useEffect(() => {
    document.title = `(${counter}) Our App`
    // imagine this take a very long time
    console.log("running side effect")

  }, [counter]) // only run this effect again if something in this array has changed
  // Thing to be aware of:
  // in development mode, React renders a component twice the first time

  useEffect(() => {
    console.log("running on first render")
  }, []) // only run this ONCE when the component first loads in
  // This will run twice because of React's development mode extra check

  console.log("in rendering function")

  return (
    <div>
      I'm at { counter }
      <button onClick={onAddClick}>Add 1 to counter</button>
      { isShowing ? <p>I'm showing</p> : null }
      <button onClick={() => setIsShowing(!isShowing)}>Show/Hide</button>
      <SpecialComponent/>
      <AnotherComponent/>
    </div>
  );
}

export default App;
