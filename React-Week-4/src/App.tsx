import Employee from "./Components/Employee/Employee";
import team from "./assets/team";
//import { useState } from "react";

function App() {
  return (
    <div className="tiketTracker__container">
      <h1> Ticket Tracker</h1>
      <div className="employeeList__container">
        <Employee name={team[0].name} role={team[0].role} />
      </div>
    </div>
  );
}

export default App;
