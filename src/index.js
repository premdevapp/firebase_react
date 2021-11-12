import React from "react";
import ReactDOM from "react-dom";
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  theme,
} from "@chakra-ui/react";

import App from "./App";

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.pink,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
