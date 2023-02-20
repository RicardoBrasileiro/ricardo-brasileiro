import React from "react";
import SocialMediaLinkIcon from "../../../atoms/About/SocialMediaLinkIcon";
import SocialMediaLinkName from "../../../atoms/About/SocialMediaLinkName";
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
      <SocialMediaLinkIcon icon={icon} />
      <SocialMediaLinkName name={name} />
    </SocialMediaLinkButtonContainer>
  ) : (
    <SocialMediaLinkAncorContainer
      href={url}
      className={`show-label ${name.toLocaleLowerCase()}`}
      style={{ background }}
    >
      <SocialMediaLinkIcon icon={icon} />
      <SocialMediaLinkName name={name} />
    </SocialMediaLinkAncorContainer>
  );
};

export default SocialMediaLink;
