import Task from "./Task";

const ListTask = ({ list, filter }) => {
  return (
    <div>
      {filter === "all"
        ? list.map((el) => (
            <div>
              <Task item={el} />
            </div>
          ))
        : filter === "completed"
        ? list
            .filter((el) => el.isDone === true)
            .map((el) => (
              <div>
                <Task item={el} />
              </div>
            ))
        : list
            .filter((el) => el.isDone === false)
            .map((el) => (
              <div>
                <Task item={el} />
              </div>
            ))}
    </div>
  );
};

export default ListTask;
