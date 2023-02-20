import styled from "styled-components";
import { SectionDescriptionLabelProps } from "./types";

export const SectionDescriptionLabel = styled.p<SectionDescriptionLabelProps>`
  text-align: ${({ alignment }) => alignment ?? "center"};

  font-size: 1rem;
`;
