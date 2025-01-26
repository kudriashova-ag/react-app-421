import React from 'react';

const ToDoFilter = ({ filter, setFilter, filterMap }) => {
  const filterKeys = Object.keys(filterMap);
  // console.log(filterKeys);
  
  return (
    <div className="filter">
      {filterKeys.map((key) => <button key={key} onClick={() => setFilter(key)} className={filter === key ? "active" : ""}>{key}</button>)}

    </div>
  );
};

export default ToDoFilter;
