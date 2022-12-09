import styled from "styled-components";
import { SocialMediaLinkContainerProps } from "./types";

export const SocialMediaLinkContainer = styled.a<SocialMediaLinkContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 6vh;
  width: 6vh;

  border-radius: 1.5vh;

  background: ${({ backgroundColor }) => backgroundColor};
`;
export const SocialMediaLinkImage = styled.img``;
