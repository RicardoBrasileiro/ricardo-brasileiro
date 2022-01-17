import styled from 'styled-components';

export const SkillsTypeBox = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    margin: 0;
    margin-bottom: 40px;
  }
`;
export const SkillTypeName = styled.p`
  margin-top: 20px;
  text-transform: uppercase;
`;
export const TypeSkills = styled.div`
  width: 25vw;
  height: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const SkillsList = styled.div``;
