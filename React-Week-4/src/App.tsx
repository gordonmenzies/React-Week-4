import Employee from "./Components/Employee/Employee";
import team from "./assets/team";
import "./App.scss";
//import Team from "./assets/teamType";
import { useState } from "react";

function App() {
  //const [inputValue, setInputValue] = useState("");
  const [teamArray, setTeamArray] = useState(team);

  setTeamArray(team);

  const teamTSX = teamArray.map((member) => {
    return <Employee key={member.id} name={member.name} role={member.role} />;
  });

  // const searchEmployee = (event: React.FormEvent<HTMLInputElement>) => {
  //   setInputValue(event.currentTarget.value.toLowerCase);
  //   const searchedGroup = teamArray.filter((member) => {
  //     return member.name.includes(inputValue);
  //   });

  //   console.log(searchedGroup);
  // };

  return (
    <div className="tiketTracker__container">
      <h1> Ticket Tracker</h1>
      {/* <input
        type="text"
        className="ticketTracker__employeeSearchInput"
        value={inputValue}
        onChange={searchEmployee}
      ></input> */}
      <div className="employeeList__container">{teamTSX}</div>
    </div>
  );
}

export default App;
