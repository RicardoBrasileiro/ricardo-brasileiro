import React from "react";
import MaterialIconRounded from "../../../atoms/Global/Icons/Material/Rounded";
import { ContactMeButtonContainer, ContactMeButtonLabel } from "./styles";

const ContactMeButton: React.FC = (): JSX.Element => {
  return (
    <ContactMeButtonContainer>
      <ContactMeButtonLabel>Fale comigo</ContactMeButtonLabel>
      <MaterialIconRounded name="send" filled={true} />
    </ContactMeButtonContainer>
  );
};

export default ContactMeButton;
