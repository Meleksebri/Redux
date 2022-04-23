import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completedTodos, removeTodos, updateTodos } from "../redux/reducer";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
const Task = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const handleDoubleClick = () => {
    setEdit(true);
  };

  const update = (id, value, e) => {
    if (e.which == 13) {
      dispatch(updateTodos({ id, description: value }));
      setEdit(false);
    }
  };

  const deleted = (id) => {
    dispatch(removeTodos(id));
  };

  const done = (id) => {
    dispatch(completedTodos(id));
  };

  return (
    <div className="inrow">
      {/* if we want to edit the task , the value of edit will change to true , in this case we will show an input element that is editable so we can change  the task
      but if the value of edit is false we will just show a paragraph that contains our task */}
      {edit ? (
        <input
          disabled={false}
          defaultValue={item.description}
          onKeyPress={(e) => update(item.id, e.target.value, e)}
          autoFocus
        />
      ) : (
        <p className={item.isDone ? "complete" : ""}>{item.description}</p>
      )}
      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => deleted(item.id)}
        />
        <TiEdit className="edit-icon" onClick={handleDoubleClick} />
        <IoCheckmarkDoneSharp onClick={() => done(item.id)} />
      </div>
    </div>
  );
};

export default Task;
