import styled from 'styled-components';

export const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.similarColors.primaryColor};
`;
export const SkillName = styled.p`
  margin-bottom: 5px;
`;
export const SkillProgress = styled.div`
  height: 10px;
  width: 100%;
  background: ${({ theme }) => theme.colors.textColor};
  border-radius: 5px;
  overflow: hidden;
`;
export const SkillBar = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.similarColors.primaryColor};
`;
export const Progress = styled.div``;
