import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { SelectedLinkProvider } from './context/SelectedLink';
import theme from './global/styles/themes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <SelectedLinkProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SelectedLinkProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
