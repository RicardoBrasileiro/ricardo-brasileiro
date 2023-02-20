import React from "react";
import EmailUtil from "../../../../utils/email";

import { SendEmailButton, SendEmailIcon, SendEmailLabel } from "./styles";

const SendEmail: React.FC = (): JSX.Element => {
  return (
    <SendEmailButton onClick={() => EmailUtil.sendEmail("Oi")}>
      <SendEmailIcon className="material-symbols-rounded">send</SendEmailIcon>
      <SendEmailLabel>Send</SendEmailLabel>
    </SendEmailButton>
  );
};

export default SendEmail;
