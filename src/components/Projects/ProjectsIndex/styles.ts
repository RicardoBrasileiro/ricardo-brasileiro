import styled from 'styled-components';

export const ProjectsIndexBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ProjectIndex = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  transition: all 0.2s linear;
`;
