import styled from "styled-components";

export const SkillSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  min-width: 340px;

  @media screen and (max-width: 480px) {
    width: 100%;
    min-width: 320px;
  }
`;
