import React from "react";
import { SVGIconProps } from "src/components/atoms/Global/Icons/SVG/types";

export type SocialMediaLinkContainerProps = {
  backgroundColor: string;
};

export type SocialMediaLinkProps = SocialMediaLinkContainerProps & {
  link: string;
  icon: React.FC<SVGIconProps>;
  color: string;
};
