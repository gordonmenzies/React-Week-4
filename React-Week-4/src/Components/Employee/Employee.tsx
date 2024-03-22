import "./Employee.scss";
import Counter from "../Counter/Counter";

type EmployeeProps = {
  name: string;
  role: string;
};

const Employee = ({ name, role }: EmployeeProps) => {
  return (
    <div className="employee__container">
      <p>{name}</p>
      <p>{role}</p>
      <Counter />
    </div>
  );
};

export default Employee;
