import Employee from "./Components/Employee/Employee";
import team from "./assets/team";
import "./App.scss";
//import Team from "./assets/teamType";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [teamArray, setTeamArray] = useState(team);
  // save the original array so that the values that are entered are rememebered

  // setTeamArray(team);

  const employeeList = teamArray.map((member) => {
    return <Employee key={member.id} name={member.name} role={member.role} />;
  });

  // how to update to the new inputValue rather than the previous inputValue

  const searchEmployee = (event: React.FormEvent<HTMLInputElement>) => {
    console.log("event.target", event.currentTarget.value.toLowerCase());
    setInputValue(event.currentTarget.value.toLowerCase());
    console.log("inputValue", inputValue);
    const searchedGroup = teamArray.filter((member) => {
      return member.name.toLowerCase().includes(inputValue);
    });
    setTeamArray(searchedGroup);
    if (inputValue === "") {
      setTeamArray(team);
    }
  };

  return (
    <div className="tiketTracker__container">
      <h1> Ticket Tracker</h1>
      <input
        type="text"
        className="ticketTracker__employeeSearchInput"
        onChange={searchEmployee}
      />
      <button
        className="ticketTrackee__employeeListReset"
        onClick={() => {
          setTeamArray(team);
          setInputValue("");
        }}
      >
        reset list
      </button>
      <div className="employeeList__container">{employeeList}</div>
    </div>
  );
}

export default App;
