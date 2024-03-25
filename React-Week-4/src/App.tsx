import Employee from "./Components/Employee/Employee";
import team from "./assets/team";
import "./App.scss";
//import Team from "./assets/teamType";
import { useState } from "react";

function App() {
  const [teamArray, setTeamArray] = useState(team);

  // set state array with only elements that fit the search terms
  const searchEmployee = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.toLowerCase();
    const searchedGroup = teamArray.filter((member) => {
      return member.name.toLowerCase().includes(value);
    });
    setTeamArray(searchedGroup);
    if (value === "") {
      setTeamArray(team);
    }
  };

  // set state array with only elements that fit the search terms
  const searchRole = (event: React.FormEvent<HTMLSelectElement>) => {
    let searchedGroup = [...team];
    const value = event.currentTarget.value.toLowerCase();
    searchedGroup = team.filter((member) => {
      return member.role.toLowerCase().includes(value);
    });
    setTeamArray(searchedGroup);
    if (value === "") {
      setTeamArray(team);
    }
  };

  // map over list of employees
  const employeeList = teamArray.map((member) => {
    return <Employee key={member.id} name={member.name} role={member.role} />;
  });

  return (
    <div className="ticketTracker__container">
      <h1>Ticket Tracker</h1>
      <div className="ticketTracker__searchContainer">
        <label>Search By Name</label>
        <input
          type="text"
          className="ticketTracker__employeeSearchInput"
          onChange={searchEmployee}
        />
        <select className="ticketTracker__roleSelect" onChange={searchRole}>
          <option value="">--Search By Role--</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Junior Software Developer">
            Juniour Software Developer
          </option>
          <option value="Project Manager">Project Manager</option>
          <option value="Tester">Tester</option>
          <option value="Hard Man">Hard Man</option>
        </select>
      </div>
      <div className="employeeList__container">{employeeList}</div>
    </div>
  );
}

export default App;
