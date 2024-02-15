import { IIconLink } from "../../types";

import emailIcon from "../../assets/icons/email.png";
import githubIcon from "../../assets/icons/github.png";
import linkedInIcon from "../../assets/icons/linkedin.png";

export const links: IIconLink[] = [
  {
    name: "LinkedIn",
    icon: linkedInIcon,
    url: "https://www.linkedin.com/in/ricardobgx",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    url: "https://github.com/ricardobgx",
  },
  {
    name: "Email",
    icon: emailIcon,
    url: "mailto:contato@ricardobrasileiro.com",
  },
];
