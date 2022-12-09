import React from "react";
import { SocialMediaLinkContainer } from "./styles";
import { SocialMediaLinkProps } from "./types";

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  link,
  icon: SocialMediaLinkIcon,
  color,
  backgroundColor,
}): JSX.Element => {
  return (
    <SocialMediaLinkContainer backgroundColor={backgroundColor} href={link}>
      <SocialMediaLinkIcon size={20} fill={color} />
    </SocialMediaLinkContainer>
  );
};

export default SocialMediaLink;
