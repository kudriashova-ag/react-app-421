import React, { useEffect, useState } from "react";

const Example = () => {
  const [i, setI] = useState(0);
  const [visibleDiv, setVisibleDiv] = useState(true);
  const [users, setUsers] = useState(["Tom", "Bob", "Alice"]);
  

/*   useEffect(() => { 
    // викликлається кожного разу при оновлені компонента
    console.log("useEffect");
  }); */

  /* useEffect(() => {
    // викликлається один раз при монтуванні компонента
    console.log("useEffect");
  }, []); */
  

  useEffect(() => {
    // викликлається один раз при монтуванні компонента
    console.log("useEffect");
  }, [visibleDiv, i]);

  const handleClick = () => {
    setVisibleDiv(!visibleDiv);
  };

  const increment = () => {
    setI(i + 1);
  };

  const decrement = () => {
    setI(i - 1);
  };

 
  const addUser = () => {
      setUsers([...users, "John"]);
      
  };
  return (
    <div>
      <h1>Example</h1>

      {users.map((user) => (
        <div key={user}>{user}</div>
      ))}
      <button onClick={addUser}>Add users</button>

      <hr />
      <button onClick={handleClick}>Click Me visibleDiv</button>
      {visibleDiv && <div>Lorem ipsum dolor sit amet.</div>}

      <hr />
      <button onClick={increment}>+</button>
      <span>i: {i}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Example;
