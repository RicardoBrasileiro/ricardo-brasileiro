import React from "react";
import { SectionNameLabel } from "./styles";
import { SectionNameProps } from "./types";

const SectionName: React.FC<SectionNameProps> = ({
  name,
  alignment,
}): JSX.Element => {
  return <SectionNameLabel alignment={alignment}>{name}</SectionNameLabel>;
};

export default SectionName;
