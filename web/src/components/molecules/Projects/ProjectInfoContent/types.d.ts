import { ProjectDescriptionProps } from "../../../atoms/Projects/ProjectDescription/types";
import { ProjectNameProps } from "../../../atoms/Projects/ProjectName/types";
import { ProjectTechnologiesListProps } from "../../../tissues/Projects/ProjectTechnologiesList/types";

export type ProjectInfoContentProps = ProjectNameProps &
  ProjectDescriptionProps &
  ProjectTechnologiesListProps;
