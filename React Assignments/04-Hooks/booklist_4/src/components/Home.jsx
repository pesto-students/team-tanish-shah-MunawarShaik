import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import Booklist from "./Booklist";
import "../App.css";

function Home() {
  const { isDark, toggle } = useContext(ThemeContext);
  // console.log(toggle);
  const themeClass = isDark ? "dark-theme" : "light-theme";
  return (
    <div className={`app ${themeClass}`}>
      <button onClick={toggle}>Toggle Theme</button>
      <Booklist />
    </div>
  );
}

export default Home;
