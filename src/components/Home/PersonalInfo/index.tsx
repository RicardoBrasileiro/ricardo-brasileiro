import React from 'react';
import {
  PersonalInfoBox,
  ProfilePicture,
  ContactInfo,
  PersonalName,
  PersonalSkill,
  ContactMeButton,
  ContactMeButtonLabel,
  ContactMeButtonIcon,
} from './styles';

import profilePicture from '../../../assets/profile.jpg';

function PersonalInfo(): JSX.Element {
  return (
    <PersonalInfoBox>
      <ProfilePicture src={profilePicture} />
      <ContactInfo>
        <PersonalName>Ricardo Brasileiro</PersonalName>
        <PersonalSkill>Full-stack developer</PersonalSkill>
        <ContactMeButton to="/contact">
          <ContactMeButtonLabel>Contact me</ContactMeButtonLabel>
          <ContactMeButtonIcon className="material-icons">
            arrow_forward
          </ContactMeButtonIcon>
        </ContactMeButton>
      </ContactInfo>
      <ProfilePicture src={profilePicture} />
    </PersonalInfoBox>
  );
}

export default PersonalInfo;
