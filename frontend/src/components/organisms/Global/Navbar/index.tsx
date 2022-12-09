import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarLink from "../../../molecules/Global/NavbarLink";
import { NavbarContainer } from "./styles";

const Navbar: React.FC = (): JSX.Element => {
  const [sectionFocused, setSectionFocused] = useState("about");

  const location = useLocation();

  useEffect(() => {
    setSectionFocused(location.hash);
  }, [location]);

  const navbarLinks = [
    {
      iconName: "home",
      sectionId: "about",
    },
    {
      iconName: "star",
      sectionId: "skills",
    },
    {
      iconName: "code",
      sectionId: "projects",
    },
    {
      iconName: "article",
      sectionId: "certificates",
    },
    {
      iconName: "work",
      sectionId: "experience",
    },
    {
      iconName: "mail",
      sectionId: "contact",
    },
  ];

  return (
    <NavbarContainer>
      {navbarLinks.map((navbarLink) => (
        <NavbarLink
          active={
            sectionFocused.substring(1, sectionFocused.length) ===
            navbarLink.sectionId
          }
          {...navbarLink}
        />
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
