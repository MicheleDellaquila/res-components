import React, { createContext, useLayoutEffect, useMemo } from "react";
import { setTheme } from "../utility/setTheme";

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

export const ThemeProvider = ({ children, styles }) => {
  const stylesMemorized = useMemo(() => styles, [styles]);

  /* set styles in root variable */
  useLayoutEffect(() => {
    if (stylesMemorized && Object.keys(stylesMemorized) > 0)
      setTheme(stylesMemorized);
  }, [setTheme, stylesMemorized]);

  return (
    <ThemeContext.Provider value={stylesMemorized}>
      {children}
    </ThemeContext.Provider>
  );
};
