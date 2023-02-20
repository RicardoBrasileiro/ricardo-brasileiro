import React from "react";

import { SeeMoreProjectsButton, SeeMoreProjectsLabel } from "./styles";

const SeeMoreProjects: React.FC = (): JSX.Element => {
  return (
    <SeeMoreProjectsButton>
      <SeeMoreProjectsLabel>See more on GitHub</SeeMoreProjectsLabel>
    </SeeMoreProjectsButton>
  );
};

export default SeeMoreProjects;
