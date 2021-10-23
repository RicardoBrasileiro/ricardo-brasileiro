import React from 'react';
import { NavBarAction, NavBarActions, NavBarBox } from './styles';
import theme from '../../global/styles/themes';

interface INavBarProps {
  selectedLink: number;
  setSelectedLink: React.Dispatch<React.SetStateAction<number>>;
}

const NavBar = (props: INavBarProps): JSX.Element => {
  const { selectedLink, setSelectedLink } = props;

  const linkWidth = 12;

  const selectedLinkStyle = {
    color: theme.colors.lightRed,
    left: `${2 * linkWidth}rem`,
  };

  const setLinkLeft = (numberPosition: number): number => {
    if (numberPosition === selectedLink) {
      return 2;
    }
    if (numberPosition > selectedLink && numberPosition <= 2) {
      return numberPosition - 1;
    }
    if (numberPosition === 2 && selectedLink > 2) {
      return numberPosition + 1;
    }
    if (numberPosition === 3 && selectedLink > numberPosition) {
      return numberPosition + 1;
    }
    return numberPosition;
  };

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

  return (
    <NavBarBox>
      <NavBarActions>
        {links.map((link, index) => (
          <NavBarAction
            key={link.label}
            onClick={() => setSelectedLink(index)}
            style={
              index === selectedLink
                ? {
                    ...selectedLinkStyle,
                    left: `${setLinkLeft(index) * linkWidth}rem`,
                  }
                : { left: `${setLinkLeft(index) * linkWidth}rem` }
            }
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
