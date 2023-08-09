import "./app.scss";

import { Button } from "./components/button/button";
import Spinner from "./components/spinner/spinner";
import { ThemeProvider } from "./context/themeContenxt";

const App = () => {
  // const styles = {
  //   primary: {
  //     color: [{ 50: "#FEFDF3" }, { 100: "#FDFBE7" }],
  //     contrastText: "#ffffff",
  //     hover: "#e76f51",
  //   },
  //   secondary: {
  //     color: "#F7E987",
  //     contrastText: "#000000",
  //   },
  // };

  return (
    <ThemeProvider>
      <Button size='sm' variant='primary'>
        <Spinner size='sm' variant='secondary' /> ciao
      </Button>
    </ThemeProvider>
  );
};

export default App;
