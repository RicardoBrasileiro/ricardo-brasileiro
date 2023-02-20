import styled from "styled-components";
import { SectionPresentationContentContainerProps } from "./types";

export const SectionPresentationContentContainer = styled.div<SectionPresentationContentContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignment }) =>
    alignment === "left" || alignment === "right"
      ? alignment === "left"
        ? "flex-start"
        : "flex-end"
      : "center"};
  gap: 16px;

  width: 350px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
