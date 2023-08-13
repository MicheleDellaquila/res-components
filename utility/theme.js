const setCssVariable = (variable, value) => {
  document.documentElement.style.setProperty(variable, value);
};

const setVariables = (theme) => {
  for (const key in theme) {
    for (const prop in theme[key]) {
      const color = theme[key][prop];

      setCssVariable(`--${key}-color`, color);
    }
  }
};

module.exports = setVariables;
