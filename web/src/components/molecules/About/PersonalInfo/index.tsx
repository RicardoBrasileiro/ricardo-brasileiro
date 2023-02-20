import React from "react";
import { Function, Name, PersonalInfoContainer } from "./styles";

const PersonalInfo: React.FC = (): JSX.Element => {
  return (
    <PersonalInfoContainer>
      <Name>Ricardo Brasileiro</Name>
      <Function>Full stack developer</Function>
    </PersonalInfoContainer>
  );
};

export default PersonalInfo;
