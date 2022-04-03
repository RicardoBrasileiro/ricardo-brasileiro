import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { ISocialMedia } from '../../../interfaces/ISocialMedia';
import { SocialMediaBox, SocialMediaIcon, SocialMediaLabel } from './styles';

interface ISocialMediaProps {
  socialMedia: ISocialMedia;
}

function SocialMedia(props: ISocialMediaProps): JSX.Element {
  const { socialMedia } = props;
  const { name, icon, link, color } = socialMedia;
  const { theme } = useContext(ThemeContext);

  return (
    <SocialMediaBox
      onClick={() => {
        window.open(link);
      }}
      color={color === '#FFFFFF' && theme.name === 'light' ? '#000000' : color}
    >
      <SocialMediaIcon className={`fab fa-${icon}`} />
      <SocialMediaLabel>{name}</SocialMediaLabel>
    </SocialMediaBox>
  );
}

export default SocialMedia;
