import styled from "styled-components";
import { SectionNameLabelProps } from "./types";

export const SectionNameLabel = styled.h1<SectionNameLabelProps>`
  text-align: ${({ alignment }) => alignment ?? "center"};

  font-family: "Ubuntu", sans-serif;
  font-size: 3.8rem;
`;
