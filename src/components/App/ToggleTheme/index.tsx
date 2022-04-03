import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import {
  ToggleThemeBox,
  LightModeIcon,
  DarkModeIcon,
  ShowEnabledIconCircle,
} from './styles';

function ToggleTheme(): JSX.Element {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <ToggleThemeBox onClick={() => switchTheme()}>
      <LightModeIcon className="material-icons-outlined">
        light_mode
      </LightModeIcon>
      <DarkModeIcon className="material-icons-outlined">dark_mode</DarkModeIcon>
      <ShowEnabledIconCircle
        className={`${theme.name === 'light' ? 'light-mode' : 'dark-mode'}`}
      />
    </ToggleThemeBox>
  );
}

export default ToggleTheme;
