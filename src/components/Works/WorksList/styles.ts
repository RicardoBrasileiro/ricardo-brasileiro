import styled from 'styled-components';

export const WorksListBox = styled.div`
  width: 100%;
  margin: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WorksLine = styled.div`
  height: 100vh;
  width: 10px;
  background: ${({ theme }) => theme.similarColors.primaryColor};
`;
