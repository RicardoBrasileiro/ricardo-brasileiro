import { AlignmentOptions } from "../../../molecules/Global/SectionPresentationContent/types";

export type SectionDescriptionProps = SectionDescriptionLabelProps & {
  description: string;
};

export type SectionDescriptionLabelProps = {
  alignment?: AlignmentOptions;
};
