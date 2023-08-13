const { useContext } = require("react");
const { ThemeActionContext } = require("../context/themeContext");

const useChangeTheme = () => {
  const changeTheme = useContext(ThemeActionContext);

  return changeTheme;
};

module.exports = useChangeTheme;
