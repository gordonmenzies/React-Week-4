import Employee from "./Components/Employee/Employee";
import team from "./assets/team";
import "./App.scss";
import Team from "./assets/teamType";
//import { useState } from "react";

function App() {
  const teamArray: Team[] = [...team];

  const teamTSX = teamArray.map((member) => {
    return <Employee name={member.name} role={member.role} />;
  });

  return (
    <div className="tiketTracker__container">
      <h1> Ticket Tracker</h1>
      <div className="employeeList__container">{teamTSX}</div>
    </div>
  );
}

export default App;
