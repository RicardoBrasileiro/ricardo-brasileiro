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
  const { color, icon, label, to } = props;

  return (
    <SocialMediaLinkBox to={to}>
      <SocialMediaIcon color={color} className={icon} />
      <SocialMediaLabel color={color}>{label}</SocialMediaLabel>
    </SocialMediaLinkBox>
  );
};

export default SocialMediaLink;
