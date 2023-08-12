import { useContext } from "react";
import { ThemeActionContext } from "../context/themeContext";

const useChangeTheme = () => {
  const changeTheme = useContext(ThemeActionContext);

  return changeTheme;
};

export default useChangeTheme;
