import React from "react";
import { NavLink } from "react-router";
import "./Menu.css";
const Menu = () => {
  return (
    <nav class="main-menu">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/example">Example</NavLink>
      <NavLink to="/todo">ToDo</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/first">First</NavLink>
      <NavLink to="/second">Second</NavLink>
    </nav>
  );
};

export default Menu;
