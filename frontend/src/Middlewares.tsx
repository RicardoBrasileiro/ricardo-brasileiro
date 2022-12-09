import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { light } from "./global/styles/themes";

import { GlobalStyle } from "./styles";

const Middlewares: React.FC = (): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={light}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default Middlewares;
