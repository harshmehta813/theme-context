import React, { useState } from "react";

export const ThemeContext = React.createContext();

const themes = {
  dark: {
    borderColor: "white",
    color: "white",
    background: "#282c34"
  },
  light: {
    borderColor: "black",
    color: "#282c34",
    background: "white"
  }
};

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const themeData = themes;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = [{ theme, themeData }, toggleTheme];
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
