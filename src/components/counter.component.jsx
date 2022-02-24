import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation((prevState) => prevState + count);
  }, [count]); // <- add the count variable here

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setTimer((t) => t + 1);
      // console.log("I'm working! Yay!");
      // console.log("Yay!");
      console.log("Timer worked.");
    }, 1.5 * 1000);

    
    return function cleanup() {
      console.log("Timer is cleaned.");
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>

      <p>Time: {timer}</p>
    </>
  );
}

export default Counter;
