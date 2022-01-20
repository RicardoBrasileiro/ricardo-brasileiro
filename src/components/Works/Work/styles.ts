import styled from 'styled-components';

export const WorkBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  position: absolute;
  min-width: 400px;
  max-width: 400px;
`;
export const WorkCompany = styled.p``;
export const WorkSeason = styled.p``;
export const WorkJob = styled.p``;
