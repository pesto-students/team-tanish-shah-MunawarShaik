import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  isDark: false,
  toggle: () => {},
});

export const ThemeProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    console.log("toggle theme btn clicked");
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark: isDarkTheme, toggle: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
