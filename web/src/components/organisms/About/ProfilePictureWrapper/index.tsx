import React from "react";
import {
  CurrentEnterprise,
  CurrentEnterpriseName,
  CurrentEnterprisePicture,
  ProfilePicture,
  ProfilePictureWrapperContainer,
} from "./styles";

import profilePicture from "../../../../assets/images/profile.jpg";
import enterpriseLogo from "../../../../assets/images/enterprise-logo.png";

const ProfilePictureWrapper: React.FC = (): JSX.Element => {
  return (
    <ProfilePictureWrapperContainer>
      <ProfilePicture src={profilePicture} alt="" />
      <CurrentEnterprise
        className="current-enterprise show-label"
        onClick={() => window.open("https://www.accenture.com")}
      >
        <CurrentEnterprisePicture
          src={enterpriseLogo}
          alt=""
          className="current-enterprise-logo"
        />
        <CurrentEnterpriseName>Accenture</CurrentEnterpriseName>
      </CurrentEnterprise>
    </ProfilePictureWrapperContainer>
  );
};

export default ProfilePictureWrapper;
