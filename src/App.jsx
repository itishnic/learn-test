

import CardList from './components/CardList/CardList'
import { useState, useEffect } from "react";
import CounterComponent from './components/CounterComponent/CounterComponent'
import Descriptions from './components/Descriptions/Descriptions';
import Feedback from './components/Feedback/Feedback';
// import css from './App.css'
// import clsx from "clsx";




const CounterComponentWithState = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <p>{counter}</p>
    </>
  )
}




function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleIncrementA = () => {
     setState({ ...state, good: state.good + 1 });
  }
  
  const handleIncrementB = () => {
     setState({ ...state, neutral: state.neutral + 1 });
     
  }
  
  const handleIncrementC = () => {
    setState({ ...state, bad: state.bad + 1 });
  };

  const handleIncrementD = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };


  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
 


  const updateFeedback = (feedbackType) => {
   setState({ ...state, feedbackType: state.feedbackType + 1 });
  };

  let totalFeedback = state.good + state.neutral + state.bad;
  // const classNames = clsx(!totalFeedback ? css.onLine : css.ofLine);


  return (
    <div>
      <Descriptions />
      <CounterComponent value={"Good"} handleIncrement={handleIncrementA} />
      <CounterComponent value={"Neutral"} handleIncrement={handleIncrementB} />
      <CounterComponent value={"Bad"} handleIncrement={handleIncrementC} />
      {/* <CounterComponent value={"Reset"} handleIncrement={handleIncrementD} /> */}
      {totalFeedback && (
        <CounterComponent value={"Reset"} handleIncrement={handleIncrementD} />
      )}
      {/* <button onClick={() => setState(0)}>Reset</button> */}
      {/* <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button> */}
      {!totalFeedback && <p>No feedback yet</p>}
      <Feedback value={state} />
    </div>
  );
}

export default App
