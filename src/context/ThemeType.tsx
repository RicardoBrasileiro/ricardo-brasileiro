import React, { createContext, useContext, useState } from 'react';

interface IThemeTypeContext {
  themeType: string;
  toggleThemeType: () => void;
}

const ThemeTypeContext = createContext({} as IThemeTypeContext);

export const ThemeTypeProvider: React.FC = ({ children }) => {
  const localStorageThemeType = localStorage.getItem('theme');

  const [themeType, setThemeType] = useState(localStorageThemeType || 'light');

  const toggleThemeType = (): void => {
    if (themeType === 'light') {
      setThemeType('dark');
      return;
    }

    setThemeType('light');
  };

  return (
    <ThemeTypeContext.Provider value={{ themeType, toggleThemeType }}>
      {children}
    </ThemeTypeContext.Provider>
  );
};

export const useThemeTypeContext = (): IThemeTypeContext => {
  const context = useContext(ThemeTypeContext);
  return context;
};
