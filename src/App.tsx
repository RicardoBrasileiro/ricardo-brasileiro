import React, { useState } from 'react';
import Routes from './Routes';
import { GlobalStyle } from './styles';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
