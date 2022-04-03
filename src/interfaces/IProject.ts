import { IImage } from './IImage';

export interface IProject {
  title: string;
  description: string;
  images: IImage[];
  codeLink: string;
  deployLink: string;
}
