import { ISkillType } from "../../types";
import dockerIcon from "../../assets/icons/docker.png";
import fastifyIcon from "../../assets/icons/fastify.png";
import figmaIcon from "../../assets/icons/figma.png";
import gitIcon from "../../assets/icons/git.png";
import javaIcon from "../../assets/icons/java.png";
import typeScriptIcon from "../../assets/icons/typescript.png";
import postgresIcon from "../../assets/icons/postgres.png";
import reactIcon from "../../assets/icons/react.png";
import springIcon from "../../assets/icons/spring.png";

const docker = {
  name: "docker",
  icon: dockerIcon,
  url: "",
};

const fastify = {
  name: "fastify",
  icon: fastifyIcon,
  url: "",
};

const figma = {
  name: "figma",
  icon: figmaIcon,
  url: "",
};

const git = {
  name: "git",
  icon: gitIcon,
  url: "",
};

const java = {
  name: "java",
  icon: javaIcon,
  url: "",
};

const typeScript = {
  name: "TypeScript",
  icon: typeScriptIcon,
  url: "",
};

const postgres = {
  name: "PostgreSQL",
  icon: postgresIcon,
  url: "",
};

const react = {
  name: "react",
  icon: reactIcon,
  url: "",
};

const spring = {
  name: "spring",
  icon: springIcon,
  url: "",
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
