import { IconLink } from "../IconLink";
import { ChevronsDown } from "lucide-react";

import profile from "../../assets/images/profile.jpg";
import { links } from "../../static/data/links";

export function Overview() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] p-10 md:p-20">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <img
            src={profile}
            alt="Profile picture"
            className="size-60 rounded-full border-8 pointer-events-none"
          />
          <div className="flex flex-col items-center">
            <h1 className="font-display text-3xl font-bold text-center">
              Ricardo Brasileiro
            </h1>
            <p className="font-display text-2xl text-center">
              Full Stack Developer
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <IconLink key={link.name} link={link} />
          ))}
        </div>
      </div>
      <ChevronsDown className="absolute bottom-10 size-7 animate-bounce" />
    </section>
  );
}
