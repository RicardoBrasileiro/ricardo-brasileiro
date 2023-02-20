import React from "react";
import { SocialMediaLinkNameLabel } from "./styles";
import { SocialMediaLinkNameProps } from "./types";

const SocialMediaLinkName: React.FC<SocialMediaLinkNameProps> = ({
  name,
}): JSX.Element => {
  return <SocialMediaLinkNameLabel>{name}</SocialMediaLinkNameLabel>;
};

export default SocialMediaLinkName;
