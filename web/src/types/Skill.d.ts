import { Technology } from "./Technology";

export type Skill = {
  technology: Technology;
  knowledge: number;
};

export type SkillSection = {
  name: string;
  skills: Skill[];
};
