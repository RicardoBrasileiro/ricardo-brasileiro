import styled from "styled-components";

export const SeeMoreProjectsButton = styled.button`
  position: relative;

  z-index: 1;

  padding: 8px 16px;

  background: linear-gradient(105deg, #4200ff, #ff00e5);

  border-radius: 8px;

  transition: all 300ms ease-out;

  box-shadow: 0px 0px 0px #4200ff75, 0px 0px 0px #ff00e575;

  ::before {
    content: "";

    position: absolute;
    top: 2px;
    left: 2px;

    width: calc(100% - 4px);
    height: calc(100% - 4px);

    background: #171717;

    z-index: -1;

    border-radius: 6px;
  }

  :hover {
    box-shadow: -2px -2px 10px #4200ff75, 2px 2px 10px #ff00e575;
  }
`;

export const SeeMoreProjectsLabel = styled.p``;
