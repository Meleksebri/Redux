import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { completedTodos, removeTodos, updateTodos } from "../redux/reducer";
const Task = ({ item }) => {
  const dispatch = useDispatch();

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which == 13) {
      dispatch(updateTodos({ id, description: value }));
      inputRef.current.disabled = true;
    }
  };

  const deleted = (id) => {
    dispatch(removeTodos(id));
  };

  const done = (id) => {
    dispatch(completedTodos(id));
  };
  return (
    <div>
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.description}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />

      <button onClick={() => deleted(item.id)}>Delete</button>
      <button onClick={() => changeFocus()}>Edit</button>
      <button onClick={() => done(item.id)}>Done</button>
    </div>
  );
};

export default Task;
