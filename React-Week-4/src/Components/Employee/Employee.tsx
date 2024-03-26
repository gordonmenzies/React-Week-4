import "./Employee.scss";
import Counter from "../Counter/Counter";
import { useState } from "react";

type EmployeeProps = {
  name: string;
  role: string;
};

const Employee = ({ name, role }: EmployeeProps) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="employee__container">
      <p>{name}</p>
      <p>{role}</p>
      <Counter count={counter} increment={increment} decrement={decrement} />
    </div>
  );
};

export default Employee;
