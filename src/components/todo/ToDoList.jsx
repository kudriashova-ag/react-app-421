import React, { useEffect, useReducer, useState } from "react";
import ToDoAdd from "./ToDoAdd";
import ToDoFilter from "./ToDoFilter";
import ToDoItem from "./ToDoItem";
import list from "./data";
import { toDoReducer } from "./toDoReducer";
// import test from  "../../images/1.png";

const filterMap = {
  All: () => true,
  ToDo: (task) => !task.done,
  Done: (task) => task.done,
  "Big Task": (task) => task.title.length > 5,
};

const ToDoList = () => {
  const [tasks, dispatch] = useReducer(toDoReducer, list);

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    dispatch({
      type: "SET_TASKS",
      payload: data ? JSON.parse(data) : list
    });
    const filterData = localStorage.getItem("filter");
    setFilter(filterData ? filterData : "All");
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  const addTask = (title) => {
    dispatch({
      type: "ADD_TASK",
      payload: title,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: id,
    });
  };

  const changeDone = (id) => {
    dispatch({
      type: "CHANGE_DONE",
      payload: id,
    });
  };

  const changeTitle = (id, title) => {
    dispatch({
      type: "CHANGE_TITLE",
      payload: {
        id,
        title,
      },
    });
  };

  return (
    <div>
      <h1 className="welcome">ToDo List</h1>

      {/* <img src={test} alt="test" /> */}

      <div className="todo-list">
        <ToDoAdd addTask={addTask} />
        <ToDoFilter
          filter={filter}
          setFilter={setFilter}
          filterMap={filterMap}
        />
        <div className="list">
          {tasks.filter(filterMap[filter]).map((item) => (
            <ToDoItem
              task={item}
              key={item.id}
              deleteTask={deleteTask}
              changeDone={changeDone}
              changeTitle={changeTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
