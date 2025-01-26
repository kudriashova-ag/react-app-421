import React, { useEffect, useState } from "react";
import ToDoAdd from "./ToDoAdd";
import ToDoFilter from "./ToDoFilter";
import ToDoItem from "./ToDoItem";
import list from "./data";
// import test from  "../../images/1.png";

const filterMap = {
  All: () => true,
  ToDo: (task) => !task.done,
  Done: (task) => task.done,
  "Big Task": (task) => task.title.length > 5,
};

const ToDoList = () => {
  const [tasks, setTasks] = useState(list);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    setTasks(data ? JSON.parse(data) : list);
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
    setTasks([
      ...tasks,
      { id: new Date().getTime(), title: title, done: false },
    ]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  const changeDone = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const changeTitle = (id, title) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: title }; // зміна назви
      }
      return task;
    });
    setTasks(newTasks);
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
