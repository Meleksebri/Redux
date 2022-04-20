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
  return (
    <div>
      <input
        placeholder="Add your ToDo task"
        type="text"
        value={todoTask.description}
        onChange={handleChange}
      ></input>
      <button onClick={onSubmit}>ADD TO DO</button>
    </div>
  );
};

export default AddTask;
