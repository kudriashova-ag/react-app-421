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
    </nav>
  );
};

export default Menu;
