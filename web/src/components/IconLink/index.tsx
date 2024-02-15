import { MouseEvent } from "react";
import { IIconLinkProps } from "./types";

export function IconLink({ link: { name, icon, url } }: IIconLinkProps) {
  function openLink(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    window.open(url);
  }

  return (
    <a
      href={url}
      onClick={openLink}
      className="flex flex-col items-center justify-center size-12 bg-neutral-800 hover:bg-neutral-700 duration-300 rounded-full"
    >
      <img src={icon} alt={name} className="size-6 pointer-events-none" />
    </a>
  );
}
