import React, { useState } from "react";

const ToDoAdd = ({ addTask }) => {
  const [newTitle, setNewTitle] = useState('');

  return (
    <div className="add-item">
      <input type="text" value={newTitle} onChange={(e) => { setNewTitle(e.target.value) }} />
      <button onClick={() => addTask(newTitle)}>Add</button>
    </div>
  );
};

export default ToDoAdd;
