import React, { useCallback, useEffect, useReducer, useState } from "react";
import ToDoAdd from "./ToDoAdd";
import ToDoFilter from "./ToDoFilter";
import ToDoItem from "./ToDoItem";
import list from "./data";
import { toDoReducer } from "./toDoReducer";
import api from "../../api";
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
    getTasks();
    const filterData = localStorage.getItem("filter");
    setFilter(filterData ? filterData : "All");
  }, []);

  const getTasks = async () => { 
    const response = await api.get("tasks");
    dispatch({ type: "SET_TASKS", payload: response.data });
  }

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  const addTask = useCallback((title) => {
    dispatch({
      type: "ADD_TASK",
      payload: title,
    });
  }, []);

  const deleteTask = useCallback((id) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: id,
    });
  },[])

  const changeDone = useCallback((id) => {
    dispatch({
      type: "CHANGE_DONE",
      payload: id,
    });
  }, []);

  const changeTitle = useCallback((id, title) => {
    dispatch({
      type: "CHANGE_TITLE",
      payload: {
        id,
        title,
      },
    });
  },[])

  return (
    <div>
      <h1 className="welcome">ToDo List</h1>

      <div className="todo-list">
        <ToDoAdd addTask={addTask} />

        <ToDoFilter
          filter={filter}
          filterMap={filterMap}
          setFilter={setFilter}
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
