import { Skill } from "../Skill";
import { ISkillTypeProps } from "./types";

export function SkillType({ skillType: { name, skills } }: ISkillTypeProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      <h3 className="text-lg font-bold font-display text-center">{name}</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
