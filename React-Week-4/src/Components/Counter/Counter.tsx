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
      <h3 onClick={increment}>-</h3>
      <h3>{counter}</h3>
      <h3 onClick={decrement}>+</h3>
    </div>
  );
};

export default Counter;
