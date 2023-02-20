import React from "react";
import SectionName from "../../../atoms/Global/SectionName";
import SectionDescription from "../../../atoms/Global/SectionDescription";

import { SectionPresentationContentContainer } from "./styles";
import { SectionPresentationContentProps } from "./types";
import SectionIcon from "../../../atoms/Global/SectionIcon";

const SectionPresentationContent: React.FC<SectionPresentationContentProps> = ({
  icon,
  name,
  description,
  alignment,
}): JSX.Element => {
  return (
    <SectionPresentationContentContainer alignment={alignment}>
      <SectionIcon icon={icon} />
      <SectionName name={name} alignment={alignment} />
      <SectionDescription description={description} alignment={alignment} />
    </SectionPresentationContentContainer>
  );
};

export default SectionPresentationContent;
