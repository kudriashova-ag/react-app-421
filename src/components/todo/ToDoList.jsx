import React from "react";
import ToDoAdd from "./ToDoAdd";
import ToDoFilter from "./ToDoFilter";
import ToDoItem from "./ToDoItem";
import list from "./data";


const ToDoList = () => {
  return (
    <div>
      <h1 className="welcome">ToDo List</h1>
   
      <div className="todo-list">
        <ToDoAdd />
        <ToDoFilter />
        <div className="list">
              {list.map(item => <ToDoItem task={item} key={item.id}/>)}    
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
