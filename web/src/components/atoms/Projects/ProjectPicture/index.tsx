import React from "react";

import { ProjectPictureProps } from "./types";

import { ProjectPictureImage } from "./styles";

const ProjectPicture: React.FC<ProjectPictureProps> = ({
  picture,
}): JSX.Element => {
  return <ProjectPictureImage src={picture} />;
};

export default ProjectPicture;
