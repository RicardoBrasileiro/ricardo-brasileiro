import React from "react";
import SectionPresentationContent from "../../../molecules/Global/SectionPresentationContent";

import { SectionPresentationContainer } from "./styles";
import { SectionPresentationProps } from "./types";

const SectionPresentation: React.FC<SectionPresentationProps> = (
  props
): JSX.Element => {
  return (
    <SectionPresentationContainer>
      <SectionPresentationContent {...props} />
    </SectionPresentationContainer>
  );
};

export default SectionPresentation;
