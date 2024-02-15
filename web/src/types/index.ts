export interface IIconLink {
  name: string;
  icon: string;
  url: string;
}

export interface ISkill extends IIconLink {}

export interface ISkillType {
  name: string;
  skills: ISkill[];
}
