import styled from "styled-components";

export const SkillPageButton = styled.button`
  width: 40px;
  height: 22px;

  font-weight: bold;

  background: #171717;

  transition: all 300ms linear;

  &.selected {
    color: #171717;
    background: none;
  }
`;
