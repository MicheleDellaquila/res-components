import React, { createContext, useLayoutEffect } from "react";
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

const ThemeProvider = ({ children, styles }) => {
  /* override base style components */
  useLayoutEffect(() => {
    // check user pass styles props
    if (!styles && !Object.keys(styles)) return;

    setTheme(styles);
  }, [setTheme, styles]);

  // change theme
  const changeTheme = useCallback((newTheme) => setTheme(newTheme), [setTheme]);

  return <ThemeContext.Provider value={changeTheme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
