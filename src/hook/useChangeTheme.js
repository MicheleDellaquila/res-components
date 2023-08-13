import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const useChangeTheme = () => {
  const changeTheme = useContext(ThemeContext);

  return changeTheme;
};

export default useChangeTheme;
