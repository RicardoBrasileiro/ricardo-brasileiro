export type Project = {
  name: string;
  description: string;
  gitHubUrl: string;
  deployUrl: string;
  previewPicture: string;
  technologies: Tecnology[];
};

export type Tecnology = {
  name: string;
  icon: string;
};
