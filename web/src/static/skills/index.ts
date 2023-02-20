import { SkillSection } from "../../types/Skill";
import {
  c,
  docker,
  dotNetCore,
  express,
  figma,
  git,
  java,
  javaScript,
  python,
  react,
  reactNative,
  vue,
} from "../technologies";

export const skillSections: SkillSection[] = [
  {
    name: "Programming languages",
    skills: [
      {
        technology: c,
        knowledge: 65,
      },
      {
        technology: java,
        knowledge: 25,
      },
      {
        technology: javaScript,
        knowledge: 65,
      },
      {
        technology: python,
        knowledge: 20,
      },
    ],
  },
  {
    name: "Front-end frameworks",
    skills: [
      {
        technology: react,
        knowledge: 65,
      },
      {
        technology: reactNative,
        knowledge: 35,
      },
      {
        technology: vue,
        knowledge: 40,
      },
    ],
  },
  {
    name: "Back-end frameworks",
    skills: [
      {
        technology: express,
        knowledge: 70,
      },
      {
        technology: dotNetCore,
        knowledge: 15,
      },
    ],
  },
  {
    name: "Version Control",
    skills: [
      {
        technology: git,
        knowledge: 50,
      },
    ],
  },
  {
    name: "DevOps",
    skills: [
      {
        technology: docker,
        knowledge: 65,
      },
    ],
  },
  {
    name: "UX/UI",
    skills: [
      {
        technology: figma,
        knowledge: 60,
      },
    ],
  },
];
