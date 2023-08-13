const setCssVariable = (variable, value) => {
  document.documentElement.style.setProperty(variable, value);
};

export const setTheme = (theme) => {
  for (const key in theme) {
    for (const prop in theme[key]) {
      const color = theme[key][prop];

      setCssVariable(`--${key}-color`, color);
    }
  }
};
