import React, { createContext, useState } from "react";
import Dashboard from "./Dashboard";

export const ThemeProvider = createContext();

const Index = () => {
  const [darkTheme, setDarkTheme] = useState("false");
  return (
    <ThemeProvider.Provider value={darkTheme}>
      <Dashboard />
    </ThemeProvider.Provider>
  );
};
export default Index;
