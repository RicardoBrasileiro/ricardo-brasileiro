import React from "react";

export type EmailFieldInputProps = {
  inputType?: string;
  fieldType: React.HTMLInputTypeAttribute | undefined;
  value: string;
  setValue: (value: string) => void;
  autoCapitalize?: string;
  placeholder: string;
};
