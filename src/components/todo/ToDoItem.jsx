import React, { useState } from "react";

const ToDoItem = ({ task, deleteTask, changeDone, changeTitle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const clickHandler = () => {
    setIsEditing(false);
    changeTitle(task.id, newTitle);
  };

  const normalTemplate = (
    <div className="item">
      
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => changeDone(task.id)}
      />

      <span onClick={() => setIsEditing(true)}>
        {task.done ? <del>{task.title}</del> : task.title}
      </span>

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );

  const editTemplate = (
    <div className="item">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={clickHandler}>Save</button>
    </div>
  );

  return isEditing ? editTemplate : normalTemplate;
};

export default ToDoItem;
