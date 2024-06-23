import React, { useContext } from "react";
import { ThemeProvider } from "./Index";

const Sidebar = () => {
  const darkTheme = useContext(ThemeProvider);
  console.log(darkTheme);
  return <>value is {darkTheme}</>;
};
export default Sidebar;
