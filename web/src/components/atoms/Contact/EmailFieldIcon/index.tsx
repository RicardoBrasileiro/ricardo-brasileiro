import React from "react";

import { EmailFieldIconProps } from "./types";

import { EmailFieldIconSpan } from "./styles";

const EmailFieldIcon: React.FC<EmailFieldIconProps> = ({
  icon,
}): JSX.Element => {
  return (
    <EmailFieldIconSpan className="material-symbols-rounded">
      {icon}
    </EmailFieldIconSpan>
  );
};

export default EmailFieldIcon;
