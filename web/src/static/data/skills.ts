import { ISkillType } from "../../types";
import typeScriptIcon from "../../assets/icons/typescript.png";
import javaIcon from "../../assets/icons/java.png";
import reactIcon from "../../assets/icons/react.png";
import fastifyIcon from "../../assets/icons/fastify.png";
import springIcon from "../../assets/icons/spring.png";
import postgresIcon from "../../assets/icons/postgres.png";
import dockerIcon from "../../assets/icons/docker.png";
import figmaIcon from "../../assets/icons/figma.png";
import gitIcon from "../../assets/icons/git.png";

const typeScript = {
  name: "TypeScript",
  icon: typeScriptIcon,
  url: "https://www.typescriptlang.org",
};

const java = {
  name: "Java",
  icon: javaIcon,
  url: "https://www.java.com",
};

const react = {
  name: "React",
  icon: reactIcon,
  url: "https://react.dev",
};

const fastify = {
  name: "Fastify",
  icon: fastifyIcon,
  url: "https://fastify.io",
};

const spring = {
  name: "Spring",
  icon: springIcon,
  url: "https://spring.io",
};

const postgres = {
  name: "PostgreSQL",
  icon: postgresIcon,
  url: "https://www.postgresql.org",
};

const docker = {
  name: "Docker",
  icon: dockerIcon,
  url: "https://www.docker.com",
};

const figma = {
  name: "Figma",
  icon: figmaIcon,
  url: "https://www.figma.com",
};

const git = {
  name: "Git",
  icon: gitIcon,
  url: "https://git-scm.com",
};

export const skillTypes: ISkillType[] = [
  {
    name: "Programming languages",
    skills: [typeScript, java],
  },
  {
    name: "Front-end frameworks",
    skills: [react],
  },
  {
    name: "Back-end frameworks",
    skills: [spring, fastify],
  },
  {
    name: "Databases",
    skills: [postgres],
  },
  {
    name: "DevOps",
    skills: [docker],
  },
  {
    name: "UI/UX",
    skills: [figma],
  },
  {
    name: "Version control",
    skills: [git],
  },
];
