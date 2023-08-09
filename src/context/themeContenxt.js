import { createContext, useLayoutEffect, useMemo } from "react";
import { setTheme } from "../utility/setTheme";

/* context */
export const ThemeContext = createContext({});

export const ThemeProvider = ({ children, styles }) => {
  const stylesMemorized = useMemo(() => styles, [styles]);

  /* set styles in root variable */
  useLayoutEffect(() => {
    if (stylesMemorized && stylesMemorized.length > 0)
      setTheme(stylesMemorized);
  }, [setTheme, stylesMemorized]);

  return (
    <ThemeContext.Provider value={stylesMemorized}>
      {children}
    </ThemeContext.Provider>
  );
};
