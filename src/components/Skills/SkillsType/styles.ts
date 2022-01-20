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
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const TypeSkills = styled.div`
  width: 25vw;
  height: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  background: ${({ theme }) => theme.colors.boxColor};

  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const SkillsList = styled.div``;
