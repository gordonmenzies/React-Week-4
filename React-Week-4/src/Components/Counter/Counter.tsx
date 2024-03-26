import "./Counter.scss";

type CountProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const Counter = ({ count, increment, decrement }: CountProps) => {
  return (
    <div className="counter__container">
      <h3 onClick={decrement}>-</h3>
      <h3>{count}</h3>
      <h3 onClick={increment}>+</h3>
    </div>
  );
};

export default Counter;
