import React, { createContext, useLayoutEffect, useCallback } from "react";
import { setTheme } from "../utility/theme";

/* context */
export const ThemeContext = createContext({});

/* styles example */
// const styles = { primary: { color: "#fffff" } };
// const styles = {
//   primary: {
//     color: { 50: "#FEFDF3" },
//     contrastText: "#ffffff",
//   },
//   secondary: {
//     color: "#F7E987",
//     contrastText: "#000000",
//   },
// };

const ThemeProvider = ({ children, theme }) => {
  /* override base style components */
  useLayoutEffect(() => {
    // check if theme exists
    if (!theme) return;

    // check user pass theme props
    if (!Object.keys(theme)) return;

    setTheme(theme);
  }, [setTheme, theme]);

  // change theme
  const changeTheme = useCallback((newTheme) => setTheme(newTheme), [setTheme]);

  return <ThemeContext.Provider value={changeTheme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
