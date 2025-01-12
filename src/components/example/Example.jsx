import React, { useState } from "react";

const Example = () => {
  const [i, setI] = useState(0);
  const [visibleDiv, setVisibleDiv] = useState(true);

  const handleClick = () => {
    setVisibleDiv(!visibleDiv);
  };

  const increment = () => {
    setI(i + 1);
  };

  const decrement = () => {
    setI(i - 1);
  };

  const [users, setUsers] = useState(["Tom", "Bob", "Alice"]);
  const addUser = () => {
      setUsers([...users, "John"]);
      
  };
  return (
    <div>
      <h1>Example</h1>

      {users.map((user) => (
        <div key={user}>{user}</div>
      ))}
    <button onClick={addUser}>Add</button>
          

      <hr />
      <button onClick={handleClick}>Click Me</button>
      {visibleDiv && <div>Lorem ipsum dolor sit amet.</div>}

      <hr />
      <button onClick={increment}>+</button>
      <span>{i}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Example;
