import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  NavBarBox,
  NavBarActions,
  NavBarAction,
  NavBarActionIcon,
  NavBarActionLabel,
  ToggleNavBar,
  ToggleNavBarLabel,
  ToggleNavBarIcon,
} from './styles';

interface IURI {
  name: string;
  path: string;
  icon: string;
}

const uris: IURI[] = [
  {
    name: 'Home',
    icon: 'home',
    path: '/',
  },
  {
    name: 'Skills',
    icon: 'grade',
    path: '/skills',
  },
  {
    name: 'Projects',
    icon: 'code',
    path: '/projects',
  },
  {
    name: 'Works',
    icon: 'work',
    path: '/works',
  },
  {
    name: 'Contact',
    icon: 'mail',
    path: '/contact',
  },
];

function NavBar(): JSX.Element {
  const appLocation = useLocation();
  const { pathname } = appLocation;
  const [isToggle, setIsToggle] = useState(false);

  return (
    <NavBarBox>
      <ToggleNavBarLabel htmlFor="toggle-navbar">
        <ToggleNavBarIcon className="material-icons">menu</ToggleNavBarIcon>
      </ToggleNavBarLabel>
      <ToggleNavBar
        id="toggle-navbar"
        type="checkbox"
        checked={isToggle}
        onChange={() => setIsToggle(!isToggle)}
      />
      <NavBarActions>
        <ToggleNavBarLabel htmlFor="toggle-navbar">
          <ToggleNavBarIcon className="material-icons">close</ToggleNavBarIcon>
        </ToggleNavBarLabel>
        {uris.map((uri) => (
          <NavBarAction
            key={uri.name}
            to={uri.path}
            className={`${pathname === uri.path ? 'selected' : ''}`}
            onClick={() => {
              setIsToggle(false);
            }}
          >
            <NavBarActionIcon className="material-icons-outlined">
              {uri.icon}
            </NavBarActionIcon>
            <NavBarActionLabel>{uri.name}</NavBarActionLabel>
          </NavBarAction>
        ))}
      </NavBarActions>
    </NavBarBox>
  );
}

export default NavBar;
