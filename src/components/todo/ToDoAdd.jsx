import React, { useState } from "react";

const ToDoAdd = ({ addTask }) => {
  console.log("ToDoAdd render");
  
  const [newTitle, setNewTitle] = useState('');
  const [error, setError] = useState(false);

  const clickHandler = () => { 
    if(newTitle.trim().length === 0){
      setError(true);
      return;
    }
    addTask(newTitle);
    setNewTitle('');
    setError(false);
  }



  return (
    <div className="add-item">
      <input type="text"
        value={newTitle}
        onChange={(e) => { setNewTitle(e.target.value) }}
        onKeyDown={(e) => { if (e.key === 'Enter') { clickHandler() } } } />
      
      <button onClick={clickHandler}>Add</button>
      {error && <div className="error">Please enter a task</div>}
    </div>
  );
};

export default React.memo(ToDoAdd);
