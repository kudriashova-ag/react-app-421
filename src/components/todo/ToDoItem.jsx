import React from "react";

const ToDoItem = ({ task }) => {
  return (
    <div className="item">
      <input type="checkbox" defaultChecked={task.done} />
      {task.done ? <del>{task.title}</del> : task.title}
      <button>Delete</button>
    </div>
  );
};

export default ToDoItem;
