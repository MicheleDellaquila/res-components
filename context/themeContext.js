import React, { createContext, useLayoutEffect } from "react";
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

const ThemeProvider = ({ children, styles }) => {
  /* override base style components */
  useLayoutEffect(() => {
    // check user pass styles props
    if (!styles && !Object.keys(styles)) return;

    setStylesComponent(styles);
  }, [setStylesComponent, styles]);

  // change theme
  const changeTheme = useCallback(
    (newStyles) => {
      setStylesComponent(newStyles);
    },
    [setStylesComponent]
  );

  return (
    <ThemeActionContext.Provider value={changeTheme}>
      {children}
    </ThemeActionContext.Provider>
  );
};

export default ThemeProvider;
