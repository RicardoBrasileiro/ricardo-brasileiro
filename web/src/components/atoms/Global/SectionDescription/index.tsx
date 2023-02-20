import React from "react";
import { SectionDescriptionLabel } from "./styles";
import { SectionDescriptionProps } from "./types";

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  description,
  alignment,
}): JSX.Element => {
  return (
    <SectionDescriptionLabel alignment={alignment}>
      {description}
    </SectionDescriptionLabel>
  );
};

export default SectionDescription;
