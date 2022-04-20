import AddTask from "./components/AddTask.js";
import ListTask from "./components/ListTask.js";
import "./App.css";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const list = useSelector((state) => {
    return state;
  });

  const donelist = list.filter((el) => el.isDone === true);
  const undonelist = list.filter((el) => el.isDone === false);
  console.log(donelist);
  console.log(undonelist);

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
    <div className="App">
      <AddTask />
      <button onClick={alltasks}>ALL</button>
      <button onClick={donetasks}>Done tasks</button>
      <button onClick={undonetasks}>Undone tasks</button>
      <ListTask list={list} filter={filtered} />
    </div>
  );
}

export default App;
