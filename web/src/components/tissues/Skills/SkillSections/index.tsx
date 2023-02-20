import React from "react";
import SkillSection from "../../../organisms/Skills/SkillSection";

import { SkillSectionsContainer } from "./styles";
import { SkillSectionsProps } from "./types";

const SkillSections: React.FC<SkillSectionsProps> = ({
  sections,
}): JSX.Element => {
  return (
    <SkillSectionsContainer>
      {sections.map((section) => (
        <SkillSection key={section.name} section={section} />
      ))}
    </SkillSectionsContainer>
  );
};

export default SkillSections;
