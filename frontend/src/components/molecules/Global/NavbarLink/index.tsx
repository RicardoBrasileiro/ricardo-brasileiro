import React from "react";
import MaterialIconRounded from "../../../atoms/Global/Icons/Material/Rounded";
import { NavbarLinkContainer } from "./styles";
import { NavbarLinkProps } from "./types";

const NavbarLink: React.FC<NavbarLinkProps> = ({
  iconName,
  sectionId,
  active,
}): JSX.Element => {
  return (
    <NavbarLinkContainer
      className={`${active ? "active" : ""}`}
      href={`#${sectionId}`}
    >
      <MaterialIconRounded name={iconName} />
    </NavbarLinkContainer>
  );
};

export default NavbarLink;
