import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/reducer";

const AddTask = () => {
  const dispatch = useDispatch();
  const [todoTask, setTodoTask] = useState({
    id: 0,
    description: "",
    isDone: false,
  });
  const handleChange = (e) => {
    setTodoTask({ ...todoTask, description: e.target.value });
  };
  // this fucntion works when we click on the add button
  function onSubmit(e) {
    e.preventDefault();
    if (todoTask.description.trim().length === 0) {
      alert("Enter a task before adding !!");
      setTodoTask("");
      return;
    }

    dispatch(addTodos(todoTask));
    setTodoTask({
      id: Math.random(),
      description: "",
      isDone: false,
    });
  }
  // instead on clicking on the add button u can just press the enter keyboard and everything will work
  function onKeyPress(e) {
    if (e.which === 13) {
      if (todoTask.description.trim().length === 0) {
        e.preventDefault();
        alert("Enter a task before adding !!");
        setTodoTask("");
        return;
      }
      dispatch(addTodos(todoTask));
      setTodoTask({
        id: Math.random(),
        description: "",
        isDone: false,
      });
    }
  }

  return (
    <div>
      <input
        className="todo-input"
        placeholder="Add your ToDo task"
        type="text"
        value={todoTask.description}
        onChange={handleChange}
        onKeyDown={onKeyPress}
      ></input>
      <button className="todo-button" onClick={onSubmit}>
        ADD TO DO
      </button>
    </div>
  );
};

export default AddTask;
