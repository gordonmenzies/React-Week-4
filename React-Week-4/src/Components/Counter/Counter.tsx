import "./Counter.scss";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter__container">
      <h1 onClick={increment}>+</h1>
      <p>{counter}</p>
      <h1 onClick={decrement}>-</h1>
    </div>
  );
};

export default Counter;
