import React from "react";
import { PersonalInfoContainer } from "./styles";

const PersonalInfo: React.FC = (): JSX.Element => {
  return (
    <PersonalInfoContainer>
      <h1 className="name">Ricardo Brasileiro</h1>
      <p className="function">Full stack developer</p>
    </PersonalInfoContainer>
  );
};

export default PersonalInfo;
