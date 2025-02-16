import {  Outlet } from "react-router";
import "./App.css";
import Menu from "./components/Header/Menu";
import {  useContext } from "react";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div>
      <header className={`theme-${theme}`}>
        <Menu />
        <button onClick={toggleTheme}>
          {theme === "light" ? "Moon" : "Sun"}
        </button>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
