import styled from 'styled-components';

export const SkillsSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  margin: 0 30px;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 1150px) {
    margin: 30px 0;
    min-height: 200px;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
export const SkillSectionName = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 40px;
`;
export const Skills = styled.div``;
