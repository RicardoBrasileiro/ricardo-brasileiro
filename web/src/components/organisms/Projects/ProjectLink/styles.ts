import styled from "styled-components";

export const ProjectLinkContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  background: #1e1e1e;
  border: 0.6px solid #5f5f5f;
  border-radius: 8px;

  position: relative;
  overflow: hidden;

  ::before {
    content: "";

    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    background: #ffffff07;

    opacity: 0;

    transition: all 200ms linear;
  }

  :hover::before {
    opacity: 1;
  }
`;
