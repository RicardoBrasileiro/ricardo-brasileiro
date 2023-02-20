import React, { useEffect, useState } from "react";
import SkillPage from "../../../atoms/Skills/SkillPage";

import { SkillPaginatorContainer } from "./styles";

import { SkillPaginatorProps } from "./types";

const SkillPaginator: React.FC<SkillPaginatorProps> = ({
  page,
  setPage,
  pages,
}): JSX.Element => {
  const [pagesArray, setPagesArray] = useState<number[]>([]);

  const populatePages = (pagesNumber: number) => {
    let newPagesArray = [];

    for (let i = 0; i < pagesNumber; i++) {
      newPagesArray.push(i);
    }

    setPagesArray(newPagesArray);
  };

  useEffect(() => {
    populatePages(pages);
  }, [pages]);

  return (
    <SkillPaginatorContainer>
      {pagesArray.map((pagesItem) => (
        <SkillPage
          key={`${page}${Math.random()}`}
          page={pagesItem}
          selectedPage={page}
          setPage={setPage}
        />
      ))}
    </SkillPaginatorContainer>
  );
};

export default SkillPaginator;
