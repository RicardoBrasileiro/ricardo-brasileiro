import React, { createContext, useContext, useEffect, useState } from 'react';

interface ISelectedLinkContext {
  selectedLink: number;
  setSelectedLink: (path: string) => void;
}

const SelectedLinkContext = createContext({} as ISelectedLinkContext);

export const SelectedLinkProvider: React.FC = ({ children }) => {
  const [selectedLink, setSelectedLink] = useState(0);

  const handleLink = (path: string): number => {
    const pages = ['/', '/projects', '/skills', '/works', '/contact'];

    return pages.indexOf(path);
  };

  const setNewSelectedLink = (path: string): void => {
    const linkIndex = handleLink(path);

    setSelectedLink(linkIndex);
  };

  // useEffect(() => {
  //   setSelectedLink(handleLink(
  //     window.location.pathname.substr(1, window.location.pathname.length),
  //   );
  // });

  return (
    <SelectedLinkContext.Provider
      value={{ selectedLink, setSelectedLink: setNewSelectedLink }}
    >
      {children}
    </SelectedLinkContext.Provider>
  );
};

export const useSelectedLinkContext = (): ISelectedLinkContext => {
  const context = useContext(SelectedLinkContext);

  return context;
};
