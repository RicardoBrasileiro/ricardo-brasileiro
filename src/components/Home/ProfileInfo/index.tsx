import React from 'react';
import {
  ProfileInfoBox,
  InfoBox,
  NameLabel,
  OfficeLabel,
  Description,
  ContactMeButton,
  ContactMeIcon,
} from './styles';

const ProfileInfo = (): JSX.Element => {
  return (
    <ProfileInfoBox>
      <InfoBox>
        <NameLabel>Ricardo Brasileiro</NameLabel>
        <OfficeLabel>Desenvolvedor full-stack</OfficeLabel>
        <Description>
          Desenvolvendo aplicações fieis, rápidas e robustas, sou Ricardo,
          estudante do curso de Análise e Desenvolvimento de Sistemas no
          Instituto Federal da Paraíba
        </Description>
      </InfoBox>
      <ContactMeButton to="/contact">
        Fale comigo{' '}
        <ContactMeIcon className="material-icons">send</ContactMeIcon>
      </ContactMeButton>
    </ProfileInfoBox>
  );
};

export default ProfileInfo;
