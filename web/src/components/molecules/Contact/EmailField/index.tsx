import React from "react";
import EmailFieldIcon from "../../../atoms/Contact/EmailFieldIcon";
import EmailFieldInput from "../../../atoms/Contact/EmailFieldInput";

import { EmailFieldProps } from "./types";

import { EmailFieldContainer } from "./styles";

const EmailField: React.FC<EmailFieldProps> = ({
  icon,
  inputType,
  fieldType,
  value,
  setValue,
  autoCapitalize,
  placeholder,
}): JSX.Element => {
  return (
    <EmailFieldContainer
      style={{ alignItems: inputType === "textarea" ? "flex-start" : "" }}
    >
      <EmailFieldIcon icon={icon} />
      <EmailFieldInput
        inputType={inputType}
        fieldType={fieldType}
        value={value}
        setValue={setValue}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
      />
    </EmailFieldContainer>
  );
};

export default EmailField;
