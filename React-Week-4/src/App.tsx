import Employee from "./Components/Employee/Employee";
import team from "./assets/team";
import "./App.scss";
import { useState } from "react";

interface CounterState {
  [key: number]: number;
}

function App() {
  const [teamArray, setTeamArray] = useState(team);
  const [counters, setCounters] = useState<CounterState>({});

  // a function to increment the count
  // called by onClick in Counter element
  const increment = (key: number) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [key]: (prevCounters[key] || 0) + 1,
    }));
  };

  // a function to increment the count
  // called by onClick in Counter element
  const decrement = (key: number) => {
    if (counters[key] === 0) {
      return;
    } else {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [key]: (prevCounters[key] || 0) - 1,
      }));
    }
  };

  // set state array with only elements that fit the search terms
  const searchEmployee = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.toLowerCase();
    const searchedGroup = team.filter((member) => {
      return member.name.toLowerCase().includes(value);
    });
    setTeamArray(searchedGroup);
    if (value === "") {
      setTeamArray(team);
    }
  };

  // set state array with only elements that fit the search terms
  const searchRole = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value.toLowerCase();
    const searchedGroup = team.filter((member) => {
      return member.role.toLowerCase().includes(value);
    });
    setTeamArray(searchedGroup);
    if (value === "") {
      setTeamArray(team);
    }
  };

  return (
    <div className="ticketTracker__container">
      <h1>Ticket Tracker</h1>
      <div className="ticketTracker__searchContainer">
        <input
          placeholder="Search By Name"
          type="text"
          className="ticketTracker__employeeSearchInput"
          onChange={searchEmployee}
        />
        <select className="ticketTracker__roleSelect" onChange={searchRole}>
          <option value="">All Roles</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Junior Software Developer">
            Juniour Software Developer
          </option>
          <option value="Project Manager">Project Manager</option>
          <option value="Tester">Tester</option>
          <option value="Hard Man">Hard Man</option>
        </select>
      </div>
      <div className="employeeList__container">
        {teamArray.map((member) => {
          return (
            <Employee
              key={member.id}
              name={member.name}
              role={member.role}
              increment={() => increment(member.id)}
              decrement={() => decrement(member.id)}
              count={counters[member.id]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
