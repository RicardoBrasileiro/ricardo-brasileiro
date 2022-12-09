import React from "react";
import { SectionTitleLabel } from "./styles";
import { SectionTitleProps } from "./types";

const SectionTitle: React.FC<SectionTitleProps> = ({ title }): JSX.Element => {
  return <SectionTitleLabel>{title}</SectionTitleLabel>;
};

export default SectionTitle;
