import { Project } from "./types";

import onEducaPreview from "../../assets/images/on-educa.png";
import { express, postgreSQL, react, reactNative, vue } from "../technologies";

const projects: Project[] = [
  {
    name: "ON EDUCA",
    description:
      "Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum IpsumIpsum lorum Ipsum lorum Ipsum lorum",
    gitHubUrl: "",
    deployUrl: "http://oneduca.netlify.com/",
    technologies: [react, express, postgreSQL],
    previewPicture: onEducaPreview,
  },
  {
    name: "Virtual Contacts",
    description:
      "Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum IpsumIpsum lorum Ipsum lorum Ipsum lorum",
    gitHubUrl: "",
    deployUrl: "",
    technologies: [vue, express],
    previewPicture: onEducaPreview,
  },
  {
    name: "Osh",
    description:
      "Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum IpsumIpsum lorum Ipsum lorum Ipsum lorum",
    gitHubUrl: "",
    deployUrl: "",
    technologies: [reactNative],
    previewPicture: onEducaPreview,
  },
];

export default projects;
