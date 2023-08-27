## Introduction

Welcome to Res-Components, your ultimate solution to efficiently reuse components in React projects. Simplify the development process by creating a collection of ready-to-use components designed to be flexible, customizable, and easily integrated into your designs. Forget duplicating code and save valuable time by focusing on building great user experiences. In the future, there will be website documentation for other explanations

## Installation

Install my-project with npm

```bash
  npm install res-components
```

## Change Theme

Components already have preset styles, if you want to change follow these steps.

The library already contains basic styles for its components, but if you want to change them, follow these steps

```javascript
import { ThemeProvider } from "res-components";

const styles = { primary: { color: "#900C3F", contrastText: "#ffffff", hover: "red" } };

function App() {
  return <ThemeProvider theme={styles}>// logic...</ThemeProvider>;
}
```

## Components

The library currently has 3 component types:
"**Buttons, Spinner and ButtonLink**"

```javascript
import { Button } from "res-components";

function App() {
  return (
    <Button size='sm' variant='primary'>
      // logic...
    </Button>
  );
}
```
