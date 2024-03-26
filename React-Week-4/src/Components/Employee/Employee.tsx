import "./Employee.scss";
import Counter from "../Counter/Counter";

type EmployeeProps = {
  name: string;
  role: string;
  count: number;
  key: number;
  increment: (key: number) => void;
  decrement: (key: number) => void;
};

const Employee = ({
  name,
  role,
  count,
  key,
  increment,
  decrement,
}: EmployeeProps) => {
  return (
    <div className="employee__container">
      <p>{name}</p>
      <p>{role}</p>
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        key={key}
      />
    </div>
  );
};

export default Employee;
