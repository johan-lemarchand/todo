import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const customTheme = {
  ...theme,
  config: {
    ...theme.config,
    initialColorMode: "dark",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
