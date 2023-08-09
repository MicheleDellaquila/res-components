export const setCssVariable = (variable, value) => {
  document.documentElement.style.setProperty(variable, value);
};

export const setTheme = (theme) => {
  for (const key in theme) {
    for (const prop in theme[key]) {
      const value = theme[key][prop];

      // check value isn't an Array
      if (!Array.isArray(theme[key][prop])) {
        setCssVariable(`--${key}-${prop}`, value);
        continue;
      }

      // set variables
      for (const value of theme[key][prop]) {
        const code = Object.keys(value)[0];
        const hex = Object.values(value)[0];

        setCssVariable(`--${key}-${code}`, hex);
      }
    }
  }
};
