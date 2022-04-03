/* eslint-disable */

import React, { createContext, useEffect, useState } from 'react';
import theme from '../../global/themes';
import darkTheme from '../../global/themes/darkTheme';
import lightTheme from '../../global/themes/lightTheme';

interface IThemeContext {
  theme: typeof theme;
  switchTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContext);

interface IThemeProviderProps {
  children: JSX.Element;
}

function ThemeProvider(props: IThemeProviderProps): JSX.Element {
  const { children } = props;

  const [selectedTheme, setSelectedTheme] = useState<typeof theme>(lightTheme);

  const setLocalTheme = (): void => {
    const localTheme = localStorage.getItem('theme');

    if (!localTheme) {
      localStorage.setItem('theme', 'light');
    }
    setSelectedTheme(
      localTheme && localTheme === 'dark' ? darkTheme : lightTheme,
    );
  };

  const switchTheme = (): void => {
    if (selectedTheme.name === 'light') {
      setSelectedTheme(darkTheme);
      localStorage.setItem('theme', 'dark');
      return;
    }
    setSelectedTheme(lightTheme);
    localStorage.setItem('theme', 'light');
  };

  useEffect(() => {
    setLocalTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: selectedTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
