import Task from "./Task";
// show the list of our tasks based on the status (filter prop) we choose (completed , incompleted  or all)
const ListTask = ({ list, filter }) => {
  return (
    <div>
      {filter === "all"
        ? list.map((el) => (
            <div className="todo-row">
              <Task item={el} />
            </div>
          ))
        : filter === "completed"
        ? list
            .filter((el) => el.isDone === true)
            .map((el) => (
              <div className="todo-row">
                <Task item={el} />
              </div>
            ))
        : list
            .filter((el) => el.isDone == false)
            .map((el) => (
              <div className="todo-row">
                <Task item={el} />
              </div>
            ))}
    </div>
  );
};

export default ListTask;
