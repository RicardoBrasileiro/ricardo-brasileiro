import { AlignmentOptions } from "../../../molecules/Global/SectionPresentationContent/types";

export type SectionNameLabelProps = {
  alignment?: AlignmentOptions;
};

export type SectionNameProps = SectionNameLabelProps & {
  name: string;
};
