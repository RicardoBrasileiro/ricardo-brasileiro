import React from 'react';
import {
  SocialMediaLinkBox,
  SocialMediaIcon,
  SocialMediaLabel,
} from './styles';

interface ISocialMediaLinkProps {
  to: string;
  icon: string;
  label: string;
  color: string;
}

const SocialMediaLink = (props: ISocialMediaLinkProps): JSX.Element => {
  const { color: propsColor, icon, label, to } = props;

  const openSocialMediaLink = (url: string): void => {
    window.open(url);
  };

  const themeType = 'dark';

  const color =
    propsColor === '#000000' && themeType === 'dark' ? '#FFFFFF' : propsColor;

  return (
    <SocialMediaLinkBox color={color} onClick={() => openSocialMediaLink(to)}>
      <SocialMediaIcon className={`fab fa-${icon}`} />
      <SocialMediaLabel>{label}</SocialMediaLabel>
    </SocialMediaLinkBox>
  );
};

export default SocialMediaLink;
