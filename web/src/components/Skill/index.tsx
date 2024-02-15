import { MouseEvent } from "react";
import { ISkillProps } from "./types";

export function Skill({ skill: { name, icon, url } }: ISkillProps) {
  function openUrl(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    window.open(url);
  }

  return (
    <a
      href={url}
      onClick={openUrl}
      className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 duration-300 size-[100px] rounded-3xl"
    >
      <img
        src={icon}
        alt={name}
        className="w-[60px] rounded-md pointer-events-none"
      />
    </a>
  );
}
