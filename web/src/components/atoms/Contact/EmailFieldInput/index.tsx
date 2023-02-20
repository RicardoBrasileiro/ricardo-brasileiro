import React from "react";

import { EmailFieldInputProps } from "./types";

import { EmailFieldInputContainer, EmailFieldInputTextarea } from "./styles";

const EmailFieldInput: React.FC<EmailFieldInputProps> = ({
  inputType,
  fieldType: type,
  value,
  setValue,
  autoCapitalize,
  placeholder,
}): JSX.Element => {
  return inputType === "textarea" ? (
    <EmailFieldInputTextarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoCapitalize={autoCapitalize}
      placeholder={placeholder}
    ></EmailFieldInputTextarea>
  ) : (
    <EmailFieldInputContainer
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoCapitalize={autoCapitalize}
      placeholder={placeholder}
    ></EmailFieldInputContainer>
  );
};

export default EmailFieldInput;
