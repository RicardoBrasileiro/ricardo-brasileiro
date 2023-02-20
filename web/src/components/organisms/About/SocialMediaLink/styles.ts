import styled from "styled-components";

export const SocialMediaLinkButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  width: 44px;
  padding: 10px;

  background: #ffffff;

  border-radius: 25px;

  cursor: pointer;

  transition: 300ms all linear;

  &.linkedin:hover {
    width: 122px;
  }

  &.github:hover {
    width: 114px;
  }

  &.email:hover {
    width: 99px;
  }
`;

export const SocialMediaLinkAncorContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  width: 44px;
  padding: 10px;

  background: #ffffff;

  border-radius: 25px;

  cursor: pointer;

  transition: 300ms all linear;

  &.linkedin:hover {
    width: 122px;
  }

  &.github:hover {
    width: 114px;
  }

  &.email:hover {
    width: 99px;
  }
`;
