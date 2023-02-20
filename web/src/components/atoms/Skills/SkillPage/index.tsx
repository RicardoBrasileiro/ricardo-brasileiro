import React from "react";
import { SkillPageButton } from "./styles";
import { SkillPageProps } from "./types";

const SkillPage: React.FC<SkillPageProps> = ({
  page,
  setPage,
  selectedPage,
}): JSX.Element => {
  return (
    <SkillPageButton
      className={`${selectedPage === page ? "selected" : ""}`}
      onClick={() => setPage(page)}
    >
      {page + 1}
    </SkillPageButton>
  );
};

export default SkillPage;
