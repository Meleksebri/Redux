import AddTask from "./components/AddTask.js";
import ListTask from "./components/ListTask.js";
import "./App.css";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const list = useSelector((state) => {
    return state;
  });

  const [filtered, setFiltered] = useState("all");

  const donetasks = (e) => {
    e.preventDefault();
    setFiltered("completed");
  };

  const undonetasks = (e) => {
    e.preventDefault();
    setFiltered("un");
  };

  const alltasks = (e) => {
    e.preventDefault();
    setFiltered("all");
  };

  return (
    <div className="todo-app">
      <h1>What's the Plan for Today?</h1>
      <AddTask />
      <div className="filter-container">
        <button className="filter" onClick={alltasks} autoFocus>
          All
        </button>
        <button className="filter" onClick={donetasks}>
          Completed
        </button>
        <button className="filter" onClick={undonetasks}>
          Incompleted
        </button>
      </div>

      <ListTask list={list} filter={filtered} />
    </div>
  );
}

export default App;
