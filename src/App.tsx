import React, { useState } from 'react';
import Routes from './Routes';
import { GlobalStyle, Page } from './styles';

const App = (): JSX.Element => {
  return (
    <Page>
      <GlobalStyle />
      <Routes />
    </Page>
  );
};

export default App;
