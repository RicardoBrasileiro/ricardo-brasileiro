import { Skill } from "../../../../types/Skill";

export type SkillPaginatorProps = {
  page: number;
  setPage: (page: number) => void;
  pages: number;
};
