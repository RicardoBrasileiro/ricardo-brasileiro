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

  img {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
  }

  svg path {
    fill: #ffffff;

    transition: 200ms fill linear;
  }

  p {
    display: none;

    opacity: 0;

    color: #ffffff;

    font-size: 16px;
    font-weight: bold;
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

  img {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
  }

  p {
    display: none;

    opacity: 0;

    color: #ffffff;

    font-size: 16px;
    font-weight: bold;
  }
`;
