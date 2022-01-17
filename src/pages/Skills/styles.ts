import styled from 'styled-components';

export const SkillsBox = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 80px;
  animation: fadeIn 0.2s linear;

  @media (max-width: 900px) {
    padding: 0 40px;
    padding-top: 100px;
  }
`;
export const SkillsTypeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
