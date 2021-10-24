import React from 'react';
import ProfileInfo from '../ProfileInfo';
import { ProfileBox, ProfilePicture } from './styles';

import profilePicture from '../../../assets/picture.jpg';

const Profile = (): JSX.Element => {
  return (
    <ProfileBox>
      <ProfileInfo />
      <ProfilePicture src={profilePicture} />
    </ProfileBox>
  );
};

export default Profile;
