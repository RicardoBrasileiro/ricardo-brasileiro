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
        <OfficeLabel>Desenvolvedor front-end</OfficeLabel>
        <Description>
          Olá, me chamo Ricardo. Estou graduando Análise e Desenvolvimento de
          Sistemas no Instituto Federal da Paraíba - IFPB. Gosto de implementar
          interfaces e ver o resultado das coisas que faço, no momento também
          estou aprendendo a construir o back-end de aplicações, podendo assim
          me tornar um desenvolvedor full-stack. Gosto de interagir com as
          pessoas e poder ajudá-las quando necessário, alguns dos meus hobbies
          são jogos e música, além de, claro, programar {'</>'}.
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
