import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import NavBar from './components/App/NavBar';
import { AppBox, GlobalStyle } from './styles';
import ToggleTheme from './components/App/ToggleTheme';
import { ThemeContext } from './contexts/ThemeContext';
import BoxLoader from './components/App/BoxLoader';

function App(): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const [pageLoaded, setPageLoaded] = useState(false);

  return (
    <AppBox onLoad={() => setPageLoaded(true)}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToggleTheme />
        {!pageLoaded && <BoxLoader />}
        <NavBar />
        <Routes />
      </ThemeProvider>
    </AppBox>
  );
}

export default App;
