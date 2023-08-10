## Alert

Warning: "This library is under development and there may be constant changes"

## Introduction

Res-Component is a library designed to be able to reuse components, such as buttons, inputs etc in every react project we develop.

## Installation

Install my-project with npm

```bash
  npm install rescomponent
```

## Modify Styles Component

Components already have preset styles, if you want to change follow these steps.

The library already contains basic styles for its components, but if you want to change them, follow these steps

```javascript
import { ThemeProvider } from "rescomponent/context/themeContenxt";

const styles = const styles = { primary: { color: "#900C3F", contrastText: "#ffffff", hover: "red" } };

function App() {
  return <ThemeProvider styles={styles}>
    // logic...
  </ThemeProvider>
}
```

## Components

The library currently has 3 component types:
Buttons, Spinners and ButtonLinks. More nees will be added in the future.
To use a component, proceed as follows.

```javascript
import { Button } from "rescomponent/components/button/button";

function App() {
  return (
    <Button size='sm' variant='primary'>
      // logic...
    </Button>
  );
}
```
