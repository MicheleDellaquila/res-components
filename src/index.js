import Button from "./components/button/button";
import ButtonLink from "./components/buttonLink/buttonLink";
import Spinner from "./components/spinner/spinner";
import ThemeProvider from "./context/themeContext";
import useChangeTheme from "./hook/useChangeTheme";

/* object with all files to export */
const allFiles = {
  ThemeProvider,
  Button,
  ButtonLink,
  Spinner,
  useChangeTheme,
};

export default allFiles;
