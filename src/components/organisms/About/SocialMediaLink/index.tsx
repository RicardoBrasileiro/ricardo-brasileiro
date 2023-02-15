import React from "react";
import {
  SocialMediaLinkAncorContainer,
  SocialMediaLinkButtonContainer,
} from "./styles";
import { SocialMediaLinkProps } from "./types";

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  name,
  icon,
  url,
  background,
  openInANewWindow,
}): JSX.Element => {
  return openInANewWindow ? (
    <SocialMediaLinkButtonContainer
      className={`show-label ${name.toLocaleLowerCase()}`}
      style={{ background }}
      onClick={() => window.open(url)}
    >
      <img src={icon} />
      <p>{name}</p>
    </SocialMediaLinkButtonContainer>
  ) : (
    <SocialMediaLinkAncorContainer
      href={url}
      className={`show-label ${name.toLocaleLowerCase()}`}
      style={{ background }}
    >
      <img src={icon} alt="" />
      <p>{name}</p>
    </SocialMediaLinkAncorContainer>
  );
};

export default SocialMediaLink;
