import styled from "styled-components";

export const SkillListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;

  &.paginated {
    min-height: calc(80px * 3 + 24px * 2);
  }
`;
