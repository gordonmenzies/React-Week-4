import "./Counter.scss";

type CountProps = {
  count: number;
  key: number;
  increment: (key: number) => void;
  decrement: (key: number) => void;
};

const Counter = ({ count, increment, decrement, key }: CountProps) => {
  return (
    <div className="counter__container">
      <h3 onClick={() => decrement(key)}>-</h3>
      <h3>{count}</h3>
      <h3 onClick={() => increment(key)}>+</h3>
    </div>
  );
};

export default Counter;
