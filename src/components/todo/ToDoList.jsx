import React, { useState } from "react";
import ToDoAdd from "./ToDoAdd";
import ToDoFilter from "./ToDoFilter";
import ToDoItem from "./ToDoItem";
import list from "./data";

const ToDoList = () => {
  const [tasks, setTasks] = useState(list);

  const addTask = (title) => {
    setTasks([
      ...tasks,
      { id: new Date().getTime(), title: title, done: false },
    ]);
  };

  return (
    <div>
      <h1 className="welcome">ToDo List</h1>

      <div className="todo-list">
        <ToDoAdd addTask={addTask} />
        <ToDoFilter />
        <div className="list">
          {tasks.map((item) => (
            <ToDoItem task={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
