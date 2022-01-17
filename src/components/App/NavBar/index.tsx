import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import {
  Logo,
  MenuIcon,
  MenuIconBar,
  NavBarAction,
  NavBarActions,
  NavBarBox,
  ToggleMenuCheckBox,
} from './styles';
import theme from '../../../global/styles/themes';
import { useSelectedLinkContext } from '../../../context/SelectedLink';

interface ILink {
  label: string;
  path: string;
}

const links: ILink[] = [
  {
    label: 'Início',
    path: '/',
  },
  {
    label: 'Projetos',
    path: '/projects',
  },
  {
    label: 'Habilidades',
    path: '/skills',
  },
  {
    label: 'Trabalhos',
    path: '/works',
  },
  {
    label: 'Contato',
    path: '/contact',
  },
];

const NavBar = (): JSX.Element => {
  const { selectedLink, setSelectedLink } = useSelectedLinkContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [pageScroll, setPageScroll] = useState(0);

  const route = useLocation();
  const { pathname } = route;

  const handleScroll = (): void => {
    const scroll = document.documentElement.scrollTop;
    setPageScroll(scroll);
  };

  useEffect(() => {
    setSelectedLink(pathname);
    window.onscroll = () => handleScroll();
  }, [pathname]);

  return (
    <NavBarBox
      style={{
        boxShadow: pageScroll > 0 ? '0px 0px 4px rgba(0, 0, 0, 0.2)' : '',
      }}
    >
      <Logo to="/">RB</Logo>
      <ToggleMenuCheckBox type="checkbox" checked={toggleMenu} />
      <MenuIcon
        className="menu-icon"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <MenuIconBar />
        <MenuIconBar />
        <MenuIconBar />
      </MenuIcon>
      <NavBarActions className="nav-bar-actions">
        {links.map((link, index) => (
          <NavBarAction
            onClick={() => setToggleMenu(false)}
            className={selectedLink === index ? 'selected-link' : ''}
            key={link.label}
            style={{
              color:
                index === selectedLink ? theme.similarColors.primaryColor : '',
              borderColor:
                index === selectedLink ? theme.similarColors.primaryColor : '',
            }}
            to={link.path}
          >
            {link.label}
          </NavBarAction>
        ))}
      </NavBarActions>
    </NavBarBox>
  );
};

export default NavBar;
