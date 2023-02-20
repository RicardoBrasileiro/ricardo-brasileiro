import React from "react";
import { SocialMediaLinkIconImage } from "./styles";
import { SocialMediaLinkIconProps } from "./types";

const SocialMediaLinkIcon: React.FC<SocialMediaLinkIconProps> = ({
  icon,
}): JSX.Element => {
  return <SocialMediaLinkIconImage src={icon} />;
};

export default SocialMediaLinkIcon;
