import { SectionIconProps } from "../../../atoms/Global/SectionIcon/types";
import { SectionNameProps } from "../../../atoms/Global/SectionName/types";
import { SectionDescriptionProps } from "../../../atoms/Global/SectionDescription/types";

export type AlignmentOptions = "left" | "center" | "right";

export type SectionPresentationContentContainerProps = {
  alignment?: AlignmentOptions;
};

export type SectionPresentationContentProps = SectionIconProps &
  SectionNameProps &
  SectionDescriptionProps &
  SectionPresentationContentContainerProps;
