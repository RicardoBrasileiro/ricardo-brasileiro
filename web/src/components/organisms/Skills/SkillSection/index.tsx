import React, { useEffect, useState } from "react";
import SkillsList from "../../../tissues/Skills/SkillList";
import SkillPaginator from "../SkillPaginator";
import SkillSectionName from "../../../atoms/Skills/SkillSectionName";

import { SkillSectionContainer } from "./styles";

import { Skill } from "../../../../types/Skill";
import { SkillSectionProps } from "./types";

import { SKILLS_PER_PAGE } from "../../../../constants/skills";

import PaginatorUtil from "../../../../utils/paginator";

const SkillSection: React.FC<SkillSectionProps> = ({
  section,
}): JSX.Element => {
  const { name, skills } = section;

  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const [skillsPaginated, setSkillsPaginated] = useState<Skill[]>([]);

  const getSkillsByPage = (): Skill[] => {
    const startIndex = page * SKILLS_PER_PAGE;
    const endIndex = startIndex + SKILLS_PER_PAGE;

    return skills.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setPages(PaginatorUtil.calculatePages(skills.length, SKILLS_PER_PAGE));
  }, [skills]);

  useEffect(() => {
    setSkillsPaginated(getSkillsByPage());
  }, [page]);

  return (
    <SkillSectionContainer>
      <SkillSectionName name={name} />
      <SkillsList
        skills={skillsPaginated}
        isPaginated={skills.length > SKILLS_PER_PAGE}
      />
      {pages > 1 && (
        <SkillPaginator page={page} setPage={setPage} pages={pages} />
      )}
    </SkillSectionContainer>
  );
};

export default SkillSection;
