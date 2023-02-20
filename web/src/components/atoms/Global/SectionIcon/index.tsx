import React from "react";

import { SectionIconProps } from "./types";

import { SectionIconImage } from "./styles";

const SectionIcon: React.FC<SectionIconProps> = ({ icon }): JSX.Element => {
  return <SectionIconImage src={icon} />;
};

export default SectionIcon;
