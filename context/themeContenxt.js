import React, { createContext, useLayoutEffect, useState } from "react";
import { setStylesComponent } from "../utility/theme";

/* context */
export const ThemeActionContext = createContext({});

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
  const [_, setTheme] = useState(null);

  /* set styles in root variable */
  useLayoutEffect(() => {
    // check user pass styles props
    if (!styles && !Object.keys(styles)) return;

    setStylesComponent(styles);
    setTheme(styles);
  }, [setStylesComponent, styles]);

  return (
    <ThemeActionContext.Provider value={setTheme}>
      {children}
    </ThemeActionContext.Provider>
  );
};
