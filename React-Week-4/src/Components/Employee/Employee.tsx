import "./Employee.scss";

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
      <div className="counter__container">
        <h3 onClick={() => decrement(key)}>-</h3>
        <h3>{count}</h3>
        <h3 onClick={() => increment(key)}>+</h3>
      </div>
    </div>
  );
};

export default Employee;
